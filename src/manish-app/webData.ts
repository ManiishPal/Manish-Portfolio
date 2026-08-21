import img1 from "./../assets/img-app/blender-web.png";
import img2 from "./../assets/img-app/gsap-mojitos.png";
import img3 from "./../assets/img-app/r3f-game.png";
import img4 from "./../assets/img-app/scroll-animation.png";

export const images = [img1, img2, img3, img4];

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

export type WebFilterType = "General" | "3D" | "Animation" | "Games";

export const WebTypeFilters: WebFilterType[] = [
  "General",
  "3D",
  "Animation",
  "Games",
];

export const webData: WebDataType[] = [
  {
    appName: "3D Interactive Scene",
    image: images[0],
    type: "3D",
    description:
      "Interactive 3D web experience showcasing a stylized environment with lighting, models, animations, and real-time controls.",
    smallChipLabel: ["View Project", "View Source Code"],
    smallChipLinks: [
      "https://3-d-blender-scene.vercel.app/",
      "https://github.com/ManiishPal/3D-blender-scene-",
    ],
  },

  {
    appName: "Mojito Website",
    image: images[1],
    type: "Animation",
    description:
      "Immersive cocktail website built with GSAP animations, smooth transitions, interactive visuals, and a bold editorial design.",
    smallChipLabel: ["View Project", "View Source Code"],
    smallChipLinks: [
      "https://gsap-mojitos.vercel.app/",
      "https://github.com/ManiishPal/gsap-mojitos",
    ],
  },

  {
    appName: "Marble Race Game",
    image: images[2],
    type: "Games",
    description:
      "Interactive 3D marble racing game with physics-based movement, obstacles, scoring, and an engaging gameplay experience.",
    smallChipLabel: ["View Project", "View Source Code"],
    smallChipLinks: [
      "https://r3-f-game-nine.vercel.app/",
      "https://github.com/ManiishPal/R3F-game",
    ],
  },

  {
    appName: "Scroll Animation Portfolio",
    image: images[3],
    type: "Animation",
    description:
      "Interactive developer portfolio featuring smooth scroll animations, dynamic visuals, and a modern creative UI/UX experience.",
    smallChipLabel: ["View Project", "View Source Code"],
    smallChipLinks: [
      "https://scrollable-animation.vercel.app/",
      "https://github.com/ManiishPal/scrollable-animation",
    ],
  },
];

export const appData = webData;
