function showLegende(x) {
    image = document.querySelector(".description" + x)
    return anime({
        targets: image,
        translateX: '0',
        autoplay: false,
        duration: 300,
        easing: 'linear'
    }).play;
}

function hideLegende(x) {
    image = document.querySelector(".description" + x)
    return anime({
        targets: image,
        translateX: '-100%',
        autoplay: false,
        duration: 300,
        easing: 'linear'
    }).play;
}