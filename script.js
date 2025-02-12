<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy Valentine's Day</title>
    <style>
        body {
            background: linear-gradient(to bottom right, #ff9a9e, #fad0c4);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            font-family: 'Brush Script MT', cursive;
            overflow: hidden;
        }

        @keyframes floatingHearts {
            0% { transform: translateY(100vh); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(-10vh); opacity: 0; }
        }

        .heart {
            position: absolute;
            color: rgba(255, 182, 193, 0.8);
            font-size: 25px;
            animation: floatingHearts 5s linear infinite;
        }

        canvas {
            background-color: #ffccd5;
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 15px;
            box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
        }

        .slideshow {
            position: absolute;
            bottom: 10px;
            width: 80%;
            height: 250px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .slideshow img {
            width: 400px;
            height: 250px;
            object-fit: cover;
            position: absolute;
            opacity: 0;
            transition: opacity 1s;
            border-radius: 15px;
            box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body>
    <canvas id="traceCanvas" width="800" height="400"></canvas>
    <div class="slideshow">
        <img src="image1.jpeg" class="slide" style="opacity: 1;">
        <img src="image2.jpeg" class="slide">
    </div>
    
    <script>
        // Floating Hearts Effect
        function createHeart() {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 2 + 3 + "s";
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }
        setInterval(createHeart, 400);

        // Handwriting Effect
        const canvas = document.getElementById("traceCanvas");
        const ctx = canvas.getContext("2d");
        const texts = ["Happy Valentine's Day Tanmay ❤️"];
        ctx.font = "60px 'Brush Script MT', cursive";
        ctx.fillStyle = "#8B0000";
        let charIndex = 0;
        
        const dogImage = new Image();
        dogImage.src = "dog.webp";
        let dogX = 100;
        let dogY = canvas.height / 2 - 30;
        
        function drawText() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText(texts[0].substring(0, charIndex), 120, canvas.height / 2);
            if (dogImage.complete) {
                ctx.drawImage(dogImage, dogX, dogY, 80, 80);
            }
            charIndex++;
            dogX += 15;
            
            if (charIndex <= texts[0].length) {
                setTimeout(drawText, 150);
            }
        }
        
        dogImage.onload = () => {
            drawText();
        };

        // Slideshow Effect
        let slideIndex = 0;
        const slides = document.querySelectorAll(".slide");
        function showSlides() {
            slides.forEach((slide, i) => {
                slide.style.opacity = i === slideIndex ? "1" : "0";
            });
            slideIndex = (slideIndex + 1) % slides.length;
            setTimeout(showSlides, 3000);
        }
        showSlides();
    </script>
</body>
</html>
