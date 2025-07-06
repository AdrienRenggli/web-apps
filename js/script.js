document.addEventListener("DOMContentLoaded", () => {
    const webApps = {
        games: [
        {
            name: "2048",
            url: "https://adrienrenggli.github.io/2048/",
            description: "A single-player sliding tile puzzle.",
            icon: "images/2048.png"
        }, {
            name: "Minesweeper",
            url: "https://adrienrenggli.github.io/Minesweeper/",
            description: "A classic puzzle game where players uncover squares on a grid.",
            emoji: "🚩"
        }, {
            name: "Tetris",
            url: "https://adrienrenggli.github.io/Tetris/",
            description: "Puzzle game where players strategically rotate and stack falling shapes. (keyboard required)",
            icon: "images/Tetris.png"
        }, {
            name: "Snake",
            url: "https://adrienrenggli.github.io/Snake/",
            description: "Controls a growing snake that must navigate a grid to collect food while avoiding collisions.",
            emoji: "🐍"
        }
        ],
        apps: [
        {
            name: "Morse Code Trainer",
            url: "https://adrienrenggli.github.io/Morse-training/",
            description: "Learn, practice and translate morse code.",
            faIcon: "fas fa-tower-cell"
        },
        {
            name: "Conway's Game of Life",
            url: "https://adrienrenggli.github.io/Game-Of-Life/",
            description: "Game of Life is a cellular automaton where simple rules determine birth, survival, or death.",
            icon: "images/GoL.gif"
        },
        {
            name: "Journal d'un chef",
            url: "https://adrienrenggli.github.io/Cook-Book/",
            description: "Discover, create and share recipes.",
            faIcon: "fa-solid fa-kitchen-set"
        }
        ]
    };

    function createAppItem(app, listElement) {
        const li = document.createElement("li");

        // Icon/Image
        if (app.icon) {
            const img = document.createElement("img");
            img.src = app.icon;
            img.alt = `${app.name} icon`;
            li.appendChild(img);
        } else if (app.faIcon) {
            const icon = document.createElement("i");
            icon.className = app.faIcon + " app-fa-icon";
            li.appendChild(icon);
        } else if (app.emoji) {
            const emojiSpan = document.createElement("span");
            emojiSpan.textContent = app.emoji;
            emojiSpan.classList.add("emoji-icon");
            li.appendChild(emojiSpan);
        }

        // Info block
        const info = document.createElement("div");
        info.classList.add("info");

        const title = document.createElement("h3");
        title.textContent = app.name;

        const description = document.createElement("p");
        description.textContent = app.description;

        info.appendChild(title);
        info.appendChild(description);
        li.appendChild(info);

        li.addEventListener("click", () => {
        window.open(app.url, "_blank");
        });

        listElement.appendChild(li);
    }

    const gamesList = document.getElementById("gamesList");
    const appsList = document.getElementById("appsList");

    webApps.games.forEach(app => createAppItem(app, gamesList));
    webApps.apps.forEach(app => createAppItem(app, appsList));
});
