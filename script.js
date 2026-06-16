// =============================
// LOADER
// =============================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";
        document.getElementById("website").style.display = "block";

        startTyping();

    }, 3500);

});

// =============================
// TYPING EFFECT
// =============================

const typingText =
"Full Stack Developer • AI/ML Engineer • Intern @ Thinarex";

let index = 0;

function startTyping() {

    const element = document.getElementById("typing");

    function type() {

        if(index < typingText.length){

            element.innerHTML += typingText.charAt(index);

            index++;

            setTimeout(type, 60);

        }

    }

    type();
}

// =============================
// SMOOTH SCROLL
// =============================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute('href')
        ).scrollIntoView({
            behavior:'smooth'
        });

    });

});

// =============================
// ACTIVE NAVBAR LINKS
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href") ===
            "#" + current
        ){
            link.classList.add("active");
        }

    });

});

// =============================
// NAVBAR SCROLL EFFECT
// =============================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 100){

        nav.style.background =
        "rgba(5,8,22,.95)";

    }else{

        nav.style.background =
        "rgba(5,8,22,.75)";
    }

});

// =============================
// PARTICLE BACKGROUND
// =============================

const canvas =
document.getElementById("particles");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

let particles = [];

for(let i = 0; i < 150; i++){

    particles.push({

        x:Math.random() * canvas.width,
        y:Math.random() * canvas.height,

        radius:Math.random() * 2 + 1,

        dx:(Math.random() - 0.5),
        dy:(Math.random() - 0.5)

    });

}

function drawParticles(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(particle => {

        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            particle.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
        "#00f7ff";

        ctx.fill();

        particle.x += particle.dx;
        particle.y += particle.dy;

        if(
            particle.x < 0 ||
            particle.x > canvas.width
        ){
            particle.dx *= -1;
        }

        if(
            particle.y < 0 ||
            particle.y > canvas.height
        ){
            particle.dy *= -1;
        }

    });

    requestAnimationFrame(
        drawParticles
    );
}

drawParticles();

window.addEventListener(
    "resize",
    () => {

        canvas.width =
        window.innerWidth;

        canvas.height =
        window.innerHeight;

    }
);

// =============================
// SCROLL REVEAL ANIMATION
// =============================

const revealElements =
document.querySelectorAll(
'.glass'
);

function reveal(){

    revealElements.forEach(el => {

        const windowHeight =
        window.innerHeight;

        const elementTop =
        el.getBoundingClientRect().top;

        if(
            elementTop <
            windowHeight - 100
        ){

            el.style.opacity = "1";

            el.style.transform =
            "translateY(0px)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform =
    "translateY(50px)";

    el.style.transition =
    "all 0.8s ease";

});

window.addEventListener(
    "scroll",
    reveal
);

reveal();

// =============================
// COUNTER ANIMATION
// =============================

const counters =
document.querySelectorAll(
'.stat-card h3'
);

let counterStarted = false;

function runCounters(){

    if(counterStarted) return;

    const statsSection =
    document.querySelector('.stats');

    if(!statsSection) return;

    const sectionTop =
    statsSection.getBoundingClientRect().top;

    if(
        sectionTop <
        window.innerHeight - 100
    ){

        counters.forEach(counter => {

            const target =
            parseInt(
                counter.innerText
            );

            let count = 0;

            const speed = 40;

            const updateCounter = () => {

                if(count < target){

                    count++;

                    counter.innerText =
                    count + "+";

                    setTimeout(
                        updateCounter,
                        speed
                    );

                }else{

                    counter.innerText =
                    target + "+";
                }

            };

            updateCounter();

        });

        counterStarted = true;

    }

}

window.addEventListener(
    "scroll",
    runCounters
);

// =============================
// GLOW CURSOR EFFECT
// =============================

const cursor =
document.createElement("div");

cursor.style.width = "15px";
cursor.style.height = "15px";
cursor.style.position = "fixed";
cursor.style.borderRadius = "50%";
cursor.style.background = "#00f7ff";
cursor.style.pointerEvents = "none";
cursor.style.zIndex = "99999";
cursor.style.boxShadow =
"0 0 20px #00f7ff";

document.body.appendChild(cursor);

document.addEventListener(
    "mousemove",
    e => {

        cursor.style.left =
        e.clientX + "px";

        cursor.style.top =
        e.clientY + "px";

    }
);