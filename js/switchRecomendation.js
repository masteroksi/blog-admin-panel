function switchRecommendation(rating) {
    let ratingNumber = Number(rating);
    if (ratingNumber > 5) {
        ratingNumber = 5;
    }
    if (ratingNumber < 1) {
        ratingNumber = 1;
    }
    switch (Math.round(ratingNumber)) {
        case 5:
            alert('Super');
            break;
        case 4:
            alert('Normal');
            break;
        case 3:
            alert('Middle');
            break;
        case 2:
        case 1:
            alert('very bad');
            break;
        default:
            alert('No info, or incorrect rating');
    }
}

switchRecommendation(2.6);
