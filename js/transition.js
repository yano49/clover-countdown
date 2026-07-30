// ======================================================
// YouTube player setup
// ======================================================

// Replace this with your own unlisted YouTube video ID.
const YOUTUBE_VIDEO_ID = "FxWC_QXhrhQ";

let youtubePlayer = null;
let youtubePlayerReady = false;
let transitionRequested = false;

// Called automatically by the YouTube IFrame API.
function onYouTubeIframeAPIReady() {

    youtubePlayer = new YT.Player("youtube-player", {

        videoId: YOUTUBE_VIDEO_ID,

        playerVars: {
            autoplay: 0,
            controls: 1,
            playsinline: 1,
            rel: 0,
            modestbranding: 1
        },

        events: {

            onReady: function () {

                youtubePlayerReady = true;

                console.log("YouTube player is ready");

                if (transitionRequested) {
                    playYouTubeVideo();
                }

            },

            onStateChange: function (event) {

                if (event.data === YT.PlayerState.ENDED) {
                    showVideoEnding();
                }

            },

            onError: function (event) {

                console.error(
                    "YouTube player error:",
                    event.data
                );

                showVideoFallback();

            }

        }

    });

}

// ======================================================
// Countdown-to-video transition
// ======================================================

function startTransition() {

    console.log("Transition started");

    const countdownScene =
        document.getElementById("countdown-scene");

    const videoScene =
        document.getElementById("video-scene");

    const flash =
        document.getElementById("flash");

    if (!countdownScene || !videoScene) {

        console.error(
            "Countdown scene or video scene is missing."
        );

        return;

    }

    transitionRequested = true;

    const timeline = gsap.timeline();

    timeline

        .to(countdownScene, {
            opacity: 0,
            scale: 1.04,
            duration: 0.8,
            ease: "power2.inOut"
        })

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

        .to(flash, {
            opacity: 0,
            duration: 0.7,
            ease: "power2.out"
        })

        .add(() => {

            if (youtubePlayerReady) {

                playYouTubeVideo();

            } else {

                console.log(
                    "Waiting for YouTube player..."
                );

            }

        });

}

// ======================================================
// Play YouTube video
// ======================================================

function playYouTubeVideo() {

    if (!youtubePlayer || !youtubePlayerReady) {
        return;
    }

    try {

        youtubePlayer.unMute();
        youtubePlayer.setVolume(100);
        youtubePlayer.playVideo();

    } catch (error) {

        console.error(
            "Unable to begin YouTube playback:",
            error
        );

        showVideoFallback();

    }

}

// ======================================================
// Fallback play button
// ======================================================

function showVideoFallback() {

    const videoScene =
        document.getElementById("video-scene");

    if (!videoScene) {
        return;
    }

    let button =
        document.getElementById("youtube-play-button");

    if (!button) {

        button = document.createElement("button");

        button.id = "youtube-play-button";
        button.type = "button";
        button.textContent = "▶ Play Our Clover Memory";

        videoScene.appendChild(button);

    }

    button.style.display = "block";

    button.addEventListener(
        "click",
        () => {

            if (!youtubePlayerReady) {
                return;
            }

            youtubePlayer.unMute();
            youtubePlayer.setVolume(100);
            youtubePlayer.playVideo();

            button.remove();

        },
        { once: true }
    );

}

// ======================================================
// Ending shown after YouTube video finishes
// ======================================================

function showVideoEnding() {

    const playerElement =
        document.getElementById("youtube-player");

    const videoEnding =
        document.getElementById("video-ending");

    if (!playerElement || !videoEnding) {
        return;
    }

    const timeline = gsap.timeline();

    timeline

        .to(playerElement, {
            opacity: 0,
            duration: 1.3,
            ease: "power2.out"
        })

        .set(playerElement, {
            display: "none"
        })

        .to(videoEnding, {
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

        .to(videoEnding, {
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