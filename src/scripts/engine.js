const emojis = [
    "😺", "😺",
    "🦝", "🦝",
    "🦊", "🦊",
    "🐶", "🐶",
    "🐵", "🐵",
    "🦁", "🦁",
    "🐯", "🐯",
    "🐮", "🐮"
];

let openCards = [];

// Embaralhar corretamente (com 1 e -1)
let shuffleEmojis = emojis.sort(() => Math.random() > 0.5 ? 2 : -1);

// Criar as cartas
for (let i = 0; i < shuffleEmojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    // Impede clique em carta já aberta ou já combinada
    if (this.classList.contains("boxOpen") || this.classList.contains("boxMatch")) {
        return;
    }

    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];
    
    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Você Venceu!")
}
}
