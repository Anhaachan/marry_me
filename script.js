// script.js
let initialNoButtonPosition = { left: '0px', top: '0px' };

window.onload = () => {
    const noButton = document.getElementById('no');
    initialNoButtonPosition = {
        left: noButton.style.left,
        top: noButton.style.top
    };
};

function handleYes() {
    alert("Let's have a baby!!");
    resetGame();
}

function handleNo() {
    moveNoButton();
}

function moveNoButton() {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    const container = document.querySelector('.container');
    const maxWidth = container.clientWidth - noButton.clientWidth;
    const maxHeight = container.clientHeight - noButton.clientHeight;

    let overlap = true;
    let randomX, randomY;

    while (overlap) {
        randomX = Math.random() * maxWidth;
        randomY = Math.random() * maxHeight;
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;

        overlap = isOverlapping(noButton, yesButton);
    }
}

function resetGame() {
    const noButton = document.getElementById('no');
    noButton.style.left = initialNoButtonPosition.left;
    noButton.style.top = initialNoButtonPosition.top;
}

function isOverlapping(button1, button2) {
    const rect1 = button1.getBoundingClientRect();
    const rect2 = button2.getBoundingClientRect();

    return !(rect1.right < rect2.left ||
             rect1.left > rect2.right ||
             rect1.bottom < rect2.top ||
             rect1.top > rect2.bottom);
}
