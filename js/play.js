function play(stepsCount, message, stepMessage) {
    let i = 1;
    while (i < stepsCount) {
        console.log(i);
        if (i % stepMessage === 0) {
            console.log(message);
        }
        i++;
    }
}

play(12, 'mess', 3);
play(10, 'Каждое 5-е', 5);


// console.log(!!5);
// console.log(Boolean(5));
// console.log(1 % 5);
// console.log(2 % 5);
// console.log(3 % 5);
// console.log(4 % 5);
// console.log(5 % 5);
// console.log(6 % 5);
// console.log(7 % 5);
// console.log(8 % 5);
// console.log(9 % 5);
// console.log(10 % 5);


