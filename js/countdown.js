// ======================================================
// Clover countdown
// ======================================================

// Change this back to your real ending date and time.
const EVENT_DATE = "2026-08-01T00:00:00";

const targetDate = new Date(EVENT_DATE).getTime();

let transitionStarted = false;
let countdownInterval;

// ======================================================
// Animate changing numbers
// ======================================================

function animateDigit(id, value) {

    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    if (element.textContent === value) {
        return;
    }

    element.textContent = value;

    gsap.fromTo(
        element,
        {
            opacity: 0,
            y: -20,
            scale: 1.2
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
        }
    );

}

// ======================================================
// Start the transition only once
// ======================================================

function beginTransition() {

    if (transitionStarted) {
        return;
    }

    transitionStarted = true;

    clearInterval(countdownInterval);

    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    // Give the viewer a brief moment to see 00:00:00.
    setTimeout(() => {

        if (typeof startTransition === "function") {

            startTransition();

        } else {

            console.error(
                "startTransition() was not found. Check that js/transition.js is loaded."
            );

        }

    }, 800);

}

// ======================================================
// Update countdown
// ======================================================

function updateCountdown() {

    const now = Date.now();
    const distance = targetDate - now;

    if (distance <= 0) {

        beginTransition();
        return;

    }

    const hours = Math.floor(
        distance / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    animateDigit(
        "hours",
        String(hours).padStart(2, "0")
    );

    animateDigit(
        "minutes",
        String(minutes).padStart(2, "0")
    );

    animateDigit(
        "seconds",
        String(seconds).padStart(2, "0")
    );

}

// Run immediately and then once per second.
updateCountdown();

countdownInterval = setInterval(
    updateCountdown,
    1000
);