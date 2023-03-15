(function name(params) {
    var $banner = document.querySelector('.banner');
    var $bannerBtn = document.querySelector('.banner__close');

    $bannerBtn.addEventListener('click', escondeBanner);

    function mostraBanner() {
        $banner.style.display = 'block';
    }
    function escondeBanner() {
        $bannerBtn.removeEventListener('click', escondeBanner);
        $banner.parentNode.removeChild($banner);
    }

    setTimeout(mostraBanner, 2000);

    setTimeout(escondeBanner, 4000);
})()