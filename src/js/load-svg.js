const imgContainers = document.querySelectorAll('.js-svg');
imgContainers.forEach((element) => {
    const url = element.dataset.src;
    fetch(url).then(res => res.text()).then((res) => {
        element.innerHTML = res;
    });
});

//  span cl="js-svg" data-src="dist/images/f.svd"
