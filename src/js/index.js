// document.querySelector(".js--show-nav-dashboards").onclick = function() {
//     open();
//     showNavbar()
//
// };
// function open() {
//     document.querySelector('.js-menu-items').classList.toggle('show')
//
// }
//
// function showDashboards() {
//     const buttons = document.querySelector('.js--show-nav-dashboards');
//     document
//         .querySelector('.js-menu-items')
//         // .forEach((el) => el.style.display = 'none');
//         .forEach((el) => el.classList.add('hidden'));
// }
//
//


const button = document.querySelector('.js-show-nav-dashboards');
const Dashboards = document.querySelector('.js-nav-dashboards');

button.addEventListener('click', function (ev) {
    ev.stopPropagation();
    Dashboards.classList.toggle('nav-dashboards_show');
});

document.body.addEventListener('click', function () {
    Dashboards.classList.remove('nav-dashboards_show');
});




const dashboard = document.querySelector('.js-dashboard-col');

// const  content = document.querySelector('.js-main-content');

if (dashboard) {
    let startCursorX;
    let startCursorY;
    let startX;
    let startY;

    dashboard.addEventListener('dragstart',function () {
        startCursorX = event.pageX;
        startCursorY = event.pageY;
        startX = dashboard.style.marginLeft.replace('px','')*1;
        startY = dashboard.style.marginTop.replace('px','')*1;
    });
    dashboard.addEventListener('dragover',function() {
        event.preventDefault();
    });

    dashboard.addEventListener('dragend',function() {
        dashboard.style.position = 'absolute';
        dashboard.style.marginLeft = startX + event.pageX - startCursorX; //позиция элемента + позиция курсора - позиция курсоа в начале перетаскивания
        dashboard.style.marginTop = startY + event.pageY - startCursorY; // Так же как и в предыдущем случае, только по другой оси

    });
}






