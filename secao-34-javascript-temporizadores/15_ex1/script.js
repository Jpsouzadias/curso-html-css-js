(function name(params) {
    var $banner = document.querySelector('.banner');
    var $bannerBtn = document.querySelector('.banner__close');

    $bannerBtn.addEventListener('click', escondeBanner);

    var intervaloEsconde = null;

    function mostraBanner() {
        $banner.style.display = 'block';

        intervaloEsconde = setTimeout(escondeBanner, 3000);
    }
    function escondeBanner() {
        $bannerBtn.removeEventListener('click', escondeBanner);
        $banner.parentNode.removeChild($banner);

        clearTimeout(intervaloEsconde);
    }

    setTimeout(mostraBanner, 3000);

    
})()