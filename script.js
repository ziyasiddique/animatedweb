function timelineOne() {
    var t1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: 1,
            pin: true,
            end: "bottom, -500%"
        }
    });

    t1.to("#circle #btm img", {
        scale: 1,
        rotate: "-180deg",
        duration: 1,
        stagger: .1,
        ease: Power1
    }, "hello")
        .to("#circle #top img", {
            scale: 1,
            duration: 1,
            stagger: .1,
            ease: Power1
        }, "hello")
        .to("#cimage img", {
            scale: 0,
            duration: 1,
            stagger: .1,
            ease: Power1
        }, "hello")
        .to("#centerimg h5", {
            opacity: "0",
            stagger: .1,
            ease: Power1
        }, "hello")
        .to("#circle", {
            scale: 0.6,
            duration: 2,
            ease: Power1
        }, "hello")
        .to("#overlay>h1#gallery", {
            bottom: "-50%",
            ease: Power1
        }, "hello")
        .to("#overlay>h1#pf", {
            rotate: 0,
            bottom: "2%",
            ease: Power1
        }, "hello2")
        .to("#pinkpart", {
            top: 0,
            durarion: 5,
            ease: Power1
        }, "hello2")
        .to("#pinkpart", {
            top: "-30%",
            durarion: 3,
            ease: Power1
        })
        .to("#smcircle", {
            scale: 0,
            ease: Power1,
            duration: 2
        }, "hello2")
        .to("#circle", {
            scale: 0,
            ease: Power1
        }, "hello2")
        .to("#gola", {
            top: "50%",
            scale: 2,
            durarion: 2.2,
            ease: Power1
        }, "hello")
        .to("#gola", {
            opacity: 0,
            ease: Power1
        }, "hello2")
}
timelineOne();

function timelineTwo() {
    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#sec",
            start: "top top",
            scrub: 1,
            pin: true,
            end: "bottom, -250%"
        }
    });

    t2.to(".circle", {
        top: "50%",
        stagger: .1,
        ease: Power1
    })
        .to(".circle", {
            left: "50%",
            stagger: .1,
            ease: Power1
        })
        .to(".pi", {
            scale: 10,
            ease: Power1
        })
        .to(".pi", {
            background: "linear-gradient(to right, rgb(180, 170, 213), rgb(213, 167, 180))",
            ease: Power1
        })
        .to("#stop h1", {
            left: "-150%",
            stagger: 1,
            durarion: 8,
            ease: Power1.easeInOut
        }, "a")
        .to("#sbtm #two", {
            opacity: 0,
            durarion: 3,
            ease: Power1
        }, "a")
        .to("#sbtm #one", {
            opacity: 1,
            durarion: 3,
            ease: Power1
        }, "a")
}
timelineTwo();