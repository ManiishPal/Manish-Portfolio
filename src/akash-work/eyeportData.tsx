import img1 from "../assets/img-work/eyeport1.png";
import img2 from "../assets/img-work/eyeport2.png";
import img3 from "../assets/img-work/eyeport3.png";
import img4 from "../assets/img-work/eyeport4.png";
import img5 from "../assets/img-work/eyeport5.jpg";
import img6 from "../assets/img-work/eyeport6.png";
import img7 from "../assets/img-work/eyeport7.png";
import img8 from "../assets/img-work/eyeport8.png";
import img9 from "../assets/img-work/eyeport9.png";
import img10 from "../assets/img-work/eyeport10.jpg";
import img11 from "../assets/img-work/eyeport11.jpg";
import img12 from "../assets/img-work/eyeport12.jpg";
import img13 from "../assets/img-work/eyeport13.jpg";
import img14 from "../assets/img-work/eyeport14.jpg";
import img15 from "../assets/img-work/eyeport15.jpg";
import img16 from "../assets/img-work/eyeport16.jpg";

import vid1 from "../assets/img-work/eyeport1.mp4";
import vid2 from "../assets/img-work/eyeport2.mp4";
import type { HeaderRowData } from "../akash-commons/HeaderRowPaper";
import { Avatar } from "@mui/material";

import munLogo from "../assets/img-education/mun.png";

export const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
];
export const videos = [vid1, vid2];

export const eyeportHeaderData: HeaderRowData = {
  title: "Research and Development",
  chipLabels: [
    "Memorial University of Newfoundland",
    "Python",
    "PyTorch",
    "OpenCV",
  ],
  chipIcons: [
    <Avatar sx={{ width: "1.4rem", height: "1.4rem" }} src={munLogo} />,
  ],
  statLabel: ["Duration"],
  statValue: ["8 months"],
  statSubLabel: ["Winter 2023 and Fall 2023"],
};
