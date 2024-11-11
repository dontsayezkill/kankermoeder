let heads = 0;
let tails = 0;
let winPercentage = 1.1; // 110% terugbetaling

let coin = document.querySelector(".coin");
let fliptBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
let betInput = document.querySelector("#bet-amount");
let winAmountDisplay = document.querySelector("#win-amount");

fliptBtn.addEventListener("click", () => {
    let bet = parseFloat(betInput.value); // Haal de inzet op
    if (isNaN(bet) || bet <= 0) {
        alert("Voer een geldig inzetbedrag in.");
        return;
    }

    let i = Math.floor(Math.random() * 2); // Genereer willekeurige uitkomst (0 of 1)
    coin.style.animation = "none";

    if (i) { // Heads - je wint
        setTimeout(() => {
            coin.style.animation = "spin-heads 3s forwards";
            heads++;
            let winAmount = bet * winPercentage; // Bereken winstbedrag
            winAmountDisplay.textContent = `Gewonnen bedrag: €${winAmount.toFixed(2)}`;
            alert(`Gefeliciteerd! Je hebt gewonnen: €${winAmount.toFixed(2)}`);
        }, 100);
    } else { // Tails - je verliest
        setTimeout(() => {
            coin.style.animation = "spin-tails 3s forwards";
            tails++;
            winAmountDisplay.textContent = `Helaas, je hebt verloren.`;
            alert("Helaas, je hebt verloren.");
        }, 100);
    }

    setTimeout(updateStats, 3000);
    disableButton();
});

function updateStats() {
    document.querySelector("#heads-count").textContent = `Heads : ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails : ${tails}`;
}

function disableButton() {
    fliptBtn.disabled = true;
    setTimeout(() => {
        fliptBtn.disabled = false;
    }, 3000);
}

resetBtn.addEventListener("click", () => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
    winAmountDisplay.textContent = ""; // Reset win amount display
    betInput.value = ""; // Reset bet input
});
