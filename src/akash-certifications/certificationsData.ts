import googleCloudImg from "../assets/img-certifications/google-cloud.png";
import googleCloudPdf from "../assets/img-certifications/google-cloud.pdf";

import ibmGenAiImg from "../assets/img-certifications/ibm-genai.png";
import ibmGenAiPdf from "../assets/img-certifications/ibm-genai.pdf";

import ibmImg from "../assets/img-certifications/ibm.png";
import ibmPdf from "../assets/img-certifications/ibm.pdf";

import tataImg from "../assets/img-certifications/TATA.png";
import tataPdf from "../assets/img-certifications/TATA.pdf";

import nptelImg from "../assets/img-certifications/nptel.png";
import nptelPdf from "../assets/img-certifications/nptel.pdf";

import mediImg from "../assets/img-certifications/medi.jpg";
import mediPdf from "../assets/img-certifications/medi.pdf";

export const certificationImages = [
  googleCloudImg,
  ibmGenAiImg,
  ibmImg,
  tataImg,
  nptelImg,
  mediImg,
];

export type CertificationCategory =
  | "AI & Cloud"
  | "Data Science"
  | "Software Engineering"
  | "Specialized";

export type CertificationDataType = {
  appName: string;
  image: string;
  description: string;
  pdfUrl: string;
  category: CertificationCategory;
  smallChipLabel: string[];
  smallChipLinks: string[];
};

export const CertificationTypeFilters: CertificationCategory[] = [
  "AI & Cloud",
  "Data Science",
  "Software Engineering",
  "Specialized",
];

export const certificationsData: CertificationDataType[] = [
  {
    appName: "Google Cloud - AI & Cloud Certification",
    image: googleCloudImg,
    category: "AI & Cloud",
    description:
      "Certification in Google Cloud Platform, machine learning services, cloud infrastructure, and AI deployment.",
    pdfUrl: googleCloudPdf,
    smallChipLabel: ["View Certificate PDF"],
    smallChipLinks: [googleCloudPdf],
  },
  {
    appName: "IBM - Generative AI Specialist",
    image: ibmGenAiImg,
    category: "AI & Cloud",
    description:
      "Specialized certification in Generative AI engineering, Large Language Models (LLMs), prompt engineering, and AI application development.",
    pdfUrl: ibmGenAiPdf,
    smallChipLabel: ["View Certificate PDF"],
    smallChipLinks: [ibmGenAiPdf],
  },
  {
    appName: "IBM - Data Science & AI Professional",
    image: ibmImg,
    category: "Data Science",
    description:
      "Comprehensive certification covering data analysis, machine learning algorithms, Python data science stack, and predictive modeling.",
    pdfUrl: ibmPdf,
    smallChipLabel: ["View Certificate PDF"],
    smallChipLinks: [ibmPdf],
  },
  {
    appName: "TATA - Data Visualization & Analytics",
    image: tataImg,
    category: "Data Science",
    description:
      "Job simulation certification in data visualization, business intelligence dashboards, and executive data storytelling.",
    pdfUrl: tataPdf,
    smallChipLabel: ["View Certificate PDF"],
    smallChipLinks: [tataPdf],
  },
  {
    appName: "Medical & Healthcare AI Data Science",
    image: mediImg,
    category: "Data Science",
    description:
      "Specialized certification focused on medical data processing, health informatics, and diagnostic machine learning models.",
    pdfUrl: mediPdf,
    smallChipLabel: ["View Certificate PDF"],
    smallChipLinks: [mediPdf],
  },
  {
    appName: "NPTEL - Technical Certification",
    image: nptelImg,
    category: "Specialized",
    description:
      "NPTEL certification in core computer science, advanced algorithms, and software development methodologies.",
    pdfUrl: nptelPdf,
    smallChipLabel: ["View Certificate PDF"],
    smallChipLinks: [nptelPdf],
  },
];
