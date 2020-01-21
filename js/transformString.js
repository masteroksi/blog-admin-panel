function transformString(str) {
    let result = '';
    let i = str.length - 1;
    let isLastWord = true;
    while (i >= 0) {
        let letter = str[i];
        if (isLastWord) {
            letter = str[i].toUpperCase();
        }

        if (letter === ' ') {
            isLastWord = false;
        }
        console.log(str[i]);
        result =  letter + '-' + result;
        i--;
    }
    return result;
}
console.log(12121);
// console.log(transformString('123456789'));
console.log(transformString('JavaScript is awesome'));
// transformString('I know JavaScript a little');
