window.onload = function() {
    const config = {
        type: 'carosel',
        perView: 3,
        /* adicionando breakPonts(responsividade) */
        breakpoints: {
            1024: {
                perView: 2
            },
            600: {
                perView: 1
            }
        }
    };
    new Glide('.glide', config).mount()
}