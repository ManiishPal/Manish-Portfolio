interface ScatterProps {
  colours?: string[];
}

const scatterAnimation = `
  @keyframes breatheRotate {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(10deg) scale(1.05); }
    100% { transform: rotate(0deg) scale(1); }
  }
  @keyframes breatheRotateRev {
    0% { transform: rotate(0deg) scale(1.05); }
    50% { transform: rotate(-10deg) scale(1); }
    100% { transform: rotate(0deg) scale(1.05); }
  }
  .star {
    /* This ensures they spin around their own center, not the 0,0 corner */
    transform-origin: center;
    transform-box: fill-box;
    display: inline-block;
  }
  .speed-1 { animation: breatheRotate 15s ease-in-out infinite; }
  .speed-2 { animation: breatheRotateRev 18s ease-in-out infinite; }
  .speed-3 { animation: breatheRotate 20s ease-in-out infinite; }
  .speed-4 { animation: breatheRotateRev 22s ease-in-out infinite; }
  .speed-5 { animation: breatheRotate 25s ease-in-out infinite; }
`;

export function StarsLight({ colours }: ScatterProps) {
  const bg = colours?.[0] ?? "#001829";
  const starFill = colours?.[3] ?? "#297EA6";

  return (
    <svg
      id="visual-scatter-light"
      viewBox="0 0 900 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <style>{scatterAnimation}</style>
      <rect width="900" height="600" fill={bg} />
      <g fill={starFill}>
        <g transform="translate(570 187)">
          <path
            className="star speed-1"
            d="M0 -177.4L39.8 -54.8L168.8 -54.8L64.5 20.9L104.3 143.6L0 67.8L-104.3 143.6L-64.5 20.9L-168.8 -54.8L-39.8 -54.8Z"
          />
        </g>
        <g transform="translate(15 414)">
          <path
            className="star speed-2"
            d="M0 -78.3L17.6 -24.2L74.5 -24.2L28.5 9.2L46 63.4L0 29.9L-46 63.4L-28.5 9.2L-74.5 -24.2L-17.6 -24.2Z"
          />
        </g>
        <g transform="translate(503 594)">
          <path
            className="star speed-3"
            d="M0 -108.5L24.4 -33.5L103.2 -33.5L39.4 12.8L63.8 87.8L0 41.5L-63.8 87.8L-39.4 12.8L-103.2 -33.5L-24.4 -33.5Z"
          />
        </g>
        <g transform="translate(886 487)">
          <path
            className="star speed-4"
            d="M0 -85.9L19.3 -26.5L81.7 -26.5L31.2 10.1L50.5 69.5L0 32.8L-50.5 69.5L-31.2 10.1L-81.7 -26.5L-19.3 -26.5Z"
          />
        </g>
        <g transform="translate(80 7)">
          <path
            className="star speed-5"
            d="M0 -116.1L26.1 -35.9L110.4 -35.9L42.2 13.7L68.2 93.9L0 44.3L-68.2 93.9L-42.2 13.7L-110.4 -35.9L-26.1 -35.9Z"
          />
        </g>
      </g>
    </svg>
  );
}

export function StarsDark() {
  const bg = "#000d17";
  const starFill = "#1a4d66";

  return (
    <svg
      id="visual-scatter-dark"
      viewBox="0 0 900 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <style>{scatterAnimation}</style>
      <rect width="900" height="600" fill={bg} />
      <g fill={starFill}>
        <g transform="translate(570 187)">
          <path
            className="star speed-1"
            d="M0 -177.4L39.8 -54.8L168.8 -54.8L64.5 20.9L104.3 143.6L0 67.8L-104.3 143.6L-64.5 20.9L-168.8 -54.8L-39.8 -54.8Z"
          />
        </g>
        <g transform="translate(15 414)">
          <path
            className="star speed-2"
            d="M0 -78.3L17.6 -24.2L74.5 -24.2L28.5 9.2L46 63.4L0 29.9L-46 63.4L-28.5 9.2L-74.5 -24.2L-17.6 -24.2Z"
          />
        </g>
        <g transform="translate(503 594)">
          <path
            className="star speed-3"
            d="M0 -108.5L24.4 -33.5L103.2 -33.5L39.4 12.8L63.8 87.8L0 41.5L-63.8 87.8L-39.4 12.8L-103.2 -33.5L-24.4 -33.5Z"
          />
        </g>
        <g transform="translate(886 487)">
          <path
            className="star speed-4"
            d="M0 -85.9L19.3 -26.5L81.7 -26.5L31.2 10.1L50.5 69.5L0 32.8L-50.5 69.5L-31.2 10.1L-81.7 -26.5L-19.3 -26.5Z"
          />
        </g>
        <g transform="translate(80 7)">
          <path
            className="star speed-5"
            d="M0 -116.1L26.1 -35.9L110.4 -35.9L42.2 13.7L68.2 93.9L0 44.3L-68.2 93.9L-42.2 13.7L-110.4 -35.9L-26.1 -35.9Z"
          />
        </g>
      </g>
    </svg>
  );
}
