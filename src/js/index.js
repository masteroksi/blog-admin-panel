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


// ==== drag and drop ====

if (window.dragula) {
    window.dragula([...document.querySelectorAll('.js-dashboard-header')], {
        moves: function (el, container, handle) {
            return handle.classList.contains('dashboard-header__top')
                || handle.classList.contains('dashboard-header__title');
        },
        mirrorContainer: document.body,
    });
}

// ==== drag and drop end ====

// const dashboard = document.querySelector('.js-dashboard-col');
//
// // const  content = document.querySelector('.js-main-content');
//
// if (dashboard) {
//     let startCursorX;
//     let startCursorY;
//     let startX;
//     let startY;
//
//     dashboard.addEventListener('dragstart',function () {
//         startCursorX = event.pageX;
//         startCursorY = event.pageY;
//         startX = dashboard.style.marginLeft.replace('px','')*1;
//         startY = dashboard.style.marginTop.replace('px','')*1;
//     });
//     dashboard.addEventListener('dragover',function() {
//         event.preventDefault();
//     });
//
//     dashboard.addEventListener('dragend',function() {
//         dashboard.style.position = 'absolute';
//         dashboard.style.marginLeft = startX + event.pageX - startCursorX; //позиция элемента + позиция курсора - позиция курсоа в начале перетаскивания
//         dashboard.style.marginTop = startY + event.pageY - startCursorY; // Так же как и в предыдущем случае, только по другой оси
//
//     });
// }
const blogPost = {
    title: 'post title',
    name: ['James Khan', 'Chris Jones', 'Mark Jameson', 'Alene Trenton'],
    userpic: '',
    date: '',
    category: ['Business', 'travel', 'technology'],


};
const time = new Date();
const day = time.getDate();
const month = time.getMonth();
const year = time.getFullYear();
document.write(day + '.' + month + '.' + year);


const formNewArticle = document.querySelector('.js-form-submit-new-article');
if (formNewArticle) {
    formNewArticle.addEventListener('submit', evt => {
        evt.preventDefault();
        const data = new FormData(evt.target);
        const dataObj = Object.fromEntries(data.entries());
        dataObj.newMessage = window.quill.getText();

        const articles = localStorage.getItem('articles');
        if (articles) {
            const parsedArticles = JSON.parse(articles);
            parsedArticles.push(dataObj);
            localStorage.setItem('articles', JSON.stringify(parsedArticles));
        } else {
            localStorage.setItem('articles', JSON.stringify([dataObj]));
        }
    });
}

function createArticleElement(articleItem) {
    const elLi = document.createElement('li');
    elLi.className = 'posts-list__item';

    const elPreview = document.createElement('div');
    elPreview.className = 'post-preview';

    const elPicture = document.createElement('div');
    elPicture.className = 'post-preview__picture';

    const elImg = document.createElement('img');
    elImg.className = 'post-preview__img';

    const elSpanCategory = document.createElement('span');
    elSpanCategory.className = 'post-preview__category';
    elSpanCategory.innerText = articleItem.category;


    const elContent = document.createElement('div');
    elContent.className = 'post-preview__content';

    const elTitle = document.createElement('h3');
    elTitle.className = 'post-preview__title';

    const elLink = document.createElement('a');
    elLink.className = 'post-preview__title-link';
    elLink.href = '#';
    elLink.innerText = articleItem.title;


    const elText = document.createElement('p');
    elText.className = 'post-preview__text';
    elText.innerText = articleItem.newMessage;


    const elFooter = document.createElement('div');
    elFooter.className = 'post-preview__footer';

    const elUser = document.createElement('div');
    elUser.className = 'post-preview__user';

    const elPicWrap = document.createElement('div');
    elPicWrap.className = 'post-preview__user-pic-wrap';

    const elUserPic = document.createElement('img');
    elUserPic.className = 'post-preview__user-pic';
    elUserPic.src = articleItem.userpic;


    const elUserInfo = document.createElement('div');
    elUserInfo.className = 'post-preview__user-info';

    const elUsername = document.createElement('span');
    elUsername.className = 'post-preview__username';
    elUsername.innerText = articleItem.username;


    const elTime = document.createElement('time');
    // const elTime = new Date()
    elTime.className = 'post-preview__published';

    const elButton = document.createElement("div");
    elButton.className = "post-preview__buttons";
    const elBookmark = document.createElement('button')
    elBookmark.className = "post-preview__bookmark";


    elLi.append(elPreview);
    elPreview.append(elPicture);
    elPicture.append(elImg);
    elPicture.append(elSpanCategory);
    elPreview.append(elContent);
    elContent.append(elTitle);
    elTitle.append(elLink);
    elContent.append(elText);
    elContent.append(elFooter);
    elFooter.append(elUser);
    elUser.append(elPicWrap);
    elPicWrap.append(elUserPic);
    elUser.append(elUserInfo);
    elFooter.append(elButton);
    elButton.append(elBookmark);

    return elLi;
}

document.body.append(createArticleElement({
    title: 'ttt',
    username: 'oksana_tymchuk',
    userpic: 'images/header-icons/user-avatar@2x.png',
    category: 'Books',
    newMessage: '',
}));



