const canvas = document.getElementById("traceCanvas");
const ctx = canvas.getContext("2d");

const text = "Happy Valentine's Day Tanmay";
const fontSize = 50;
ctx.font = fontSize + "px Arial";
ctx.fillStyle = "red";

let index = 0;

function drawText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the screen
    ctx.fillText(text.substring(0, index), 50, canvas.height / 2);
    index++;

    if (index <= text.length) {
        setTimeout(drawText, 200); // Delay for the tracing effect
    }
}

// Start animation when the page loads
window.onload = () => {
    drawText();
};
