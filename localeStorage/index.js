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
    li.innerText = text;
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

addButton.addEventListener('click', ev => {
    let text = getValue();
    if (text) {
        let li = createElement(text);
        list.appendChild(li);
    }
});

resetButton.addEventListener('click', ev => {
    localStorage.removeItem('comments');
    list.innerHTML = '';
});

const cache = localStorage.getItem('comments');
if (cache) {
    const comments = JSON.parse(cache);
    comments.forEach(itemText => {
        const li = createElement(itemText);
        list.appendChild(li);
    });
}


// localStorage.setItem('data',5);
// console.log(localStorage.getItem('data'));
// const a =[3, 4, 5];
// localStorage.setItem('a', JSON.stringify(a));
// let b = localStorage.getItem('a');
// b = JSON.parse(b);


