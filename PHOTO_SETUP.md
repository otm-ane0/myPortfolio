# Professional Photo Setup

## Adding Your Professional Photo

To display your professional photo in the About section:

1. **Prepare your photo:**
   - Use a high-quality professional headshot
   - Recommended size: 400x400 pixels or larger (square aspect ratio works best)
   - Supported formats: JPG, PNG, WebP
   - Ensure good lighting and professional appearance

2. **Add the photo:**
   - Name your photo file: `profile-photo.jpg` (or .png)
   - Place it in the `public/` folder of your portfolio
   - The path should be: `public/profile-photo.jpg`

3. **Alternative formats:**
   If you use a different format or name, update the image source in:
   `src/components/About.js` - line with `src="/profile-photo.jpg"`

## Current Fallback

Until you add your professional photo, the About section will show:
- A stylized placeholder icon
- "Professional Photo" text
- Same styling and layout as the final photo

## Photo Guidelines

**Professional Photo Tips:**
- Clean, simple background
- Professional attire
- Good lighting (natural light preferred)
- Clear focus on face
- Smile and approachable expression
- Square crop works best for the circular container

**Technical Requirements:**
- Minimum 300x300 pixels
- Maximum 2MB file size
- JPG or PNG format recommended