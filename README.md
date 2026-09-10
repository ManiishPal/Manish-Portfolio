# 🌟 Manish's Developer Portfolio

A modern, interactive, and responsive developer portfolio website featuring a simulated **macOS Desktop UI**, **3D Model Viewer**, **AI/ML showcase**, and dynamic theme customization built with **React 19**, **TypeScript**, **Vite**, and **Material UI**.

![Portfolio Banner](https://github.com/ManiishPal/Manish-Portfolio/blob/main/src/assets/img-main/banner12.png)

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![MUI](https://img.shields.io/badge/Material--UI-v7-007FFF?logo=mui&logoColor=white)](https://mui.com/)
[![Firebase](https://img.shields.io/badge/Firebase-12.5-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Deployment Status](https://img.shields.io/badge/Hosted--on-GitHub%20Pages-222222?logo=github)](https://maniishpal.github.io)

---

## ✨ Features

- 🖥️ **macOS Interactive Experience**: Desktop Dock, notification center (`MacNotification`), floating modal windows (`MacDialog`), and interactive desktop components.
- 🧊 **3D Model Viewer**: Powered by `@google/model-viewer` for interactive 3D assets rendering directly in the browser.
- 🤖 **AI & ML Showcase**: Highlighted artificial intelligence and machine learning projects and experiments.
- 💻 **Web Engineering Showcase**: Comprehensive gallery of web applications with detailed descriptions, tech tags, and live links.
- 🎓 **Education & Certifications**: Dedicated sections displaying academic qualifications, work experience timeline, and certified achievements.
- 🌗 **Dynamic Light / Dark Themes**: Material UI theme switching with custom color schemes and smooth background transitions.
- 🔥 **Firebase Dynamic Announcements**: Live announcements and dynamic profile configuration fetched seamlessly via Firebase hooks.
- ❄️ **Seasonal Easter Eggs**: Dynamic UI decorations, such as holiday hats during winter months.
- 📱 **Responsive & Mobile Optimized**: Fully adapted layout for desktops, tablets, and mobile devices.

---

## 🛠️ Tech Stack & Libraries

### **Core Frontend**
- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)

### **UI & Styling**
- **Component Library**: [Material UI (MUI v7)](https://mui.com/) & `@mui/icons-material`
- **Styling**: [Emotion](https://emotion.sh/) (`@emotion/react`, `@emotion/styled`)
- **Animations**: [Framer Motion](https://framer.com/motion) & [Lottie Web](https://airbnb.io/lottie/)
- **3D Rendering**: [`@google/model-viewer`](https://modelviewer.dev/)
- **Drag & Drop**: `react-draggable`
- **Carousel & Calendars**: `swiper`, `@fullcalendar/react`

### **Backend & Infrastructure**
- **Database & Services**: [Firebase](https://firebase.google.com/)
- **Deployment**: [GitHub Pages](https://pages.github.com/) via `gh-pages`

---

## 📁 Project Structure

```text
manishPortfolio/
├── public/                 # Static assets and favicons
├── src/
│   ├── assets/             # Images, graphics, and 3D assets
│   ├── manish-3d/          # 3D interactive showcase views
│   ├── manish-aiml/        # AI / Machine Learning project showcases
│   ├── manish-commons/     # Shared components (Header, Footer, Hooks, Utils)
│   ├── manish-education/   # Academic background and qualifications
│   ├── manish-legal/       # Terms & Policy pages
│   ├── manish-macos/       # macOS simulation (MacDock, MacNotification, etc.)
│   ├── manish-main/        # Core homepage sections & data definitions
│   ├── manish-web/         # Web development project showcases
│   ├── manish-work/        # Experience timeline & certification showcases
│   ├── styles/             # Global styles and CSS modules
│   ├── App.tsx             # Main router and MUI theme provider
│   ├── Background.tsx      # Animated canvas / background presentation
│   ├── Home.tsx            # Main portfolio landing page
│   └── main.tsx            # Application entry point
├── eslint.config.js        # ESLint flat configuration
├── index.html              # HTML shell
├── package.json            # Scripts & dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite bundler configuration
```

---

## 🚀 Getting Started

### **Pre-requisites**

Ensure you have the following installed on your local system:
- **[Node.js](https://nodejs.org/)** (v18 or higher recommended)
- **npm** (comes bundled with Node.js) or **yarn** / **pnpm**
- **Git**

### **Installation**

1. **Clone the repository** (or your fork):
   ```bash
   git clone https://github.com/ManiishPal/Manish-Portfolio.git
   cd Manish-Portfolio
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with HMR. |
| `npm run build` | Compiles TypeScript and builds the production bundle in `dist/`. |
| `npm run preview` | Locally previews the production build. |
| `npm run lint` | Runs ESLint to check for code quality and style issues. |
| `npm run deploy` | Builds the project and deploys `dist/` to GitHub Pages. |
| `npm run patch` | Increments patch version (e.g., `1.0.0` -> `1.0.1`). |
| `npm run minor` | Increments minor version. |
| `npm run major` | Increments major version. |

---

## 🌐 Deployment

This portfolio is configured for easy deployment to **GitHub Pages**:

```bash
npm run deploy
```

This command will automatically trigger `predeploy` (which builds the app via `npm run build`) and upload the compiled assets in `dist/` to the `gh-pages` branch.

Live Demo: **[https://maniishpal.github.io](https://maniishpal.github.io)**

---

## 👨‍💻 Author & Connect

**Manish Pal**

- **Portfolio**: [https://maniishpal.github.io](https://maniishpal.github.io)
- **GitHub**: [@ManiishPal](https://github.com/ManiishPal)
- **LinkedIn**: [Manish Pal](https://linkedin.com)
- **LeetCode**: [Manish Pal](https://leetcode.com)

---

## 📄 License

This project is open-source under the project repository terms. Feel free to explore, learn, or customize it for your personal use!
