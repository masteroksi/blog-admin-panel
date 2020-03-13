/*
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
        `;
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

getPosts()
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
*/

const requestURL = 'https://jsonplaceholder.typicode.com';

function xhr(method, url, body = null) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, requestURL + url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = () => resolve(xhr.response);
        xhr.onerror = reject;
        xhr.send(body);
    });
}

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

function getPostItemTemplate(title, text) {
    const li = document.createElement('li');
    li.className = 'postsItem';

    const titlePost = document.createElement('h3');
    titlePost.className = 'postsTitle';
    titlePost.innerText = title;

    const textPost = document.createElement('p');
    textPost.className = 'postsText';
    textPost.innerText = text;

    li.append(titlePost);
    li.append(textPost);
    return li;
}

function getCommentItemTemplate(name, email, text) {
    const li = document.createElement('li');
    li.className = 'commentsItem';

    const img = document.createElement('img');
    img.className = 'commentsImg';
    img.src = 'https://via.placeholder.com/150';

    const nameElement = document.createElement('span');
    nameElement.className = 'commentsName';
    nameElement.innerText = name;

    const emailElement = document.createElement('span');
    emailElement.className = 'commentsEmail';
    emailElement.innerText = email;

    const textElement = document.createElement('p');
    textElement.className = 'commentsText';
    textElement.innerText = text;

    li.append(img);
    li.append(nameElement);
    li.append(emailElement);
    li.append(textElement);
    return li;
}

function renderPosts() {
    const articlesWrap = document.querySelector('.js-articles');
    const postList = document.createElement('ul');
    postList.className = 'postsList';

    articlesWrap.innerHTML = '';
    articlesWrap.append(postList);

    return xhr('GET', '/posts?_limit=5')
        .then(response => {
            const result = [];
            const fragment = document.createDocumentFragment();
            response.forEach(post => {
                const postTemplateLi = getPostItemTemplate(post.title, post.body);
                fragment.appendChild(postTemplateLi);
                result.push({
                    post: post,
                    element: postTemplateLi,
                });
            });
            postList.appendChild(fragment);
            return result;
        })
        .catch(() => {
            alert('No post load');
        });
}

function renderComments(data) {
    const requests = data.map((itemPost) => {
        return xhr('GET', `/comments?postId=${itemPost.post.id}`)
            .then((comments) => {
                const ul = document.createElement('ul');
                ul.className = 'commentsList';
                const fragment = document.createDocumentFragment();
                comments.forEach((commentItem) => {
                    const commentLi = getCommentItemTemplate(
                        commentItem.name,
                        commentItem.email,
                        commentItem.body,
                    );
                    fragment.appendChild(commentLi);
                });
                ul.appendChild(fragment);
                itemPost.element.appendChild(ul);
            })
            .catch(() => alert('No comment load'));
    });
    return Promise.all(requests)
        .then(() => {
            return data;
        });
}

function renderAuthor(data) {
    const requests = data.map((itemPost) => {
        return xhr('GET', `/users?id=${itemPost.post.userId}`)
            .then((user) => {
                const span = document.createElement('span');
                span.className = 'postAuthor';
                span.innerText = user[0].name;
                itemPost.element.appendChild(span);
            })
            .catch(() => {
                alert('Load user problem');
            });
    });
    return Promise.all(requests).then(() => {
        return data;
    })
}

renderPosts()
    .then(renderAuthor)
    .then(renderComments);
