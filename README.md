
# 🥤 Fizzi - 3D Soda Can Experience with Prismic + Next.js

Welcome to **Fizzi**, an interactive, animated soda can experience built with [Next.js](https://nextjs.org/), [Three.js (via React Three Fiber)](https://docs.pmnd.rs/react-three-fiber), and [Prismic](https://prismic.io/). This project leverages the Prismic + Next.js Minimal Starter and adds beautiful custom 3D components, animations, and rich CMS integration.

## 🚀 Live Demo
[🔗 Click here to view the live site](https://fizzi-soda-for-gusty-people.vercel.app/)  

---

## 🚀 Quick Start

1. **Create a Prismic Repo:**
   - Go to [Prismic Dashboard](https://prismic.io/dashboard)
   - Click **Create New Repository**
   - Choose **Next.js + Minimal Starter**
   - Complete setup steps

2. **Clone this Project:**

   ```bash
   git clone https://github.com/Itssanthoshhere/Fizzi.git
   cd fizzi
    ````

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Start Development Server:**

   ```bash
   npm run dev
   ```

---

## 🔧 Project Structure & Custom Components

| File/Component     | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| `Bounded.tsx`      | Responsive layout wrapper with consistent padding                  |
| `Button.tsx`       | Prismic-connected styled button                                    |
| `FizziLogo.tsx`    | Custom animated SVG logo with masking                              |
| `CircleText.tsx`   | Animated spinning circular text SVG                                |
| `TextSplitter.tsx` | Splits and animates text character by character                    |
| `SodaCan.tsx`      | 3D soda can rendered with Three.js (supports flavor textures)      |
| `FloatingCan.tsx`  | Floating soda can with Drei’s `<Float>` wrapper                    |
| `Header.tsx`       | Top navigation logo area                                           |
| `Footer.tsx`       | Footer with spinning circle and logo                               |
| `ViewCanvas.tsx`   | Three.js Canvas with `@react-three/fiber` for rendering 3D content |

---

## ✨ Features

* ✅ 3D soda can (multiple flavors)
* ✅ Floating animations
* ✅ Prismic-powered content
* ✅ Slice-based editable pages
* ✅ Fully responsive design
* ✅ Custom SVG animations

---

## 📝 Customization

### Create Pages with Slices

1. Go to your [Prismic Dashboard](https://prismic.io/dashboard)
2. Click the ✏️ icon to create a **Page**
3. Add Slices like rich text or image sections
4. Publish to see live updates at `/your-page-slug`

### Preview Content

This project supports Prismic’s **Preview Mode** on `localhost`. For production previews, see:
🔗 [Preview Drafts in Next.js](https://prismic.io/docs/technologies/preview-content-nextjs)

---

## 📂 Important Files

| File                 | Purpose                                    |
| -------------------- | ------------------------------------------ |
| `prismicio.ts`       | Prismic client setup                       |
| `app/page.tsx`       | Renders the homepage content (`UID: home`) |
| `app/[uid]/page.tsx` | Renders dynamic Prismic pages by UID       |
| `app/layout.tsx`     | App-wide layout and providers              |
| `slices/*/index.tsx` | Slice renderers for editable sections      |

---

## 📦 Built With

* [Next.js](https://nextjs.org/)
* [Prismic CMS](https://prismic.io/)
* [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
* [Drei](https://github.com/pmndrs/drei)
* [Slice Machine](https://prismic.io/slice-machine)

---

## 🌐 Deployment

Follow this guide to deploy on Vercel or any platform:
📘 [Deploy Next.js App](https://prismic.io/docs/technologies/deploy-nextjs)

---

## 🧠 Learn More

* [Prismic + Next.js Guide](https://prismic.io/docs/technologies/nextjs)
* [Slice Machine Docs](https://prismic.io/docs/technologies/model-content-nextjs)
* [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)

---

## 📬 Connect With Me

Feel free to connect if you liked the project or have any suggestions!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/thesanthoshvs)

---

## 📄 License

This project is for **educational purposes only** and is **not affiliated with or endorsed by** [Prismic](https://www.linkedin.com/company/prismic-io/), Next.js, or any other third-party tools mentioned.

 #### 🎥 Inspired by the tutorial:
- **How I built a 3D soda can website using Three.js & Prismic** by Prismic
  
  📺 [Watch on YouTube](https://youtu.be/RKQqrNyAC6k?si=bT-Wfq4iwJbj6ExW)

All trademarks and assets belong to their respective owners.

---

> Created with ❤️ using Prismic, Next.js & Three.js – customized by Santhosh VS

---