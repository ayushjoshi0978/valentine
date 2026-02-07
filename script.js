function playMusic() {
    document.getElementById("bgMusic").play();
}

function showLove() {
    const days = [
        {
            title: "Rose Day 🌹",
            msg: "Like this rose, my love for you blooms every day ❤️",
            gif: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
        },
        {
            title: "Propose Day 💍",
            msg: "I choose you today, tomorrow, and forever 💖",
            gif: "https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif"
        },
        {
            title: "Chocolate Day 🍫",
            msg: "Life is sweeter with you in it 😘",
            gif: "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif"
        },
        {
            title: "Teddy Day 🧸",
            msg: "If I were a teddy, I’d never let you go 🤍",
            gif: "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
        },
        {
            title: "Promise Day 🤞",
            msg: "I promise to love you in every version of us 💞",
            gif: "https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif"
        },
        {
            title: "Hug Day 🤗",
            msg: "This hug is coded with infinite love 💕",
            gif: "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif"
        },
        {
            title: "Kiss Day 😘",
            msg: "A kiss to seal all my feelings for you 😍",
            gif: "https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif"
        },
        {
            title: "Valentine’s Day ❤️",
            msg: "I love you more than all the code I’ll ever write ❤️",
            gif: "https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif"
        }
    ];

    const today = new Date();
    const index = today.getDate() - 7;

    const d = days[Math.min(Math.max(index, 0), days.length - 1)];

    document.getElementById("dayTitle").innerText = d.title;
    document.getElementById("message").innerText = d.msg;
    document.getElementById("gif").src = d.gif;
}

/* Auto open final page only on Feb 14 */
const today = new Date();
if (today.getDate() === 14 && today.getMonth() === 1) {
    setTimeout(() => {
        window.location.href = "final.html";
    }, 3000);
}




