import banner1 from "../assets/img-main/banner1.png";
import banner2 from "../assets/img-main/banner2.png";
import banner3 from "../assets/img-main/banner3.png";
import banner4 from "../assets/img-main/banner4.png";
import banner5 from "../assets/img-main/banner5.png";
import banner6 from "../assets/img-main/banner6.png";
import banner5phone from "../assets/img-main/banner5phone.png";
import banner7 from "../assets/img-main/banner7.png";
import banner10 from "../assets/img-main/banner10.png";
import banner12 from "../assets/img-main/banner12.png";
import macSetupLogo from "../assets/img-macos/macSetup.png";
import { createContext } from "react";

export const images = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner5phone,
  banner7,
  banner10,
  banner12,
  macSetupLogo,
];

export type genericAppData = {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  linkText: string;
  link?: string;
};

export const codingData: genericAppData[] = [
  {
    title: "Web Development",
    description:
      "Explore my full-stack web projects built with modern technologies, featuring responsive interfaces, APIs, authentication, and real-world functionality.",
    image: banner1,
    linkText: "Explore",
    link: "web",
  },
  {
    title: "3D Development",
    description:
      "Discover my interactive 3D experiences built with Three.js, React Three Fiber, GSAP, and Blender, combining animation, graphics, and immersive web experiences.",
    image: banner2,
    linkText: "Explore",
    link: "3d",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Explore my AI and machine learning projects focused on intelligent applications, computer vision, generative AI, and practical problem-solving.",
    image: banner3,
    linkText: "Learn More",
    link: "ai-ml",
  },
];

export const workData = [
  {
    title: "AI, Data Science & Cloud",
    description:
      "Certifications in AI, data science, generative AI, machine learning, and cloud technologies.",
    image: banner4,
    linkText: "View Certifications",
    link: "certifications/ai-data-science-cloud",
  },
  {
    title: "Software Engineering & Web Development",
    description:
      "Certifications and job simulations focused on software engineering, web development, and programming.",
    image: banner5,
    linkText: "View Certifications",
    link: "certifications/software-engineering",
  },
  {
    title: "Specialized Skills & Technologies",
    description:
      "Certifications covering algorithms, 3D development, cybersecurity, robotics, and other technical skills.",
    image: banner6,
    linkText: "View Certifications",
    link: "certifications/specialized-skills",
  },
];

export const workDataPhone = [
  {
    title: "AI, Data Science & Cloud",
    description:
      "AI, data science, generative AI, machine learning, and cloud technologies.",
    image: banner4,
    linkText: "View Certifications",
    link: "certifications/ai-data-science-cloud",
  },
  {
    title: "Software Engineering & Web Development",
    description:
      "Software engineering, web development, programming, and practical job simulations.",
    image: banner5phone,
    linkText: "View Certifications",
    link: "certifications/software-engineering",
  },
  {
    title: "Specialized Skills & Technologies",
    description:
      "Algorithms, 3D development, cybersecurity, robotics, and other technical skills.",
    image: banner6,
    linkText: "View Certifications",
    link: "certifications/specialized-skills",
  },
];

export const educationData = [
  {
    title: "B.Tech in Computer Science",
    subtitle: "2023 – 2027 · Pursuing",
    description:
      "Building a foundation in full-stack development, AI/ML, data science, and problem solving at Medicaps University.",
    image: banner7,
    linkText: "Learn More",
    link: "education",
  },
];

export const otherData = [
  {
    title: "Personal Website",
    description: "This website. Built with React, Material UI, and Firebase.",
    image: banner12,
    linkText: "Reset",
  },
];

export const MacDialogContext = createContext<{
  openMacDialog: boolean;
  setOpenMacDialog: (open: boolean) => void;
}>({
  openMacDialog: false,
  setOpenMacDialog: () => {},
});
