let list = document.querySelector('.list');
let input = document.getElementById('inputId');
let addButton = document.querySelector('.btn[type=submit]');
let resetButton = document.querySelector('.btn[type=reset]');

function getValue() {
    const inputValue = input.value;
    if (inputValue === '') {
        alert('введите ваш коментарий');
        return;
    }
    addCache(inputValue);
    input.value = '';
    return inputValue;
}

function createElement(text) {
    const li = document.createElement('li');
    const label = document.createElement('label');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    const span = document.createElement('span');
    span.innerText = text;
    label.appendChild(checkBox);
    label.appendChild(span);


    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'x';
    li.appendChild(label);
    li.appendChild(deleteBtn);
    return li;

}


function addCache(text) {
    const cache = localStorage.getItem('comments');
    if (cache) {
        const oldCache = JSON.parse(cache);
        oldCache.push(text);
        const newCache = JSON.stringify(oldCache);
        localStorage.setItem('comments', newCache);
    } else {
        const newCache = JSON.stringify([text]);
        localStorage.setItem('comments', newCache);
    }
}

const submitNewItem = ev => {
    let text = getValue();
    if (text) {
        let li = createElement(text);
        list.appendChild(li);
    }
};
addButton.addEventListener('click', submitNewItem);

resetButton.addEventListener('click', ev => {
    localStorage.removeItem('comments');
    list.innerHTML = '';
});
input.addEventListener('keydown', ev => {
    if (ev.key === 'Enter') {
        submitNewItem();
    }
});
list.addEventListener('change', ev => {
    const checkBox = ev.target;
    if (checkBox.checked) {
        checkBox.parentNode.classList.add('checked');
    } else {
        checkBox.parentNode.classList.remove('checked');
    }
});
list.addEventListener('click', ev => {
    if (ev.target.tagName === 'BUTTON') {
        ev.target.parentNode.remove()
    }
});
const cache = localStorage.getItem('comments');
if (cache) {
    const comments = JSON.parse(cache);
    comments.forEach(itemText => {
        const li = createElement(itemText);
        list.appendChild(li);
    });
}




