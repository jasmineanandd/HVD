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
        }

        canvas {
            background-color: transparent;
        }

        .slideshow {
            position: absolute;
            bottom: 10px;
            width: 80%;
            height: 200px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .slideshow img {
            width: 300px;
            height: 200px;
            object-fit: cover;
            position: absolute;
            opacity: 0;
            transition: opacity 1s;
        }

        @keyframes sparkle {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }
        }

        .sparkle {
            position: absolute;
            font-size: 30px;
            color: white;
            opacity: 0;
            animation: sparkle 1.5s infinite;
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
        const canvas = document.getElementById("traceCanvas");
        const ctx = canvas.getContext("2d");
        const texts = ["Happy Valentine's Day Tanmay ❤️"];
        ctx.font = "50px 'Brush Script MT', cursive";
        ctx.fillStyle = "#8B0000";
        let charIndex = 0;
        
        const dogImage = new Image();
        dogImage.src = "dog.webp";
        let dogX = 50;
        let dogY = canvas.height / 2 - 30;
        
        function drawText() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText(texts[0].substring(0, charIndex), 100, canvas.height / 2);
            if (dogImage.complete) {
                ctx.drawImage(dogImage, dogX, dogY, 80, 80);
            }
            charIndex++;
            dogX += 20;
            
            if (charIndex <= texts[0].length) {
                setTimeout(drawText, 200);
            }
        }
        
        dogImage.onload = () => {
            drawText();
        };

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
