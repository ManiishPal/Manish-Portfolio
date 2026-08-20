import img0 from "../assets/img-main/banner3.png";
import img1 from "../assets/img-questplunge/img0.png";
import img2 from "../assets/img-questplunge/img1.png";
import img3 from "../assets/img-questplunge/img2.png";
import img4 from "../assets/img-questplunge/img3.png";

import vid1 from "../assets/img-questplunge/qptimeline.mp4";
import type { HeaderRowData } from "../akash-commons/HeaderRowPaper";
import { Avatar } from "@mui/material";

import munLogo from "../assets/img-education/mun.png";

export const images = [img0, img1, img2, img3, img4];
export const videos = [vid1];

export const questplungeHeaderData: HeaderRowData = {
  title: "Game Development",
  chipLabels: ["Memorial University of Newfoundland", "C#", "Unity"],
  chipIcons: [
    <Avatar sx={{ width: "1.4rem", height: "1.4rem" }} src={munLogo} />,
  ],
  statLabel: ["Duration"],
  statValue: ["4 months"],
  statSubLabel: ["Winter 2024"],
};
