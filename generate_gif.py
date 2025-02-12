from PIL import Image, ImageDraw, ImageFont
import imageio

# Define GIF parameters
width, height = 500, 300
frames = []
num_frames = 30
font_path = "arial.ttf"  # Update this if needed
text = "Happy Valentine's Day Tanmay"

# Create frames for tracing effect
for i in range(len(text) + 1):
    img = Image.new("RGB", (width, height), "black")
    draw = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype(font_path, 50)
    except:
        font = ImageFont.load_default()

    text_width, text_height = draw.textsize(text[:i], font=font)
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    draw.text((x, y), text[:i], font=font, fill=(255, 50, 50))
    frames.append(img)

# Save as GIF
frames[0].save("happy_valentines_tracing.gif", save_all=True, append_images=frames[1:], duration=100, loop=0)
print("GIF saved as happy_valentines_tracing.gif")