const form = document.querySelector('.toodo__form');
const list = document.querySelector('.toodo__list');
let listData = [
    {
        id: 1,
        text: 'main list',
        isDone: false,
    },
    {
        id: 2,
        text: 'main list2',
        isDone: false,
    },
];

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}


function render() {
    list.innerHTML = '';
    listData.forEach((item, i) => {
        const html = `
        <li class="toodo__item">
            <p class="toodo__text">${item.text}</p>
            <button class="toodo__done">√</button>
            <button class="toodo__delete">x</button>
        </li>
        `;
        const element = htmlToElement(html);
        list.append(element);
    });
}

render();
form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const field = document.querySelector('.toodo__field');
    console.dir(list);
    // console.log(field.value);
    listData.push({
        id: Math.random(),
        text: field.value,
        isDone: false,
    });
    field.value = "";
    render()
});
