// function getRecommendation(rating) {
//     const ratingNumber = Number(rating); // number / NaN
//     if (isNaN(ratingNumber) || ratingNumber === 0 || ratingNumber > 5) {
//         return 'Не известный рейтинг';
//     }
//
//     if (ratingNumber === 5) { // 5
//         return 'Супер фильм';
//     } else if (ratingNumber < 5 && ratingNumber >= 4) { // 4 || 4.6
//         return 'Хороший фильм';
//     } else if (ratingNumber < 4 && ratingNumber >= 3) { // 3 || 3.6
//         return 'Нормальный фильм';
//     } else if (ratingNumber < 3 && ratingNumber >= 2) { // 2 || 2.6
//         return 'Так себе фильм';
//     } else if (ratingNumber >= 1) { // 1 || 1.6
//         return 'Плохой фильм';
//     }
// }

function getRecommendation(rating) {
    const ratingNumber = Number(rating); // number / NaN
    if (isNaN(ratingNumber) || ratingNumber < 1 || ratingNumber > 5) {
        return 'Не известный рейтинг';
    }
    const responses = [
        'Плохой фильм',
        'Так себе фильм',
        'Нормальный фильм',
        'Хороший фильм',
        'Супер фильм'
    ];
    return responses[Math.round(ratingNumber) - 1];
}


console.log(getRecommendation('5'), 5);
console.log(getRecommendation({}), {});
console.log(getRecommendation([]), []);
console.log(getRecommendation(4.5), 4.5);
console.log(getRecommendation(4), 4);
console.log(getRecommendation(3.4), 3.4);
console.log(getRecommendation(3), 3);
console.log(getRecommendation(2.4), 2.4);
console.log(getRecommendation(2), 2);
console.log(getRecommendation(1.8), 1.8);
console.log(getRecommendation(1), 1);
console.log(getRecommendation(10), 10);


