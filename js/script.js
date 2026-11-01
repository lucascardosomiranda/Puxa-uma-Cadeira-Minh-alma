gsap.registerPlugin(ScrollTrigger);



// HERO

const hero = gsap.timeline();

hero.from(".hero-nav", {
    opacity: 0,
    y: -25,
    duration: 1,
    ease: "power3.out"
});

hero.from(".hero-content h1", {
    opacity: 0,
    y: 60,
    duration: 1.2,
    ease: "power3.out"
}, "-=0.5");

hero.from(".hero-content p", {
    opacity: 0,
    y: 35,
    duration: 1,
    ease: "power3.out"
}, "-=0.7");

hero.fromTo(".hero-content .content > a",
    {
        opacity: 0,
        y: 25
    },
    {
        opacity: 1,
        y: 0,
        duration: .5,
        ease: "power3.out"
    },
    "-=0.5"
);



// HISTÓRIA

const historia = gsap.timeline({
    scrollTrigger: {
        trigger: ".historia",
        start: "top 70%",
        once: true
    }
});

historia.from(".historia h2", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out"
});

historia.from(".historia-text h3", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.25,
    ease: "power3.out"
}, "-=0.3");

historia.from(".historia-text p", {
    opacity: 0,
    y: 35,
    duration: 0.9,
    stagger: 0.15,
    ease: "power3.out"
}, "-=0.6");

historia.from(".historia-line", {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "center",
    duration: 1,
    ease: "power3.out"
}, "-=0.7");

historia.from(".historia-destaque", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out"
}, "-=0.4");



// OBRA

const obra = gsap.timeline({
    scrollTrigger: {
        trigger: ".obra",
        start: "top 70%",
        once: true
    }
});

obra.from(".obra h2", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out"
});

obra.from(".obra-text h3", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
}, "-=0.3");

obra.from(".obra-text p", {
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: "power3.out"
}, "-=0.6");

obra.from(".obra-content > img", {
    opacity: 0,
    x: 100,
    duration: 1.2,
    ease: "power3.out"
}, "-=0.7");

obra.from(".obra-line", {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "center",
    duration: 1,
    ease: "power3.out"
}, "-=0.8");



// PAPER

const paper = gsap.timeline({
    scrollTrigger: {
        trigger: ".paper",
        start: "top 70%",
        once: true
    }
});

paper.from(".paper-content > picture", {
    opacity: 0,
    y: 100,
    scale: 0.95,
    duration: 1.3,
    ease: "power3.out"
});

paper.from(".paper h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
}, "-=0.7");

paper.from(".paper .circle", {
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    ease: "power3.out"
}, "-=0.8");

paper.from(".paper-line", {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "center",
    duration: 1,
    ease: "power3.out"
}, "-=0.9");



// VÍDEO

const video = gsap.timeline({
    scrollTrigger: {
        trigger: ".video",
        start: "top 70%",
        once: true
    }
});

video.from(".video-content h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
});

video.from(".video video", {
    opacity: 0,
    y: 60,
    duration: 1.2,
    ease: "power3.out"
}, "-=0.5");

video.fromTo(".video-content > a",
    {
        opacity: 0,
        y: 30
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    },
    "-=0.6"
);

video.from(".video-line", {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "center",
    duration: 1,
    ease: "power3.out"
}, "-=0.7");



// PODCAST

gsap.from(".podcast > *", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    clearProps: "transform,opacity",
    scrollTrigger: {
        trigger: ".podcast",
        start: "top 80%",
        once: true
    }
});



// AUTOR

const autor = gsap.timeline({
    scrollTrigger: {
        trigger: ".autor",
        start: "top 70%",
        once: true
    }
});

autor.from(".autor h2", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out"
});

autor.from(".autor-content > img", {
    opacity: 0,
    x: -100,
    duration: 1.2,
    ease: "power3.out"
}, "-=0.3");

autor.from(".autor-text h3", {
    opacity: 0,
    x: 80,
    duration: 1,
    ease: "power3.out"
}, "-=0.7");

autor.from(".autor-text p", {
    opacity: 0,
    x: 80,
    duration: 1,
    ease: "power3.out"
}, "-=0.7");

autor.from(".autor-line", {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "center",
    duration: 1,
    ease: "power3.out"
}, "-=0.8");



// CANAIS

const canais = gsap.timeline({
    scrollTrigger: {
        trigger: ".canais",
        start: "top 70%",
        once: true
    }
});

canais.from(".canais-header h2", {
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: "power2.out"
});

canais.from(".canais-underline", {
    opacity: 0,
    scaleX: 0,
    transformOrigin: "center",
    duration: 0.6,
    ease: "power2.out"
}, "-=0.3");

canais.from(".card-ele", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
}, "-=0.2");

canais.from(".canais-divider", {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "center",
    duration: 0.8,
    ease: "power3.out"
}, "-=0.5");

canais.from(".formato", {
    opacity: 0,
    y: 25,
    duration: 0.6,
    stagger: 0.15,
    ease: "power3.out"
}, "-=0.5");

canais.fromTo(".botoes a",
    {
        opacity: 0,
        y: 25
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out"
    },
    "-=0.3"
);



// CTA FINAL

const cta = gsap.timeline({
    scrollTrigger: {
        trigger: ".ctafinal",
        start: "top 70%",
        once: true
    }
});

cta.fromTo(".ctafinal > a",
    {
        opacity: 0,
        y: -20
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
    }
);

cta.from(".cta-content h2", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out"
}, "-=0.4");

cta.from(".cta-content p", {
    opacity: 0,
    y: 25,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.5");



// FOOTER

gsap.from("footer .footer-content", {
    opacity: 0,
    y: 15,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "footer",
        start: "top 90%",
        once: true
    }
});