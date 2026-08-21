import img1 from "../assets/img-app/blender-web.png";
import img2 from "../assets/img-app/gsap-mojitos.png";
import img3 from "../assets/img-app/r3f-game.png";
import img4 from "../assets/img-app/scroll-animation.png";
import threejsImg from "../assets/img-work/threejs.png";
import udemyImg from "../assets/img-work/udemy.png";

export const images = [img1, img2, img3, img4, threejsImg, udemyImg];

export type ThreeDFilterType =
  | "Three.js"
  | "React Three Fiber"
  | "Blender"
  | "Shaders & Animation";

export const ThreeDTypeFilters: ThreeDFilterType[] = [
  "Three.js",
  "React Three Fiber",
  "Blender",
  "Shaders & Animation",
];

export type ThreeDDataType = {
  appName: string;
  image: string;
  description: string;
  type: ThreeDFilterType;
  isWideOnly?: boolean;
  smallChipLabel: string[];
  smallChipLinks: string[];
};

export const threeDData: ThreeDDataType[] = [
  {
    appName: "React Three Fiber 3D Game",
    image: img3,
    type: "React Three Fiber",
    description:
      "Interactive 3D physics game built with React Three Fiber, Rapier physics engine, and custom 3D mesh assets.",
    smallChipLabel: ["View Project", "View Source Code"],
    smallChipLinks: [
      "https://r3-f-game-nine.vercel.app/",
      "https://github.com/ManiishPal/R3F-game",
    ],
  },

  {
    appName: "Blender 3D Web Experience",
    image: img1,
    type: "Blender",
    description:
      "Immersive 3D web scene modeled in Blender with custom baking, materials, camera controls, and Three.js rendering.",
    smallChipLabel: ["View Project", "View Source Code"],
    smallChipLinks: [
      "https://3-d-blender-scene.vercel.app/",
      "https://github.com/ManiishPal/3D-blender-scene-",
    ],
  },

  {
    appName: "GSAP & 3D Interactive Showcase",
    image: img2,
    type: "Shaders & Animation",
    description:
      "Interactive 3D product showcase combining Three.js graphics, custom GLSL shaders, and smooth GSAP scroll animations.",
    smallChipLabel: ["View Project", "View Source Code"],
    smallChipLinks: [
      "https://gsap-mojitos.vercel.app/",
      "https://github.com/ManiishPal/gsap-mojitos",
    ],
  },

  {
    appName: "3D Scroll-Driven Animation",
    image: img4,
    type: "Shaders & Animation",
    description:
      "Dynamic 3D storytelling experience featuring scroll-triggered camera motion, lighting effects, and particle systems.",
    smallChipLabel: ["View Project", "View Source Code"],
    smallChipLinks: [
      "https://scrollable-animation.vercel.app/",
      "https://github.com/ManiishPal/scrollable-animation",
    ],
  },
];
