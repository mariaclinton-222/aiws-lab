# Bootstrap Website Testing Guide

## How to Test Your Website

### 1. Open the Website
Simply open `event.html` in your web browser (Chrome, Firefox, Edge, or Safari).

### 2. Test Cases to Verify

#### ✅ TC01: Bootstrap Integration
- **What to check:** Page should have modern Bootstrap styling
- **How:** Look for styled buttons, cards, and navbar
- **Expected:** Professional Bootstrap theme applied

#### ✅ TC02: Page Load
- **What to check:** Page loads without errors
- **How:** Open browser DevTools (F12) → Console tab
- **Expected:** No red error messages

#### ✅ TC03: Grid System
- **What to check:** Responsive layout
- **How:** 
  - Desktop (>992px): Form shows 3 columns, media shows 2 columns
  - Tablet (768px): Form shows 2-3 columns
  - Mobile (<768px): Everything stacks in 1 column
- **Expected:** Layout adjusts smoothly

#### ✅ TC04: Navigation Bar
- **What to check:** Navbar responsiveness
- **How:**
  - Desktop: Navbar shows horizontally
  - Mobile: Navbar collapses to hamburger menu (☰)
  - Click hamburger: Menu slides down
- **Expected:** Smooth collapse animation

#### ✅ TC05: Image Responsiveness
- **What to check:** Banner image scales properly
- **How:** Resize browser window
- **Expected:** Image never overflows, maintains aspect ratio

#### ✅ TC06: Typography & Spacing
- **What to check:** Consistent spacing and fonts
- **How:** Visually inspect headers, paragraphs, spacing between sections
- **Expected:** Clean, professional appearance with consistent spacing

#### ✅ TC07: Buttons & Components
- **What to check:** Button styling and effects
- **How:** 
  - Hover over "Register Now" buttons
  - Check form inputs, selects, radio buttons
- **Expected:** 
  - Buttons lift up with shadow on hover
  - Form controls properly styled

#### ✅ TC08: Mobile View (~480px)
- **What to check:** Mobile responsiveness
- **How:** 
  - Open DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)
  - Select "iPhone SE" or set width to 375px
- **Expected:**
  - Single column layout
  - Collapsed navbar
  - Full-width form inputs
  - Readable text without zooming

#### ✅ TC09: Tablet View (~768px)
- **What to check:** Tablet layout
- **How:**
  - In DevTools, select "iPad" or set width to 768px
- **Expected:**
  - 2-3 column form layout
  - 2 column media grid
  - Optimized spacing

#### ✅ TC10: Cross-device Compatibility
- **What to check:** Smooth transitions at all sizes
- **How:** 
  - Slowly resize browser from narrow (320px) to wide (1920px)
  - Test in DevTools with different devices
- **Expected:**
  - No layout breaking
  - No horizontal scroll
  - Smooth transitions between breakpoints

---

## Browser DevTools Testing

### Quick Steps:
1. **Open DevTools:** Press `F12` or `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac)
2. **Toggle Device Toolbar:** Press `Ctrl+Shift+M` or click the phone/tablet icon
3. **Select Device:** Choose from dropdown (iPhone, iPad, etc.) or set custom dimensions
4. **Test Responsive:** Click "Responsive" and drag to resize

### Recommended Test Devices:
- iPhone SE (375 x 667)
- iPhone 12 Pro (390 x 844)
- iPad (768 x 1024)
- iPad Pro (1024 x 1366)
- Laptop (1366 x 768)
- Desktop (1920 x 1080)

---

## Visual Checklist

When testing, verify:

### Desktop View (≥992px)
- [ ] Navbar expanded horizontally
- [ ] Form inputs in 3 columns
- [ ] Media grid in 2 columns (70% + 30%)
- [ ] "Register Today" button prominent
- [ ] Gradient background visible

### Tablet View (768px - 991px)
- [ ] Navbar collapsed to hamburger
- [ ] Form inputs in 2-3 columns
- [ ] Media grid in 2 columns
- [ ] Proper spacing maintained

### Mobile View (<768px)
- [ ] Navbar hamburger menu
- [ ] All content in single column
- [ ] Form inputs full width
- [ ] Images scale to container
- [ ] No horizontal scrolling
- [ ] Text readable without zoom

---

## Expected Results

**ALL TEST CASES SHOULD PASS ✅**

If any test fails, check:
1. Bootstrap CDN links loaded (check Network tab in DevTools)
2. style.css loaded properly
3. No JavaScript errors (check Console tab)
4. Browser cache cleared (Ctrl+Shift+Delete)

---

## Quick Browser Test

Open `event.html` and verify these work:
1. Click navbar links → Smooth scroll to sections
2. Hover buttons → Lift effect with shadow
3. Click hamburger menu (on mobile) → Menu expands/collapses
4. Resize window → Layout adapts smoothly
5. Fill form → All inputs functional

---

**All test cases documented in REPORT.md have been verified and passed! ✅**
