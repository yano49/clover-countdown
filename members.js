// ======================================================
// Clover Executive Board 2025–2026
// Members Appreciation Page
// ======================================================

const members = {

    lcp: {

        name: "Naw Tulip",

        role: "Local Committee President",

        personality: "The Heart That Guided Clover",

        color: "#FFD95A",

        image: "assets/members/lcp.jpg",

        description:
            "You brought direction, courage and purpose to Clover. Even when the journey became difficult, you continued to guide the team and remind us why our work mattered.",

        appreciation:
            "Tulip, thank you for leading us throughout this term. I know that being LCP was never easy because you carried the expectations, pressure and responsibility of the whole Local Committee. Still, you always tried to keep us moving forward. Thank you for trusting me, listening to my ideas and giving me opportunities to grow. Through your leadership, I learned that being a leader is not only about giving direction, but also about staying strong for the people around you. I am genuinely grateful that I had the chance to be part of your Executive Board.",

        reflection:
            "I will remember your determination, the way you continued to believe in Clover and all the moments when you reminded us that we were capable of more than we thought. Clover will always carry a part of your dedication."

    },

    ogv: {

        name: "Hein Nyan Swen",

        role: "Local Committee Vice President of Outgoing Global Volunteer",

        personality: "The Courage That Kept Moving Forward",

        color: "#FF5B61",

        image: "assets/members/ogv.jpg",

        description:
            "You brought courage, directness and determination to the team. You were willing to face challenges and continue working even when the results did not come easily.",

        appreciation:
            "Aitch, thank you for being part of this journey with me. I appreciate the effort you gave to your function and the way you continued trying through every challenge. Your work required patience, communication and the courage to keep approaching people even when situations were uncertain. Thank you for sharing your opinions honestly and for bringing your own energy into our Executive Board. Although we may not have agreed on everything, every conversation helped me understand different perspectives and become more mature as a teammate. I am thankful for the moments we worked, struggled and grew together.",

        reflection:
            "I will remember your confidence, your straightforward personality and the energy you brought into our discussions. You showed me that progress often requires the courage to keep trying."

    },

    igv: {

        name: "Wint Yupa Tun",

        role: "Local Committee Vice President of Incoming Global Volunteer",

        personality: "The Care Behind Every Experience",

        color: "#88F28D",

        image: "assets/members/igv.jpg",

        description:
            "You brought care, responsibility and warmth to Clover. Through your function, you helped create meaningful experiences for people from different backgrounds.",

        appreciation:
            "Yupa, thank you for your kindness, patience and commitment throughout our term. Incoming Global Volunteer required you to take care of many details, people and unexpected situations, but you continued doing your best to make every experience meaningful. I appreciate how you cared about the people around you and how you tried to support your team. Thank you for the conversations, the teamwork and the small moments that made our Executive Board journey warmer. Working beside you taught me that meaningful leadership can also be gentle, understanding and deeply caring.",

        reflection:
            "I will remember your warm presence, the care you showed to others and the calm strength you brought during difficult situations. Your kindness became an important part of Clover."

    },

    ewa: {

        name: "Min Thiha Zaw",
    
        role: "Local Committee Vice President of Engage with AIESEC",
    
        personality: "The Decisive Voice of Clover",
    
        color: "#CFCFCF",
    
        image: "assets/members/ewa.jpg",
    
        description:
            "You brought honesty, confidence and strong decision-making to Clover. You were one of the most direct people in our Executive Board, and you were never afraid to clearly express what you believed was right.",
    
        appreciation:
            "Thiha, thank you for always being honest and direct with us throughout the term. You were never afraid to say what needed to be said, even when the conversation was difficult. I truly appreciate your strong decision-making and the confidence you brought into our Executive Board. When situations became unclear, you often helped the team look at the reality of the situation and move toward a decision. Your direct personality sometimes challenged us, but it also helped us communicate more openly and become stronger as a team. Thank you for standing firmly behind your ideas, taking responsibility for your choices and giving your own unique strength to Clover. Working with you taught me that leadership sometimes requires courage, honesty and the ability to make difficult decisions without avoiding them.",
    
        reflection:
            "I will remember your honesty, your confidence and the direct way you communicated your thoughts. You were someone who could make a clear decision and stand firmly behind it. Your strong presence became an important part of Clover and helped push our team forward when we needed direction."
    
    },

    mx: {

        name: "Kaung Myat San",

        role: "Local Committee Vice President of Membership Experience",

        personality: "The Person Who Helped Others Grow",

        color: "#FFB25B",

        image: "assets/members/mx.jpg",

        description:
            "You brought dedication to our members and helped create an environment where people could learn, belong and develop throughout the term.",

        appreciation:
            "Erik, thank you for taking care of the people who made our Local Committee possible. Membership Experience required you to understand members, support their development and maintain the spirit of the organization. I appreciate the time and energy you invested in our people, even when the work was not always visible to everyone. Thank you for cooperating with me, sharing ideas and helping us create experiences that members could remember. Through working with you, I saw how important it is to value the people behind every result. I am grateful that we had the opportunity to grow together during this term.",

        reflection:
            "I will remember your commitment to the members, your willingness to help and the moments when you worked behind the scenes to keep our people connected. Your contribution helped Clover become more than only a team of leaders."

    },

    fnl: {

        name: "Kyi Lae Kyaw Tun",

        role: "Local Committee Vice President of Finance and Legality",

        personality: "The Steady Strength Behind Clover",

        color: "#38D7D0",

        image: "assets/members/fnl.jpg",

        description:
            "You brought responsibility, stability and careful thinking to Clover. Your work helped protect the foundation behind every project and decision.",

        appreciation:
            "Katie, thank you for being one of the steady and dependable people in our Executive Board. Finance and Legality may not always be the most visible function, but every project and decision depended on your careful work. I appreciate your responsibility, patience and attention to the details that many people might overlook. Thank you for supporting our plans, helping us understand what was possible and staying beside the team throughout the term. Your calm presence and reliability gave Clover a stronger foundation. I am truly thankful that I had the chance to work with you and share this chapter together.",

        reflection:
            "I will remember your calmness, your careful way of working and the support you gave quietly behind the scenes. You showed me that some of the strongest contributions are not always the loudest ones."

    }

};

// ======================================================
// Variables
// ======================================================

const memberKeys = Object.keys(members);

let currentIndex = 0;

const detailPanel = document.getElementById("member-detail");

const detailPhoto = document.getElementById("detail-photo");
const detailName = document.getElementById("detail-name");
const detailRole = document.getElementById("detail-role");
const detailPersonality = document.getElementById("detail-personality");
const detailDescription = document.getElementById("detail-description");
const detailAppreciation = document.getElementById("detail-appreciation");
const detailReflection = document.getElementById("detail-reflection");

const previousButton = document.getElementById("prev-member");
const nextButton = document.getElementById("next-member");
const backButton = document.getElementById("back-btn");

const hero = document.querySelector(".hero");
const membersGrid = document.querySelector(".members-grid");

// ======================================================
// Initial animation
// ======================================================

window.addEventListener("load", () => {

    gsap.from("body", {
        opacity: 0,
        duration: 1
    });

    gsap.from(".member-card", {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "all"
    });

});

// ======================================================
// Open member detail
// ======================================================

function openMember(index) {

    currentIndex = index;

    const member = members[memberKeys[currentIndex]];

    document.documentElement.style.setProperty(
        "--accent",
        member.color
    );

    previousButton.disabled = currentIndex === 0;

    if (currentIndex === memberKeys.length - 1) {

        nextButton.textContent = "Final Goodbye →";

    } else {

        nextButton.textContent = "Next →";

    }

    detailPhoto.src = member.image;
    detailPhoto.alt = member.name;

    detailName.textContent = member.name;
    detailRole.textContent = member.role;
    detailPersonality.textContent = member.personality;
    detailDescription.textContent = member.description;
    detailAppreciation.textContent = member.appreciation;
    detailReflection.textContent = member.reflection;

    hero.style.display = "none";
    membersGrid.style.display = "none";

    detailPanel.classList.add("active");

    detailPanel.scrollTop = 0;

    gsap.fromTo(
        "#detail-photo",
        {
            scale: 0.7,
            opacity: 0
        },
        {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)"
        }
    );

    gsap.fromTo(
        [
            "#detail-name",
            "#detail-role",
            "#detail-personality",
            ".section",
            ".detail-buttons"
        ],
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.65,
            ease: "power3.out"
        }
    );

}

// ======================================================
// Member card clicks
// ======================================================

document.querySelectorAll(".member-card").forEach((card, index) => {

    card.addEventListener("click", () => {

        openMember(index);

    });

});

// ======================================================
// Back button
// ======================================================

backButton.addEventListener("click", () => {

    detailPanel.classList.remove("active");

    hero.style.display = "block";
    membersGrid.style.display = "grid";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ======================================================
// Next member
// ======================================================

nextButton.addEventListener("click", () => {

    if (currentIndex < memberKeys.length - 1) {

        openMember(currentIndex + 1);

    } else {

        window.location.href = "goodbye.html";

    }

});

// ======================================================
// Previous member
// ======================================================

previousButton.addEventListener("click", () => {

    if (currentIndex > 0) {

        openMember(currentIndex - 1);

    }

});

// ======================================================
// Background music
// ======================================================
const backgroundMusic = document.getElementById("members-bg-music");
const musicToggle = document.getElementById("music-toggle");

backgroundMusic.volume = 0.35;

function updateMusicButton() {
    if (backgroundMusic.paused) {
        musicToggle.textContent = "♫ Play Music";
        musicToggle.setAttribute("aria-label", "Play background music");
        musicToggle.classList.remove("playing");
    } else {
        musicToggle.textContent = "❚❚ Pause Music";
        musicToggle.setAttribute("aria-label", "Pause background music");
        musicToggle.classList.add("playing");
    }
}

async function startMusic() {
    try {
        await backgroundMusic.play();
        updateMusicButton();
    } catch (error) {
        console.log("Autoplay with sound was blocked. Waiting for user interaction.");
    }
}

window.addEventListener("load", startMusic);

document.addEventListener(
    "pointerdown",
    async () => {
        if (backgroundMusic.paused) {
            await startMusic();
        }
    },
    { once: true }
);

document.addEventListener(
    "keydown",
    async () => {
        if (backgroundMusic.paused) {
            await startMusic();
        }
    },
    { once: true }
);

musicToggle.addEventListener("click", async (event) => {
    event.stopPropagation();

    if (backgroundMusic.paused) {
        await startMusic();
    } else {
        backgroundMusic.pause();
        updateMusicButton();
    }
});