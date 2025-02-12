const canvas = document.getElementById("traceCanvas");
const ctx = canvas.getContext("2d");

document.body.style.backgroundColor = "pink"; // Set pink background
canvas.style.backgroundColor = "pink"; // Remove black background

const texts = ["Happy Valentine's Day Tanmay"];
const fontSize = 50;
ctx.font = fontSize + "px 'Brush Script MT', cursive";
ctx.fillStyle = "#8B0000"; // Darkest pink (deep red)

let textIndex = 0;
let charIndex = 0;

const dogImage = new Image();
dogImage.src = "dog.webp"; // Ensure you have a dog image named 'dog.png'
let dogX = 50;
let dogY = canvas.height / 2 - 30;

function drawText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(texts[textIndex].substring(0, charIndex), 100, canvas.height / 2);
    ctx.drawImage(dogImage, dogX, dogY, 60, 60);
    charIndex++;
    dogX += 20; // Move dog along as it writes

    if (charIndex <= texts[textIndex].length) {
        setTimeout(drawText, 200);
    }
}

// Start animation when the page loads
window.onload = () => {
    drawText();
};
