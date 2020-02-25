(function () {
    const buttons = document.querySelectorAll('.js-btn');

    document
        .querySelectorAll('.js-drop-down-list')
        // .forEach((el) => el.style.display = 'none');
        .forEach((el) => el.classList.add('hidden'));

    function toggleList(list) {
        // list.style.display = list.style.display === 'block' ? 'none' : 'block';
        list.classList.toggle('hidden');
    }

    buttons.forEach((button) => {
        button.addEventListener('click', (ev) => {
            ev.stopPropagation();
            const clickedBtn = ev.target;
            const siblingList = clickedBtn.nextElementSibling;
            const childList = clickedBtn.querySelector('.js-drop-down-list');
            if (childList) {
                toggleList(childList);
            } else if (siblingList.className.includes('js-drop-down-list')) {
                toggleList(siblingList);
            }
        });
    });
})();


// const button = document.querySelector('.js-show-list');
// const lists = document.querySelector('.js-list');
// lists.classList.add('hidden');
// button.addEventListener('click', function () {
//     lists.classList.toggle('hidden');
//     showLine(lists, 1000);
// });
//
// document.querySelectorAll('.js-show-sublist')
//     .forEach((el) => el.classList.add('hidden'));
//
// function showLine(el, delay) {
//     const children = el.querySelectorAll(':scope > .js-show-sublist');
//
//     if (children.length === 0) {
//         const subList = el.querySelector(':scope > .js-sublist');
//         if (subList == null) {
//             return;
//         }
//         showLine(subList, delay);
//         return;
//     }
    setTimeout(() => {
        document.querySelector('.js-time').innerHTML = delay;
        children.forEach((el) => {
            showLine(el, delay + 1000)
            el.classList.remove('hidden')
        });
    }, delay);
// }














