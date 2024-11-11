function buyCrate(price) {
    var balanceElement = document.getElementById("banana-balance");
    var currentBalance = parseInt(balanceElement.textContent);
    if (currentBalance >= price) {
        currentBalance -= price;
        balanceElement.textContent = currentBalance;
        alert("Crate purchased successfully!");
    } else {
        alert("Insufficient BananaCoins!");
    }
}