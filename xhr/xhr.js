const requestURL = 'https://jsonplaceholder.typicode.com';


function sendRequest(method, url, body = null) {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });
    return fetch(requestURL + url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : body,
    }).then(response => {
        return response.json();
    });
}

function getCommentsTemplate(comments) {
    let str = '';
    comments.forEach((commentItem) => {
        str += `
            <li>
                <h4>${commentItem.name}</h4>
                <span>${commentItem.email}</span>
                <p>${commentItem.body}</p>
            </li>
        `
    });
    return str;
}

function getTemplate(title, text, comments) {
    return `
    <article>
        <h2>${title}</h2>
        <p>${text}</p>
        <ul>
            ${getCommentsTemplate(comments)}
        </ul>
    </article>
    `;
}

function renderData(data) {
    const articles = document.querySelector('.js-articles');
    let content = ``;
    data.forEach(item => {
        content += getTemplate(item.title, item.body, item.comments);
    });
    articles.innerHTML = content;
}

function getPosts() {
    return sendRequest('GET', '/posts?_limit=10');
}

function getComments(postId) {
    return sendRequest('GET', `/comments?postId=${postId}`);
}

getPosts('GET', '/posts?_limit=10')
    .then(data => {
        // data [{title, body, id}]

        const postsRequests = data.map((post) => getComments(post.id));
        return Promise.all(postsRequests) // [[commet1, com2], [com1, com2]]
            .then(comments => {
                comments.forEach((postComments, i) => {
                    data[i].comments = postComments;
                });
                return data;
            });
    })
    // data [{title, body, id, comments}]
    .then(data => renderData(data))
    .catch(err => console.log(err));



