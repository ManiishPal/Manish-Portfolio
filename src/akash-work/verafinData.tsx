import { Avatar } from "@mui/material";
import type { HeaderRowData } from "../akash-commons/HeaderRowPaper";
import nasdaqLogo from "./../assets/img-work/nasdaq.png";
import img from "./../assets/img-work/verafin.jpg";
import img2 from "./../assets/img-work/verafin2.jpg";
export const images = [img, img2];

export const verafinData: {
  headerData: HeaderRowData;
  id: number;
  description: string[];
}[] = [
  {
    id: 2,
    headerData: {
      title: "Datalakes Developer",
      chipLabels: ["Nasdaq Verafin", "Scala", "Apache Spark", "AWS", "Hudi"],
      chipIcons: [
        <Avatar sx={{ width: "1.4rem", height: "1.4rem" }} src={nasdaqLogo} />,
      ],
      statLabel: ["Duration"],
      statValue: ["Present"],
      statSubLabel: ["Since Fall 2025"],
    },
    description: [
      "•	Working in the Warehouse Data Preparation Team in Verafin.",
      "•	Developing scala composers, unit tests, and pipeline tests to contribute to a newer pipeline migration based on Apache Spark, Hudi, Iceberg from an older RDS company database.",
      "•	Validating AWS step function runs in AWS workspaces with existing data to ensure data consistency.",
    ],
  },
  {
    id: 1,
    headerData: {
      title: "UI Developer",
      chipLabels: ["Nasdaq Verafin", "React", "TypeScript", "Node", "Webpack"],
      chipIcons: [
        <Avatar sx={{ width: "1.4rem", height: "1.4rem" }} src={nasdaqLogo} />,
      ],
      statLabel: ["Duration"],
      statValue: ["8 months"],
      statSubLabel: ["Spring 2024 and Winter 2025"],
    },
    description: [
      "•	Worked in the Application Frameworks UI Team in Verafin.",
      "•	Developed UI Components according to Figma Design and contributed to the company application. Raised and merged 51 Pull Requests to the company repository.",
      "•	Developed test for components in Jest. Worked with the QA Testing Team to target UI components by adding data test-ids.",
    ],
  },
];
