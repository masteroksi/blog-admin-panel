const buttons = document.querySelectorAll('.js-btn');
document
    .querySelectorAll('.js-drop-down-list')
    .forEach((el) => el.style.display = 'none');

function toggleList(list) {
    list.style.display = list.style.display === 'block' ? 'none' : 'block'
}

buttons.forEach((button) => {
    button.addEventListener('click', (ev) => {
        const clickedBtn = ev.target;
        const siblingList = clickedBtn.nextElementSibling;
        const childList = clickedBtn.querySelector('.js-drop-down-list');
        if (childList !== null) {
            toggleList(childList);
        } else if (siblingList.className === 'js-drop-down-list') {
            toggleList(siblingList);
        }
    });
});











