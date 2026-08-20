import "@mui/material/styles";
import type { ModelViewerElement } from "@google/model-viewer";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "model-viewer": DetailedHTMLProps<
          HTMLAttributes<ModelViewerElement>,
          ModelViewerElement
        > & {
          src?: string;
          alt?: string;
          "camera-controls"?: boolean;
          "auto-rotate"?: boolean;
          "rotation-per-second"?: string;
          "shadow-intensity"?: string;
          exposure?: string;
          "camera-orbit"?: string;
          "interaction-prompt"?: string;
        };
      }
    }
  }
}

declare module "@mui/material/styles" {
  interface TypeBackground {
    normal?: string;
    macos?: string;
    macosfinder?: string;
    macosfinder2?: string;
    light?: string;
    light2?: string;
    button?: string;
    buttondark?: string;
  }

  interface TypeText {
    muted?: string;
    light?: string;
    light2?: string;
    dark?: string;
  }
}
