# EX-2-AIWEB: Bootstrap Responsive Event Registration Portal

[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-purple)](https://getbootstrap.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-green)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

## 📋 Overview

A fully responsive, Bootstrap 5-based event registration website featuring:
- **Responsive Navigation** with hamburger menu
- **Bootstrap Grid System** for adaptive layouts
- **Form Components** with validation-ready inputs
- **Media Integration** with video and audio players
- **Mobile-First Design** optimized for all devices
- **Custom CSS Enhancements** for modern aesthetics

---

## 🎯 Features

### ✅ Bootstrap 5.3.2 Integration
- CDN-based Bootstrap CSS and JavaScript
- Bootstrap Icons for visual elements
- Responsive utilities and components

### ✅ Responsive Grid System
- **Mobile** (< 768px): Single column layout
- **Tablet** (768px - 991px): 2-3 column layout
- **Desktop** (≥ 992px): Multi-column layout

### ✅ Components Used
- 🧭 **Navbar** - Collapsible responsive navigation
- 🃏 **Cards** - Content containers with shadows
- 🔘 **Buttons** - Primary, warning, and large variants
- 📝 **Forms** - Complete form controls and validation
- 🎨 **Typography** - Display headings and utility classes

### ✅ Custom Enhancements
- Gradient backgrounds
- Smooth hover transitions
- Card lift effects
- Varied text alignments (left, center, right, justified)
- Print-friendly styles
- Accessibility features

---

## 📸 Screenshots

### Desktop View
![Desktop View - Full Layout](Pasted%20image.png)

### Form Section
![Registration Form and Footer](Pasted%20image%20(2).png)

---

## 📁 File Structure

```
EX-2-AIWEB-main/
├── event.html                                    # Main HTML file with Bootstrap
├── style.css                                     # Custom CSS enhancements
├── README.md                                     # This documentation
├── REPORT.md                                     # Test cases report (100% pass)
├── TESTING_GUIDE.md                             # Testing instructions
├── download.jpeg                                 # Event banner image
├── Blue Futuristic Artificial Intelligence Video.mp4  # Promo video
├── SoundHelix-Song-1.mp3                        # Event intro audio
├── Pasted image.png                              # Screenshot 1
└── Pasted image (2).png                          # Screenshot 2
```

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs locally!

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/shahiilr/EX-3-AIWD.git
cd EX-3-AIWD
```

2. **Open in browser**
```bash
# Simply double-click event.html
# OR use a local server
python -m http.server 8000
# Then open http://localhost:8000/event.html
```

---

## 🧪 Testing

All **10 test cases passed** with 100% success rate! ✅

| Test Case | Feature | Status |
|:---|:---|:---:|
| TC01 | Bootstrap CDN Integration | ✅ PASS |
| TC02 | Page Load | ✅ PASS |
| TC03 | Grid System | ✅ PASS |
| TC04 | Responsive Navbar | ✅ PASS |
| TC05 | Image Responsiveness | ✅ PASS |
| TC06 | Typography & Spacing | ✅ PASS |
| TC07 | Buttons & Components | ✅ PASS |
| TC08 | Mobile View (~480px) | ✅ PASS |
| TC09 | Tablet View (~768px) | ✅ PASS |
| TC10 | Cross-device Compatibility | ✅ PASS |

**See [REPORT.md](REPORT.md) for detailed test results.**  
**See [TESTING_GUIDE.md](TESTING_GUIDE.md) for testing instructions.**

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
- xs: < 576px   → Extra small devices (phones)
- sm: ≥ 576px   → Small devices (landscape phones)
- md: ≥ 768px   → Medium devices (tablets)
- lg: ≥ 992px   → Large devices (desktops)
- xl: ≥ 1200px  → Extra large devices (wide desktops)
```

### Layout Behavior

| Screen Size | Navbar | Form Columns | Media Grid | Button |
|:---|:---|:---|:---|:---|
| Mobile (< 768px) | Collapsed | 1 column | Stacked | Full width |
| Tablet (768px - 991px) | Collapsed | 2-3 columns | Side-by-side | Auto width |
| Desktop (≥ 992px) | Expanded | 3 columns | Side-by-side | Auto width |

---

## 🎨 Alignment Features

The page uses **varied alignment** for visual interest:

- **Left-aligned**: Section headings, form labels
- **Center-aligned**: Main titles, copyright
- **Right-aligned**: Button containers, accents
- **Justified**: Form descriptions
- **Flex-distributed**: Footer, form actions

---

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|:---|:---|:---|
| HTML5 | - | Structure and semantics |
| CSS3 | - | Styling and animations |
| Bootstrap | 5.3.2 | Responsive framework |
| Bootstrap Icons | 1.11.3 | Icon library |
| JavaScript | ES6+ | Bootstrap interactions |

---

## ✨ Key Highlights

✅ **100% Responsive** - Works on all devices  
✅ **Mobile-First** - Optimized for mobile experience  
✅ **Bootstrap-Powered** - Industry-standard framework  
✅ **Accessible** - ARIA labels and semantic HTML  
✅ **Modern Design** - Gradient backgrounds and smooth transitions  
✅ **No Build Tools** - Pure HTML/CSS/JS  
✅ **CDN-Based** - Fast loading from Bootstrap CDN  
✅ **Print-Friendly** - Optimized print styles  

---

## 📖 Documentation

- **[REPORT.md](REPORT.md)** - Complete test case documentation with evidence
- **[TESTING_GUIDE.md](TESTING_GUIDE.md)** - Step-by-step testing instructions
- **[style.css](style.css)** - Well-commented custom CSS
- **[event.html](event.html)** - Semantic HTML with Bootstrap classes

---

## 🎓 Learning Objectives

This project demonstrates:
- ✅ Bootstrap grid system implementation
- ✅ Responsive design principles
- ✅ Component-based architecture
- ✅ Form design and validation readiness
- ✅ Media integration (video/audio)
- ✅ Accessibility best practices
- ✅ Mobile-first development
- ✅ Cross-browser compatibility

---

## 🌐 Browser Compatibility

| Browser | Version | Status |
|:---|:---|:---:|
| Chrome | Latest | ✅ Tested |
| Firefox | Latest | ✅ Tested |
| Safari | Latest | ✅ Tested |
| Edge | Latest | ✅ Tested |
| Opera | Latest | ✅ Compatible |

---

## 📝 License

This is an educational project for learning web development with Bootstrap.

---

## 👤 Author

**Shahiil**
- GitHub: [@shahiilr](https://github.com/shahiilr)
- Project: [EX-3-AIWD](https://github.com/shahiilr/EX-3-AIWD)

---

## 🙏 Acknowledgments

- [Bootstrap Team](https://getbootstrap.com/) - For the amazing framework
- [Bootstrap Icons](https://icons.getbootstrap.com/) - For the icon library
- Web Development Community - For inspiration and best practices

---

## 📅 Project Info

- **Course**: AI Web Development
- **Experiment**: EX-2-AIWEB
- **Date**: January 2026
- **Status**: ✅ Complete (100% Test Pass Rate)

---

<div align="center">

**⭐ Star this repository if you found it helpful! ⭐**

Made with ❤️ using Bootstrap 5

</div>

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
