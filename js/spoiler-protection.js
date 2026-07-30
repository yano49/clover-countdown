// ======================================================
// Clover countdown spoiler protection
// Prevents casual right-clicking and common shortcuts.
// This does not provide complete security.
// ======================================================

document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});

document.addEventListener("dragstart", (event) => {
    event.preventDefault();
});

document.addEventListener("selectstart", (event) => {
    event.preventDefault();
});

document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    const isMac = navigator.platform
        .toUpperCase()
        .includes("MAC");

    const modifier = isMac
        ? event.metaKey
        : event.ctrlKey;

    const blockedShortcut =
        event.key === "F12" ||
        (modifier && event.shiftKey && key === "i") ||
        (modifier && event.shiftKey && key === "j") ||
        (modifier && event.shiftKey && key === "c") ||
        (modifier && key === "u") ||
        (isMac && event.metaKey && event.altKey && key === "i") ||
        (isMac && event.metaKey && event.altKey && key === "j") ||
        (isMac && event.metaKey && event.altKey && key === "c");

    if (blockedShortcut) {
        event.preventDefault();
        event.stopPropagation();

        showProtectedMessage();
    }
});

function showProtectedMessage() {
    let message = document.getElementById(
        "protected-experience-message"
    );

    if (!message) {
        message = document.createElement("div");

        message.id = "protected-experience-message";

        message.textContent =
            "Please enjoy the Clover story without skipping ahead 🍀";

        document.body.appendChild(message);
    }

    message.classList.add("show");

    clearTimeout(message.hideTimer);

    message.hideTimer = setTimeout(() => {
        message.classList.remove("show");
    }, 2200);
}