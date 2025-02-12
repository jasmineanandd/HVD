const canvas = document.getElementById("traceCanvas");
const ctx = canvas.getContext("2d");

document.body.style.backgroundColor = "pink"; // Set pink background

const texts = ["Happy Valentine's Day Tanmay", "I Love You"];
const fontSize = 50;
ctx.font = fontSize + "px Arial";
ctx.fillStyle = "red";

let textIndex = 0;
let charIndex = 0;

function drawText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(texts[textIndex].substring(0, charIndex), 50, canvas.height / 2);
    charIndex++;

    if (charIndex <= texts[textIndex].length) {
        setTimeout(drawText, 200);
    } else if (textIndex < texts.length - 1) {
        textIndex++;
        charIndex = 0;
        setTimeout(drawText, 500);
    } else {
        setTimeout(startSlideshow, 1000); // Start image slideshow after text
    }
}

// Image slideshow
const images = ["image1.png", "image2.png", "image2.png"];
let imgIndex = 0;
const img = new Image();

function startSlideshow() {
    img.src = images[imgIndex];
    img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 100, 50, canvas.width - 200, canvas.height - 100);
    };
    imgIndex = (imgIndex + 1) % images.length;
    setTimeout(startSlideshow, 2000);
}

// Start animation when the page loads
window.onload = () => {
    drawText();
};
