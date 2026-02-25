# Project File Structure Guide

## Overview
This is a **React-based portfolio website** built with modern web technologies. It showcases professional experience, projects, and accomplishments with smooth animations and an elegant dark theme.

---

## 📁 Files & Folders Explained

### **Root Level Files**

#### `index.html`
- **What it is:** The main HTML file that your browser loads first
- **What it does:** Sets up the basic page structure and loads React
- **Contains:** A single `<div id="root"></div>` where React renders the entire website

#### `package.json`
- **What it is:** Project configuration and dependency list
- **What it does:** Tracks all required libraries and defines scripts to run the project
- **Key scripts:**
  - `npm run dev` → Start development server
  - `npm run build` → Create production-ready files
  - `npm run lint` → Check code for errors

#### `tsconfig.json`
- **What it is:** TypeScript configuration file
- **What it does:** Tells TypeScript how to compile `.tsx` files to JavaScript
- **In simple terms:** Rules for how your code should be checked for errors

#### `vite.config.ts`
- **What it is:** Build tool configuration
- **What it does:** Configures how the project is built and served locally
- **Key feature:** Enables fast development with hot reloading

#### `.gitignore`
- **What it is:** Git configuration file
- **What it does:** Tells Git which files/folders to ignore (don't upload to GitHub)
- **Typically ignores:** `node_modules/`, `dist/`, `.env` files

#### `.env.example`
- **What it is:** Example environment variables file
- **What it does:** Shows what environment variables are needed (without exposing actual values)
- **Used for:** API keys and sensitive configuration

#### `metadata.json`
- **What it is:** Project metadata
- **What it does:** Stores project information (title, description, etc.)

#### `README.md`
- **What it is:** Project documentation
- **What it does:** Explains the project, how to set it up, and how to use it

---

### **📂 `public/` Folder**
- **Purpose:** Stores static files that are directly served to users
- **Contains:**
  - `file.svg` → Your profile photo (the image displayed in the hero section)
- **How it works:** Files here are accessible via `/filename` in your code (e.g., `/file.svg`)

---

### **📂 `src/` (Source Code Folder)**
Contains all the React code that powers your website.

#### `App.tsx`
- **What it is:** The main React component
- **What it does:** Defines the entire website structure and all pages
- **Contains:**
  - Hero section (with your profile photo)
  - About section
  - Projects showcase
  - Experience/Activities section
  - Certifications
  - Contact section
- **How it works:** Uses React state to show/hide different sections based on user navigation

#### `main.tsx`
- **What it is:** Entry point for the React app
- **What it does:** Loads the React app and renders it into `index.html`
- **In simple terms:** The file that says "Hey browser, start here!"

#### `index.css`
- **What it is:** Global styling file
- **What it does:** Contains CSS styles that apply across the entire website
- **Powers:** Font styling, colors, spacing, animations

---

## 🎯 Key Technologies Used

| Technology | Purpose |
|-----------|---------|
| **React** | Builds interactive user interface |
| **TypeScript** | Adds type safety to JavaScript |
| **Tailwind CSS** | Provides pre-built styling utility classes |
| **Vite** | Fast build tool and development server |
| **Framer Motion** (via `motion` library) | Creates smooth animations |
| **Lucide React** | Provides clean, simple icons |

---

## 🚀 How the Website Works

1. **User opens the website** → Browser loads `index.html`
2. **React starts** → `main.tsx` loads and runs `App.tsx`
3. **App.tsx renders** → All the page content, sections, and navigation buttons appear
4. **User clicks buttons** → Navigation state changes, different sections show/hide smoothly
5. **Images load** → Profile photo from `public/file.svg` displays in hero section
6. **Styles apply** → Tailwind CSS and `index.css` make everything look beautiful

---

## 📋 File Dependencies

```
index.html
    └─> main.tsx
        └─> App.tsx
            └─> index.css (styling)
            └─> public/file.svg (profile image)
```

---

## 🔧 Common Tasks

### Want to add a new section?
→ Edit `App.tsx` and add JSX code

### Want to change colors/styling?
→ Edit `index.css` or modify Tailwind classes in `App.tsx`

### Want to change your profile photo?
→ Replace the file in `public/` folder and update the `src=` path in `App.tsx`

### Want to add new packages/libraries?
→ Run `npm install package-name` (it gets added to `package.json` automatically)

---

## 📝 Summary

| File | Type | Purpose |
|------|------|---------|
| `index.html` | HTML | Entry point for browser |
| `package.json` | Config | Project dependencies & scripts |
| `tsconfig.json` | Config | TypeScript configuration |
| `vite.config.ts` | Config | Build tool configuration |
| `src/App.tsx` | React Component | Main website content & logic |
| `src/main.tsx` | React File | Initializes React app |
| `src/index.css` | CSS | Global styling |
| `public/file.svg` | Image | Your profile photo |

---

**Now you understand every file in your portfolio! 🎉**
