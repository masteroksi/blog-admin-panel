function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

let sum = add(2, 2) + multiply(2, 2);

// console.log(sum);

let obj = {
    a: 1,
    b: 2,
    'a b': 3,
    innerObj: {
        w: 10,
    },
};
// console.log(obj['b']);
// console.log(obj.b);
// console.log(obj['a b']);
// console.log(obj.c);
// obj.c = 4;
// console.log(obj.c);
// obj['d'] = 5;
//
// console.log(obj.innerObj.w);
// console.log(obj['innerObj']['w']);
// const arr = [1, 2, 3];
// console.log(arr[1]);
// arr[3] = 4;
//
// const arr2 = [1, 2];
//
// arr2.length; // 2
// arr2[arr2.length] = 3;
//
//
// const arr3 = ['a', 'b', 'A', 'B'];
// arr3.push('c');
// console.log(arr3);
// arr3.pop();
// console.log(arr3);
// arr3.unshift('c');
// console.log(arr3);
// arr3.shift();
// console.log(arr3);
//
// arr3.splice(2, 2, 'k', 'm');
// console.log(arr3);
// let i = 0;
// while (i < arr3.length) {
//     console.log(arr3[i]);
//     i++
//
// }


// ========= classes

// function Dog(name) {
//     this.name = name;
// }
//
// Dog.prototype.type = 'dog';
// Dog.prototype.makeNoize = function () {
//     console.log('Woff');
// };
//
// const mops = new Dog('gary');
// const sharpey = new Dog('boby');

function BackgroundMacker(color) {
    this.color = color;
}

BackgroundMacker.prototype.getDivs = function () {
    return document.querySelectorAll('div:nth-child(2n)');
};

BackgroundMacker.prototype.fillCollor = function () {
    const bgColor = this.color;
    const divs = this.getDivs();

    divs.forEach(function (item, index) {
        item.style.backgroundColor = bgColor;
    });
};

BackgroundMacker.prototype.resetColor = function () {
    const divs = this.getDivs();

    divs.forEach(function (item, index) {
        item.style.backgroundColor = '#fff';
    });
};

class BackgroundMacker2 {
    constructor(color) {
        this.color = color;
    }

    getDivs() {
        return document.querySelectorAll('div:nth-child(2n)');
    }

    fillCollor() {
        const bgColor = this.color;
        const divs = this.getDivs();

        divs.forEach(function (item, index) {
            item.style.backgroundColor = bgColor;
        });
    }

    resetColor() {
        const divs = this.getDivs();

        divs.forEach(function (item, index) {
            item.style.backgroundColor = '#fff';
        });
    }
}

console.log(new BackgroundMacker2('#f0f'));
