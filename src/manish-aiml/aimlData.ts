import activityDetection from "../assets/img-aiml/activityDetection.png";
import distractedDriver from "../assets/img-aiml/distractedDriver.png";
import drowsinessDetection from "../assets/img-aiml/drowsinessDetection.png";
import marketInsight from "../assets/img-aiml/marketInsight.png";
import handTracking from "../assets/img-aiml/handTracking.png";
import pricePrediction from "../assets/img-aiml/pricePrediction.png";

export const images = [
  activityDetection,
  distractedDriver,
  drowsinessDetection,
  marketInsight,
  handTracking,
  pricePrediction,
];

export type AimlFilterType =
  | "Computer Vision"
  | "Generative AI"
  | "Machine Learning"
  | "Data Science";

export const AimlTypeFilters: AimlFilterType[] = [
  "Computer Vision",
  "Generative AI",
  "Machine Learning",
  "Data Science",
];

export type AimlDataType = {
  appName: string;
  image: string;
  description: string;
  type: AimlFilterType;
  isWideOnly?: boolean;
  smallChipLabel: string[];
  smallChipLinks: string[];
};

export const aimlData: AimlDataType[] = [
  {
    appName: "Activity Detection",
    image: activityDetection,
    type: "Computer Vision",
    description:
      "Real-time human activity recognition system using computer vision and deep learning to classify actions from video streams.",
    smallChipLabel: [],
    smallChipLinks: [],
  },

  {
    appName: "Distracted Driver Detection",
    image: distractedDriver,
    type: "Computer Vision",
    description:
      "AI-powered distracted driver detection system that identifies unsafe driving behaviors using image classification and CNNs.",
    smallChipLabel: [],
    smallChipLinks: [],
  },

  {
    appName: "Drowsiness Detection",
    image: drowsinessDetection,
    type: "Computer Vision",
    description:
      "Real-time drowsiness detection system using facial landmark tracking and eye aspect ratio analysis to alert fatigued drivers.",
    smallChipLabel: [],
    smallChipLinks: [],
  },

  {
    appName: "Hand Tracking",
    image: handTracking,
    type: "Computer Vision",
    description:
      "Real-time hand tracking and gesture recognition system using MediaPipe and OpenCV for interactive applications.",
    smallChipLabel: [],
    smallChipLinks: [],
  },

  {
    appName: "Market Insight",
    image: marketInsight,
    type: "Data Science",
    description:
      "Data-driven market analysis dashboard providing actionable insights through visualization and statistical modeling.",
    smallChipLabel: [],
    smallChipLinks: [],
  },

  {
    appName: "Price Prediction",
    image: pricePrediction,
    type: "Machine Learning",
    description:
      "Machine learning model for price prediction using regression techniques, feature engineering, and historical data analysis.",
    smallChipLabel: [],
    smallChipLinks: [],
  },
];
