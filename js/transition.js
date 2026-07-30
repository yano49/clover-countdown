// ======================================================
// Countdown to video transition
// ======================================================

function startTransition() {

    console.log("Transition started");

    const countdownScene =
        document.getElementById("countdown-scene");

    const videoScene =
        document.getElementById("video-scene");

    const video =
        document.getElementById("intro-video");

    const flash =
        document.getElementById("flash");

    if (!countdownScene || !videoScene || !video) {

        console.error(
            "Countdown scene, video scene, or intro video is missing."
        );

        return;
    }

    // Prepare the video ending sequence before playback.
    video.onended = showVideoEnding;

    // Make sure the video is ready from the beginning.
    video.currentTime = 0;
    video.style.opacity = "1";

    const timeline = gsap.timeline();

    timeline

        // Fade the countdown scene slightly.
        .to(countdownScene, {
            opacity: 0,
            scale: 1.04,
            duration: 0.8,
            ease: "power2.inOut"
        })

        // White flash.
        .to(flash, {
            opacity: 1,
            duration: 0.25,
            ease: "power2.in"
        })

        .add(() => {

            countdownScene.style.display = "none";

            videoScene.style.display = "flex";
            videoScene.style.opacity = "1";

        })

        // Remove the flash and reveal the video.
        .to(flash, {
            opacity: 0,
            duration: 0.7,
            ease: "power2.out"
        })

        .add(() => {

            playIntroVideo(video);

        });

}

// ======================================================
// Play video
// ======================================================

async function playIntroVideo(video) {

    try {

        video.muted = false;
        video.volume = 1;

        await video.play();

    } catch (soundError) {

        console.warn(
            "Playback with sound was blocked. Trying muted playback.",
            soundError
        );

        try {

            video.muted = true;

            await video.play();

            showUnmuteNotice(video);

        } catch (playbackError) {

            console.error(
                "The intro video could not start.",
                playbackError
            );

            showVideoPlayButton(video);

        }

    }

}

// ======================================================
// Fallback play button
// ======================================================

function showVideoPlayButton(video) {

    const videoScene =
        document.getElementById("video-scene");

    let button =
        document.getElementById("video-play-button");

    if (!button) {

        button = document.createElement("button");

        button.id = "video-play-button";
        button.type = "button";
        button.textContent = "▶ Play Our Memory";

        videoScene.appendChild(button);

    }

    button.style.display = "block";

    button.addEventListener(
        "click",
        async () => {

            video.muted = false;
            video.volume = 1;

            await video.play();

            button.remove();

        },
        { once: true }
    );

}

// ======================================================
// Muted playback notice for mobile
// ======================================================

function showUnmuteNotice(video) {

    const videoScene =
        document.getElementById("video-scene");

    let button =
        document.getElementById("video-unmute-button");

    if (!button) {

        button = document.createElement("button");

        button.id = "video-unmute-button";
        button.type = "button";
        button.textContent = "🔊 Tap for Sound";

        videoScene.appendChild(button);

    }

    button.addEventListener(
        "click",
        () => {

            video.muted = false;
            video.volume = 1;

            button.remove();

        },
        { once: true }
    );

}

// ======================================================
// Ending shown after video
// ======================================================

function showVideoEnding() {

    const timeline = gsap.timeline();

    timeline

        .to("#intro-video", {
            opacity: 0,
            duration: 1.5,
            ease: "power2.out"
        })

        .to("#video-ending", {
            opacity: 1,
            duration: 1
        })

        .from(".ending-logo", {
            scale: 0.5,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.8)"
        })

        .from("#video-ending h1", {
            y: 30,
            opacity: 0,
            duration: 0.8
        })

        .from("#video-ending p", {
            y: 20,
            opacity: 0,
            duration: 0.8
        })

        .to({}, {
            duration: 2
        })

        .to("#video-ending", {
            opacity: 0,
            duration: 1
        })

        .to("body", {
            opacity: 0,
            duration: 0.8,
            onComplete() {

                window.location.href = "members.html";

            }
        });

}