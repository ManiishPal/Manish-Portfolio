import img1 from "./../assets/img-web/imagify.png";
import img2 from "./../assets/img-web/bg-removal.png";
import img3 from "./../assets/img-web/ecommerceForever.png";
import img4 from "./../assets/img-web/bookYourWay.png";
import img5 from "./../assets/img-web/chat-app.png";
import img6 from "./../assets/img-web/blog-app.png";

export const images = [img1, img2, img3, img4, img5, img6];

export type WebDataType = {
  appName: string;
  image: string;
  description: string;
  logo?: string;
  type?: WebFilterType;
  isWideOnly?: boolean;
  smallChipLabel: string[];
  smallChipLinks: string[];
};

export type WebFilterType = "General" | "AI" | "E-Commerce" | "Full Stack";

export const WebTypeFilters: WebFilterType[] = [
  "General",
  "AI",
  "E-Commerce",
  "Full Stack",
];

export const webData: WebDataType[] = [
  {
    appName: "Imagify",
    image: images[0],
    type: "AI",
    description:
      "AI-powered image generation platform that transforms text prompts into creative images using generative AI APIs.",
    smallChipLabel: ["View Project", "View Source Code"],
    smallChipLinks: [
      "https://imagify-frontend-gamma.vercel.app/",
      "https://github.com/ManiishPal/imagify",
    ],
  },

  {
    appName: "BG Removal",
    image: images[1],
    type: "AI",
    description:
      "AI-powered background removal tool that automatically removes image backgrounds and provides easy editing and sharing options.",
    smallChipLabel: ["View Project", "View Source Code"],
    smallChipLinks: [
      "https://bg-removal-frontend-lemon.vercel.app/",
      "https://github.com/ManiishPal/bg-removal",
    ],
  },

  {
    appName: "Forever E-Commerce",
    image: images[2],
    type: "E-Commerce",
    description:
      "Modern fashion e-commerce platform featuring product collections, user accounts, search, and shopping cart functionality.",
    smallChipLabel: ["View Project", "View Source Code"],
    smallChipLinks: [
      "https://e-commerce-website-beta-ten-43.vercel.app/",
      "https://github.com/ManiishPal/E-Commerce-Website",
    ],
  },

  {
    appName: "Car Rental",
    image: images[3],
    type: "Full Stack",
    description:
      "Full-stack car rental platform with vehicle search, pickup and return dates, bookings, authentication, and dashboard management.",
    smallChipLabel: ["View Project", "View Source Code"],
    smallChipLinks: [
      "https://book-your-way-client.vercel.app/",
      "https://github.com/ManiishPal/bookYourWay",
    ],
  },

  {
    appName: "QuickChat",
    image: images[4],
    type: "Full Stack",
    description:
      "Real-time chat application with user search, online/offline status, and a clean responsive messaging interface.",
    smallChipLabel: ["View Project", "View Source Code"],
    smallChipLinks: [
      "https://quickchat-frontend-one.vercel.app/",
      "https://github.com/ManiishPal/quickchat",
    ],
  },

  {
    appName: "Blog App",
    image: images[5],
    type: "Full Stack",
    description:
      "Full-stack blogging platform for creating, managing, and exploring technology, startup, and lifestyle articles.",
    smallChipLabel: ["View Project", "View Source Code"],
    smallChipLinks: [
      "https://blog-app-drab-chi.vercel.app/",
      "https://github.com/ManiishPal/blog-app",
    ],
  },
];
