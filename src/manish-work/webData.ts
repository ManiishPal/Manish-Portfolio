import apnaDeltaImg from "./../assets/img-work/apna-delta.png";
import apnaDsaImg from "./../assets/img-work/apna-dsa.png";
import boardImg from "./../assets/img-work/board.png";
import deloitteCyberImg from "./../assets/img-work/deloitte-cyber.png";
import googleCloudImg from "./../assets/img-work/google-cloud.png";
import hpeImg from "./../assets/img-work/hpe.png";
import ibmImg from "./../assets/img-work/ibm.png";
import ibmGenaiImg from "./../assets/img-work/ibm-genai.png";
import johnsonImg from "./../assets/img-work/johnsons.png";
import jpmorganImg from "./../assets/img-work/jpmorgran.png";
import mediImg from "./../assets/img-work/medi.jpg";
import nptelImg from "./../assets/img-work/nptel.png";
import siemensImg from "./../assets/img-work/siemens.png";
import skyscannerImg from "./../assets/img-work/skyscanner.png";
import tataImg from "./../assets/img-work/TATA.png";
import threejsImg from "./../assets/img-work/threejs.png";
import udemyImg from "./../assets/img-work/udemy.png";
import walmartImg from "./../assets/img-work/walmart.png";

import apnaDeltaPdf from "./../assets/img-work/apna-delta.pdf";
import apnaDsaPdf from "./../assets/img-work/apna-dsa.pdf";
import boardPdf from "./../assets/img-work/board.pdf";
import deloitteCyberPdf from "./../assets/img-work/deloitte-cyber.pdf";
import googleCloudPdf from "./../assets/img-work/google-cloud.pdf";
import hpePdf from "./../assets/img-work/hpe.pdf";
import ibmPdf from "./../assets/img-work/ibm.pdf";
import ibmGenaiPdf from "./../assets/img-work/ibm-genai.pdf";
import johnsonPdf from "./../assets/img-work/johnson.pdf";
import jpmorganPdf from "./../assets/img-work/jpmorgan.pdf";
import mediPdf from "./../assets/img-work/medi.pdf";
import nptelPdf from "./../assets/img-work/nptel.pdf";
import siemensPdf from "./../assets/img-work/siemens.pdf";
import skyscannerPdf from "./../assets/img-work/skyscanner.pdf";
import tataPdf from "./../assets/img-work/TATA.pdf";
import threejsPdf from "./../assets/img-work/threejs.pdf";
import udemyPdf from "./../assets/img-work/udemy.pdf";
import walmartPdf from "./../assets/img-work/walmart.pdf";

export const images = [
  ibmImg,
  googleCloudImg,
  nptelImg,
  ibmGenaiImg,
  mediImg,
  tataImg,
  apnaDeltaImg,
  skyscannerImg,
  apnaDsaImg,
  walmartImg,
  jpmorganImg,
  hpeImg,
  threejsImg,
  boardImg,
  deloitteCyberImg,
  johnsonImg,
  siemensImg,
  udemyImg,
];

export type CategoryKey =
  | "ai-data-science-cloud"
  | "software-engineering"
  | "specialized-skills";

export type MainCategoryTitle =
  | "AI, Data Science & Cloud"
  | "Software Engineering & Web Development"
  | "Specialized Skills & Technologies";

export type SubFilterType =
  // AI, Data Science & Cloud
  | "Data Science"
  | "Generative AI"
  | "AI & Machine Learning"
  | "Cloud Computing"
  // Software Engineering & Web Development
  | "Full Stack Development"
  | "Frontend Development"
  | "DSA & Programming"
  | "Software Engineering"
  // Specialized Skills & Technologies
  | "3D & Creative Development"
  | "Algorithms & Data Structures"
  | "Cybersecurity"
  | "Robotics & Controls"
  | "Project Management";

export const categoryFiltersMap: Record<CategoryKey, SubFilterType[]> = {
  "ai-data-science-cloud": [
    "Data Science",
    "Generative AI",
    "AI & Machine Learning",
    "Cloud Computing",
  ],
  "software-engineering": [
    "Full Stack Development",
    "Frontend Development",
    "DSA & Programming",
    "Software Engineering",
  ],
  "specialized-skills": [
    "3D & Creative Development",
    "Algorithms & Data Structures",
    "Cybersecurity",
    "Robotics & Controls",
    "Project Management",
  ],
};

export const categoryTitleMap: Record<CategoryKey, MainCategoryTitle> = {
  "ai-data-science-cloud": "AI, Data Science & Cloud",
  "software-engineering": "Software Engineering & Web Development",
  "specialized-skills": "Specialized Skills & Technologies",
};

export type CertificationDataType = {
  appName: string;
  image: string;
  description: string;
  category: CategoryKey;
  subType: SubFilterType;
  type?: string;
  isWideOnly?: boolean;
  smallChipLabel: string[];
  smallChipLinks: string[];
};

export const certificationData: CertificationDataType[] = [
  // =====================================================
  // 1. AI, DATA SCIENCE & CLOUD (6 items)
  // =====================================================

  {
    appName: "IBM Data Science Professional Certificate",
    image: ibmImg,
    category: "ai-data-science-cloud",
    subType: "Data Science",
    type: "AI, Data Science & Cloud",
    description:
      "Professional certification covering data science, Python, SQL, data analysis, visualization, and machine learning.",
    smallChipLabel: ["View Certificate"],
    smallChipLinks: [ibmPdf],
  },

  {
    appName:
      "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
    image: googleCloudImg,
    category: "ai-data-science-cloud",
    subType: "AI & Machine Learning",
    type: "AI, Data Science & Cloud",
    description:
      "Google Cloud skill badge focused on Gemini multimodality and multimodal RAG.",
    smallChipLabel: ["View Certificate"],
    smallChipLinks: [googleCloudPdf],
  },

  {
    appName: "Cloud Computing",
    image: nptelImg,
    category: "ai-data-science-cloud",
    subType: "Cloud Computing",
    type: "AI, Data Science & Cloud",
    description:
      "NPTEL Elite certification covering cloud computing concepts and technologies.",
    smallChipLabel: ["View Certificate"],
    smallChipLinks: [nptelPdf],
  },

  {
    appName: "Generative AI: Elevate Your Data Science Career",
    image: ibmGenaiImg,
    category: "ai-data-science-cloud",
    subType: "Generative AI",
    type: "AI, Data Science & Cloud",
    description:
      "IBM certification focused on generative AI and its applications in data science.",
    smallChipLabel: ["View Certificate"],
    smallChipLinks: [ibmGenaiPdf],
  },

  {
    appName: "Summer Internship in Google AI-ML",
    image: mediImg,
    category: "ai-data-science-cloud",
    subType: "AI & Machine Learning",
    type: "AI, Data Science & Cloud",
    description:
      "Summer internship focused on Google AI and machine learning at Medicaps University.",
    smallChipLabel: ["View Certificate"],
    smallChipLinks: [mediPdf],
  },

  {
    appName: "GenAI Powered Data Analytics Job Simulation",
    image: tataImg,
    category: "ai-data-science-cloud",
    subType: "Generative AI",
    type: "AI, Data Science & Cloud",
    description:
      "Practical job simulation focused on generative AI and data analytics.",
    smallChipLabel: ["View Certificate"],
    smallChipLinks: [tataPdf],
  },

  // =====================================================
  // 2. SOFTWARE ENGINEERING & WEB DEVELOPMENT (6 items)
  // =====================================================

  {
    appName: "Delta: Full Stack Web Development",
    image: apnaDeltaImg,
    category: "software-engineering",
    subType: "Full Stack Development",
    type: "Software Engineering & Web Development",
    description:
      "Full Stack Web Development certification covering modern web technologies and development.",
    smallChipLabel: ["View Certificate"],
    smallChipLinks: [apnaDeltaPdf],
  },

  {
    appName: "Front-End Software Engineering Job Simulation",
    image: skyscannerImg,
    category: "software-engineering",
    subType: "Frontend Development",
    type: "Software Engineering & Web Development",
    description:
      "Practical front-end software engineering job simulation with Skyscanner.",
    smallChipLabel: ["View Certificate"],
    smallChipLinks: [skyscannerPdf],
  },

  {
    appName: "Alpha: DSA with Java",
    image: apnaDsaImg,
    category: "software-engineering",
    subType: "DSA & Programming",
    type: "Software Engineering & Web Development",
    description: "Data Structures and Algorithms certification using Java.",
    smallChipLabel: ["View Certificate"],
    smallChipLinks: [apnaDsaPdf],
  },

  {
    appName: "Advanced Software Engineering Job Simulation",
    image: walmartImg,
    category: "software-engineering",
    subType: "Software Engineering",
    type: "Software Engineering & Web Development",
    description:
      "Advanced software engineering job simulation with Walmart Global Tech.",
    smallChipLabel: ["View Certificate"],
    smallChipLinks: [walmartPdf],
  },

  {
    appName: "Software Engineering Job Simulation",
    image: jpmorganImg,
    category: "software-engineering",
    subType: "Software Engineering",
    type: "Software Engineering & Web Development",
    description:
      "Practical software engineering job simulation with JPMorgan Chase & Co.",
    smallChipLabel: ["View Certificate"],
    smallChipLinks: [jpmorganPdf],
  },

  {
    appName: "Software Engineering Job Simulation",
    image: hpeImg,
    category: "software-engineering",
    subType: "Software Engineering",
    type: "Software Engineering & Web Development",
    description: "Software engineering job simulation with HPE.",
    smallChipLabel: ["View Certificate"],
    smallChipLinks: [hpePdf],
  },

  // =====================================================
  // 3. SPECIALIZED SKILLS & TECHNOLOGIES (6 items)
  // =====================================================

  {
    appName: "Three.js Journey",
    image: threejsImg,
    category: "specialized-skills",
    subType: "3D & Creative Development",
    type: "Specialized Skills & Technologies",
    description:
      "Three.js course covering 3D web development and interactive experiences.",
    smallChipLabel: ["View Certificate"],
    smallChipLinks: [threejsPdf],
  },

  {
    appName: "Advanced Data Structures and Algorithms",
    image: boardImg,
    category: "specialized-skills",
    subType: "Algorithms & Data Structures",
    type: "Specialized Skills & Technologies",
    description: "Advanced course focused on data structures and algorithms.",
    smallChipLabel: ["View Certificate"],
    smallChipLinks: [boardPdf],
  },

  {
    appName: "Cyber Job Simulation",
    image: deloitteCyberImg,
    category: "specialized-skills",
    subType: "Cybersecurity",
    type: "Specialized Skills & Technologies",
    description: "Practical cybersecurity job simulation with Deloitte.",
    smallChipLabel: ["View Certificate"],
    smallChipLinks: [deloitteCyberPdf],
  },

  {
    appName: "Robotics and Controls Job Simulation",
    image: johnsonImg,
    category: "specialized-skills",
    subType: "Robotics & Controls",
    type: "Specialized Skills & Technologies",
    description:
      "Robotics and controls job simulation with Johnson & Johnson MedTech.",
    smallChipLabel: ["View Certificate"],
    smallChipLinks: [johnsonPdf],
  },

  {
    appName: "Project Manager Job Simulation",
    image: siemensImg,
    category: "specialized-skills",
    subType: "Project Management",
    type: "Specialized Skills & Technologies",
    description: "Project management job simulation with Siemens.",
    smallChipLabel: ["View Certificate"],
    smallChipLinks: [siemensPdf],
  },

  {
    appName: "Complete Blender Megacourse: Beginner to Expert",
    image: udemyImg,
    category: "specialized-skills",
    subType: "3D & Creative Development",
    type: "Specialized Skills & Technologies",
    description:
      "Comprehensive Blender course covering 3D modeling, animation, and related workflows.",
    smallChipLabel: ["View Certificate"],
    smallChipLinks: [udemyPdf],
  },
];

export const certificateData = certificationData;

// Aliases
export type WebDataType = CertificationDataType;
export type WebFilterType = SubFilterType;
export const WebTypeFilters = [
  "Data Science",
  "Generative AI",
  "AI & Machine Learning",
  "Cloud Computing",
  "Full Stack Development",
  "Frontend Development",
  "DSA & Programming",
  "Software Engineering",
  "3D & Creative Development",
  "Algorithms & Data Structures",
  "Cybersecurity",
  "Robotics & Controls",
  "Project Management",
] as SubFilterType[];
export const webData = certificationData;
export const appData = certificationData;
