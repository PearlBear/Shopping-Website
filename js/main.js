$(".banner").owlCarousel({
    items: 1,
    //autoplay: true,
    //autoplayTimeout: 5000,
    loop: true,
    dots: false,
    nav: true,
    navText: [
        `<i class="fal fa-arrow-left"></i>`,
        `<i class="fal fa-arrow-right"></i>`,

    ]
});

$(".product-list").owlCarousel({
    items: 5,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
});

$(".right").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    navText: [
        `<i class="fal fa-chevron-left"></i>`,
        `<i class="fal fa-chevron-right"></i>`,

    ],
    // autoplay: true,
    // autoplayTimeout: 3000,
    // loop: true,
});

$(".accounts-list").owlCarousel({
    items: 5,
    dots: false,
    nav: false,
    //autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
});

$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $("header").css("background", "black");
    } else {
        $("header").css("background", "transparent");
    }

});

$(window).scroll(function () {
    const position = $(window).scrollTop();
    console.log(position)

    if (position > 300) {
        $(".to-top").fadeIn().css("display", "flex");

    } else {
        $(".to-top").fadeOut();
    }
});

$(".to-top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
            scrollTop: 0,
        },
        1000
    );
});

//modal

let showModal = (time) => {
    setTimeout(() => {
        $(".modal").fadeIn();
    }, time);
}
showModal(3000);
$(document).click(function (e) {
    if (!e.target.closest(".modal-content") || e.target.closest(".close")) {
        if ($('input[type="checkbox"]:checked').length === 1) {
            clearTimeout(showModal);
        }
        // } else {
        //     showModal(1000);
        // }
        $(".modal").fadeOut();
    }
});