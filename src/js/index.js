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

// const time = new Date();
// const day = time.getDate();
// const month = time.getMonth();
// const year = time.getFullYear();
// document.write(day + '.' + month + '.' + year);


const formNewArticle = document.querySelector('.js-form-submit-new-article');
if (formNewArticle) {
    formNewArticle.addEventListener('submit', evt => {
        evt.preventDefault();
        const data = new FormData(evt.target);
        const dataObj = Object.fromEntries(data.entries());

        dataObj.newMessage = window.quill.getText();
        dataObj.date = new Date();
        const articles = localStorage.getItem('articles');
        if (articles) {
            const parsedArticles = JSON.parse(articles);
            parsedArticles.push(dataObj);
            localStorage.setItem('articles', JSON.stringify(parsedArticles));
        } else {
            localStorage.setItem('articles', JSON.stringify([dataObj]));
        }
        location.reload();
    });
}

const MONTH_LIST = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function createArticleElement(articleItem, i) {
    const elLi = document.createElement('li');
    elLi.className = 'posts-list__item';

    const elPreview = document.createElement('div');
    elPreview.className = 'post-preview';

    const elPicture = document.createElement('div');
    elPicture.className = 'post-preview__picture';

    const elImg = document.createElement('img');
    elImg.className = 'post-preview__img';
    elImg.src = articleItem.blogPicture || 'images/blog-post-picture/blog-post-featured.jpg';

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
    elUserPic.width = '40';
    elUserPic.height = '40';
    elUserPic.alt = '40';


    const elUserInfo = document.createElement('div');
    elUserInfo.className = 'post-preview__user-info';

    const elUsername = document.createElement('span');
    elUsername.className = 'post-preview__username';
    elUsername.innerText = articleItem.username;


    const elTime = document.createElement('time');
    elTime.className = 'post-preview__published';
    const readableDate = new Date(articleItem.date);
    const yyyy = readableDate.getFullYear();
    const dd = readableDate.getDate();
    const mm = MONTH_LIST[readableDate.getMonth()];
    elTime.innerText = `${dd} ${mm} ${yyyy}`;

    const elButtons = document.createElement('div');
    elButtons.className = 'post-preview__buttons';

    const elBookmark = document.createElement('button');
    elBookmark.className = 'post-preview__bookmark';
    elBookmark.innerText = 'Bookmark';

    const elTextFoother = document.createElement('div');
    elTextFoother.className = 'post-preview__text-footer';

    const elTextFootSpan1 = document.createElement('span');
    elTextFootSpan1.innerText = 'By ';
    const elTextFootSpan2 = document.createElement('span');
    elTextFootSpan2.innerText = 'in';

    const elTextFootName = document.createElement('span');
    elTextFootName.className = 'post-preview__username-foot';
    elTextFootName.innerText = articleItem.username;

    const elTextFootCategory = document.createElement('span');
    elTextFootCategory.className = 'post-preview__category-foot';
    elTextFootCategory.innerText = articleItem.category;


    elLi.append(elPreview);
    elPreview.append(elPicture);
    elPreview.append(elContent);

    elPicture.append(elImg);
    elPicture.append(elSpanCategory);

    elContent.append(elTitle);
    elContent.append(elText);
    elContent.append(elFooter);
    elContent.append(elTextFoother); //

    elTitle.append(elLink);
    elFooter.append(elUser);
    elFooter.append(elButtons);

    elButtons.append(elBookmark);

    elUser.append(elPicWrap);
    elPicWrap.append(elUserPic);
    elUser.append(elUserInfo);

    elUserInfo.append(elUsername);
    elUserInfo.append(elTime);

    elTextFoother.append(elTextFootSpan1);
    elTextFoother.append(elTextFootName);
    elTextFoother.append(elTextFootSpan2);
    elTextFoother.append(elTextFootCategory);


    // elLi.append(elPreview);
    // elPreview.append(elPicture);
    // elPicture.append(elImg);
    // elPicture.append(elSpanCategory);
    // elPreview.append(elContent);
    // elContent.append(elTitle);
    // elTitle.append(elLink);
    // elContent.append(elText);
    // elContent.append(elFooter);
    // elFooter.append(elUser);
    // elUser.append(elPicWrap);
    // elPicWrap.append(elUserPic);
    // elUser.append(elUserInfo);
    // elUserInfo.append(elUsername);
    // elUserInfo.append(elTime);
    // elFooter.append(elButtons);
    // elButtons.append(elBookmark);

    return elLi;

}

const articlesList = document.querySelector('.js-articles');

function renderArticles() {
    const articlesData = localStorage.getItem('articles');
    if (articlesData) {
        const parsedArticles = JSON.parse(articlesData);
        const items = document.createDocumentFragment();
        parsedArticles.forEach((article) => {
            const articleItemElement = createArticleElement(article);
            items.append(articleItemElement);
        });
        articlesList.innerHTML = '';
        articlesList.append(items);
    }
}

if (articlesList) {
    renderArticles();
}


(function () {
    if (window.Chart) {
        // const chart = document.querySelector('.s-chart');
        const fruitCanvas = document.getElementById('jsChart');
        const fruitData = {
            labels: [
                'Desktop',
                'Tablet',
                'Mobile',
            ],
            datasets: [
                {
                    data: [123, 75, 41],
                    backgroundColor: [
                        '#007BFF',
                        '#00B8D8',
                        '#82a5fc',
                    ],
                }],
        };

        const options = {
            title: {
                display: true,
                text: 'Highlight a portion on click',
                position: 'top',
            },
            onClick: (evt, item) => {
                pieChart.update();
                item[0]._model.outerRadius += 10;
            },
        };

        const pieChart = new Chart(fruitCanvas, {
            type: 'pie',
            data: fruitData,
            options: options,
        });

        function generateNumber(from, to) {
            return Math.round(Math.random() * (to - from) + from);
        }

        function updateChart() {
            setTimeout(() => {
                console.log(pieChart);
                pieChart.data.datasets = [{
                    data: [generateNumber(50, 123), generateNumber(50, 75), generateNumber(20, 41)],
                    backgroundColor: [
                        '#007BFF',
                        '#00B8D8',
                        '#82a5fc',
                    ],
                }];

                pieChart.update();
                updateChart();
            }, 5000);
        }
        updateChart();
    }
})();
