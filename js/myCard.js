function generateNumber(from, to) {
    return Math.round(Math.random() * (to - from) + from);
}

function normolizeNumber(num) {
    if (num > 9) {
        return num.toString()
    }
    return `0${num}`
}

function makeCard(type, name = '', lastname = '') {
    const isCorrectType = typeof type === 'string' && (type.toUpperCase() === 'VISA' || type.toUpperCase() === 'MASTERCARD');
    const isCorrectName = typeof name === 'string';
    const isCorrectLastname = typeof lastname === 'string';

    if (!isCorrectType || !isCorrectName || !isCorrectLastname){
        throw new Error('Не коректные данные при вызове');
    }

    const cardName = `${name} ${lastname}`.toUpperCase().trim();
    const month = normolizeNumber(generateNumber(1, 12));
    const year = [30, 29, 28, 34][generateNumber(0, 3)];
    return {
        type: type.toUpperCase(),
        name: cardName,
        expire: `${month}/${year}`,
        cvv: generateNumber(100, 999)
    }
}
const myCard = makeCard('visa', 'Oksana', 'Tymchuk');
const vadymCard = makeCard('mastercard');
console.log(myCard);
console.log(vadymCard);

