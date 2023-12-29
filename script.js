var body = document.querySelector('#main');
body.addEventListener('mousemove', function (e) {
    var bodyLocation = body.getBoundingClientRect();// give the location of mouse of entire screen
    if (e.clientX > bodyLocation.width / 2) {
        var bluecolor = gsap.utils.mapRange(bodyLocation.width / 2, bodyLocation.width, 0, 160, e.clientX);
        gsap.to(main, {
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease: Power4,
        });

    }
    else {
        var redcolor = gsap.utils.mapRange(0, bodyLocation.width / 2, 160, 0, e.clientX);
        gsap.to(main, {
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease: Power4,
        });
    }
})
