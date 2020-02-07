const field = document.querySelector('.js-field');
const myBall = document.querySelector('.js-my-ball');
const otherBall = document.querySelector('.js-other-ball');

// const fieldH = field.offsetHeight;
// const fieldW = field.offsetWidth;
//
//
// let targetX = fieldW / 2;
// let targetY = fieldH / 2;
// let ballX = targetX;
// let ballY = targetY;
//
// myBall.style.transform = `translate3d(${ballX}px, ${ballY}px, 0)`;
//
//
// field.addEventListener('click', (evt) => {
//     let {offsetX, offsetY} = evt;
//
//     targetX = offsetX;
//     targetY = offsetY;
//
//     animate({
//         duration: 1000,
//         timing: function(timeFraction) {
//             return timeFraction;
//         },
//         draw: function(progress) {
//             myBall.style.transform = `translate3d(${ballX}px, ${ballY}px, 0)`;
//         }
//     });
// });
//
// console.dir(myBall);
//
//
// function move(current, target) {
//     if (current > target) {
//         return current - 1;
//     } else if (current < target) {
//         return current + 1;
//     }
//     return current;
// }


// let height = field.clientHeight - myBall.clientHeight;
// let width = 100;
//
// animate({
//     duration: 2000,
//     timing: makeEaseOut(bounce),
//     draw: function (progress) {
//         myBall.style.top = height * progress;
//
//     },
//
// });


// field.addEventListener('click', (evt) => {
//     let {clientY, clientX} = evt;
//     let top = clientY - myBall.offsetHeight / 2;
//     let left = clientX - myBall.offsetWidth / 2;
//
//     if (top > 0) {
//         top = 5;
//     }
//     if (left > 0) {
//         left = 5;
//     }
//     myBall.style.top = top + 'px';
//     myBall.style.left = left + 'px';
//
//     console.log(evt.offsetX);


// animate([
//     keyframes
// {transform: `translateX(${evt.offsetX}px)`},
// {transform: `translateY(${evt.offsetY}px)`},
// ], {
//     timing: 1000,
//     duration: 1000,
// });
// });


const canvas = document.querySelector('.field');
const context = canvas.getContext('2d');

const ballRadius = 50;
let x = canvas.width / 2;
let y = canvas.height / 2;
let diametX = 2.3;
let diametY = -2.3;
let toggleColor = false;
function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2);
    context.fillStyle = toggleColor ? '#00ff00' : '#00cc47';


    if (x + diametX > canvas.width - ballRadius || x + diametX < ballRadius) {
        diametX = -diametX;
        toggleColor = !toggleColor;
    }

    if (y + diametY > canvas.height - ballRadius || y + diametY < ballRadius) {
        diametY = -diametY;
        toggleColor = !toggleColor;
    }

    // const rightSideWithLeftSide = x + ballRadius / 2 > x2 - ballRadius / 2;
    // const leftSideWithRightSide = x - ballRadius / 2 < x2 + ballRadius / 2;
    // const topSideWithBottomSide = y - ballRadius / 2 > y2 + ballRadius / 2;
    // const bottomSideWithTopSide = y + ballRadius / 2 < y2 - ballRadius / 2;
    //
    //
    // if ((rightSideWithLeftSide || leftSideWithRightSide) && (topSideWithBottomSide || bottomSideWithTopSide)) {
    //     diametX = -diametX;
    //     diametY = -diametY;
    //     toggleColor = !toggleColor;
    // }
    context.fill();
    context.closePath();


    x += diametX;
    y += diametY;
}

let x2 = canvas.width / 2 + 50;
let y2 = canvas.height / 2 + 50;
let diametX2 = -2.;
let diametY2 = 5.5;
let toggleColor2 = false;
function drawOtherBall() {
    context.beginPath();
    context.arc(x2, y2, ballRadius, 0, Math.PI * 2);
    context.fillStyle = toggleColor2 ? '#ff0000' : '#ff0';

    if (x2 + diametX2 > canvas.width - ballRadius || x2 + diametX2 < ballRadius) {
        diametX2 = -diametX2;
        toggleColor2 = !toggleColor2;
    }

    if (y2 + diametY2 > canvas.height - ballRadius || y2 + diametY2 < ballRadius) {
        diametY2 = -diametY2;
        toggleColor2 = !toggleColor2;
    }

    context.fill();
    context.closePath();



    x2 += diametX2;
    y2 += diametY2;
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawOtherBall();


}

function animate() {
    requestAnimationFrame(() => {
        draw();
        animate();
    });
}

animate();

