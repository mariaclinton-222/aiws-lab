# Experiment 2: Enhanced Event Registration Portal with CSS3

## Overview
This experiment enhances the HTML Event Registration Portal (from Experiment 1) using **CSS3 techniques** including Flexbox, Transitions, and Media Queries to create a responsive, interactive, and visually appealing user interface.

## Files Structure
```
ex2/
├── event.html    # HTML file (linked to external CSS)
├── style.css     # External CSS stylesheet
├── README.md     # This documentation file
└── REPORT.md     # Test cases and observations report
```

## Features Implemented

### 1. External CSS Linking
- Separate `style.css` file for maintainability
- Linked using `<link rel="stylesheet" href="style.css">`

### 2. CSS Variables (Custom Properties)
- Centralized color palette
- Consistent spacing system
- Reusable transitions and shadows

### 3. Page Layout Styling
- Modern gradient backgrounds
- Glassmorphism effects on media section
- Box shadows for depth

### 4. Typography & Colors
- Clean, modern font stack
- Consistent color scheme
- Text shadows for headers

### 5. Spacing & Alignment
# Experiment 2: Enhanced Event Registration Portal

## Overview
This repository contains a polished, professional UI for an Event Registration Portal. The HTML from Experiment 1 was enhanced using modern CSS techniques to improve layout, typography, accessibility, responsiveness, and visual polish.

---

## Preview
Images below are included from the `ex2/` folder and should display when viewing this `README.md` on GitHub or locally.

![Screenshot 1](Pasted%20image.png)

![Screenshot 2](Pasted%20image%20(2).png)

---

## Files (ex2/)
```
event.html    # HTML file linked to external CSS
style.css     # External CSS stylesheet (professional theme)
README.md     # This file (updated with screenshots)
REPORT.md     # Test cases and observations report
Pasted image.png
Pasted image (2).png
Blue Futuristic Artificial Intelligence Video.mp4
SoundHelix-Song-1.mp3
download.jpeg
```

## Key Improvements
- Professional color palette and typography
- Responsive grid-based layout with sensible spacing
- Accessible focus states and reduced-motion support
- Smooth load and hover animations for better UX
- Local media support (video & audio)

## How to Run
1. Serve the `ex2/` folder or open `ex2/event.html` directly in your browser.
	- Quick local server:
	```bash
	cd ex2
	python3 -m http.server 8080
	# then open http://localhost:8080/event.html
	```
2. Test across device sizes via browser DevTools.

## GitHub Upload
To push this folder to GitHub (replace remote URL with your repo):
```bash
cd ex2
echo "# EX-2-AIWEB" >> README.md
git init
git add .
git commit -m "chore: add enhanced UI, media, and docs"
git branch -M main
git remote add origin https://github.com/shahiilr/EX-2-AIWEB.git
git push -u origin main
```

If the push fails due to authentication, configure your Git credentials or use a personal access token.

---

## Notes
- Images are referenced with spaces encoded; GitHub will render them correctly when `README.md` is at repo root or inside `ex2/` (relative paths assumed).
- If you want the `README.md` to be the repo root README, move this file to the repository root and adjust image paths to `ex2/Pasted image.png` and `ex2/Pasted image (2).png`.

---

Status: Ready to push — run the commands above to upload to GitHub.
