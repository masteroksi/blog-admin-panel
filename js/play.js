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

