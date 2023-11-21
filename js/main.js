jQuery('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    nav: true,
    navText: [
      '<img src="images/larrow.svg">',
      '<img src="images/rarrow.svg">',
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1200:{
            items:2
        },
        1201:{
            items:3
        }
    }
})