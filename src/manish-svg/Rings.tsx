interface RingProps {
  colours?: string[];
}

const ringAnimation = `
  @keyframes ringFloat {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(2deg); }
  }
  .ring-group {
    animation: ringFloat 7s ease-in-out infinite;
    transform-origin: center;
    transform-box: fill-box;
  }
  .ring-delay-1 { animation-duration: 8s; animation-delay: -2s; }
  .ring-delay-2 { animation-duration: 9s; animation-delay: -4s; }
  .ring-delay-3 { animation-duration: 10s; animation-delay: -1s; }
`;

export function RingsLight({ colours }: RingProps) {
  const bg = colours?.[0] ?? "#931F1F";
  const stroke = colours?.[3] ?? "#F7760E";

  return (
    <svg
      id="visual-rings-light"
      viewBox="0 0 900 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <style>{ringAnimation}</style>
      <rect width="900" height="600" fill={bg} />

      <g className="ring-group">
        <g transform="translate(521 206)">
          <path
            d="M96.5 -28.5C109.8 9.5 94.8 59.6 61.8 83.1C28.9 106.5 -21.9 103.3 -55.6 78.4C-89.2 53.5 -105.7 6.9 -93.6 -29.6C-81.4 -66 -40.7 -92.4 0.4 -92.6C41.6 -92.7 83.2 -66.6 96.5 -28.5Z"
            stroke={stroke}
            fill="none"
            strokeWidth="20"
          />
        </g>
      </g>

      <g className="ring-group ring-delay-1">
        <g transform="translate(12 105)">
          <path
            d="M46.5 -13.2C53.2 5.4 46.5 30.1 30.9 41.1C15.4 52.1 -9.2 49.3 -26.6 36.6C-44 24 -54.3 1.5 -48.7 -15.6C-43.1 -32.7 -21.5 -44.4 -0.8 -44.1C19.9 -43.9 39.9 -31.7 46.5 -13.2Z"
            stroke={stroke}
            fill="none"
            strokeWidth="20"
          />
        </g>
      </g>

      <g className="ring-group ring-delay-2">
        <g transform="translate(651 532)">
          <path
            d="M52.9 -18.4C58.9 1.3 47.4 25.4 29.9 37.2C12.4 49 -11.1 48.3 -28.1 36.5C-45.1 24.7 -55.6 1.6 -49.8 -17.8C-44 -37.2 -22 -52.9 0.7 -53.1C23.4 -53.3 46.9 -38.1 52.9 -18.4Z"
            stroke={stroke}
            fill="none"
            strokeWidth="20"
          />
        </g>
      </g>

      <g className="ring-group ring-delay-3">
        <g transform="translate(354 485)">
          <path
            d="M49.3 -15.5C55.9 4.5 47.9 29.7 31.7 40.8C15.5 52 -9 49 -27.4 36C-45.9 23 -58.3 0 -52.7 -18.5C-47.1 -36.9 -23.6 -50.9 -1.1 -50.5C21.3 -50.1 42.6 -35.5 49.3 -15.5Z"
            stroke={stroke}
            fill="none"
            strokeWidth="20"
          />
        </g>
      </g>

      <g className="ring-group ring-delay-1">
        <g transform="translate(858 212)">
          <path
            d="M63.8 -21.7C72.3 5.3 61.5 37.6 39.1 54C16.6 70.3 -17.6 70.8 -41.6 54.1C-65.5 37.4 -79.3 3.6 -70.7 -23.7C-62.1 -50.9 -31 -71.5 -1.7 -71C27.7 -70.4 55.3 -48.7 63.8 -21.7Z"
            stroke={stroke}
            fill="none"
            strokeWidth="20"
          />
        </g>
      </g>

      <g className="ring-group ring-delay-2">
        <g transform="translate(51 495)">
          <path
            d="M87.7 -28C98.4 4.2 81.1 46 49.5 69.2C17.9 92.4 -28 97.1 -58.3 76C-88.6 55 -103.3 8.3 -91 -26.2C-78.7 -60.7 -39.4 -83 -0.4 -82.8C38.5 -82.7 77.1 -60.1 87.7 -28Z"
            stroke={stroke}
            fill="none"
            strokeWidth="20"
          />
        </g>
      </g>
    </svg>
  );
}

export function RingsDark() {
  const bg = "#0a0a0a";
  const stroke = "#4a4a4a";

  return (
    <svg
      id="visual-rings-dark"
      viewBox="0 0 900 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <style>{ringAnimation}</style>
      <rect width="900" height="600" fill={bg} />
      <g className="ring-group">
        <g transform="translate(521 206)">
          <path
            d="M96.5 -28.5C109.8 9.5 94.8 59.6 61.8 83.1C28.9 106.5 -21.9 103.3 -55.6 78.4C-89.2 53.5 -105.7 6.9 -93.6 -29.6C-81.4 -66 -40.7 -92.4 0.4 -92.6C41.6 -92.7 83.2 -66.6 96.5 -28.5Z"
            stroke={stroke}
            fill="none"
            strokeWidth="20"
          />
        </g>
      </g>
      <g className="ring-group ring-delay-1">
        <g transform="translate(12 105)">
          <path
            d="M46.5 -13.2C53.2 5.4 46.5 30.1 30.9 41.1C15.4 52.1 -9.2 49.3 -26.6 36.6C-44 24 -54.3 1.5 -48.7 -15.6C-43.1 -32.7 -21.5 -44.4 -0.8 -44.1C19.9 -43.9 39.9 -31.7 46.5 -13.2Z"
            stroke={stroke}
            fill="none"
            strokeWidth="20"
          />
        </g>
      </g>
      <g className="ring-group ring-delay-2">
        <g transform="translate(651 532)">
          <path
            d="M52.9 -18.4C58.9 1.3 47.4 25.4 29.9 37.2C12.4 49 -11.1 48.3 -28.1 36.5C-45.1 24.7 -55.6 1.6 -49.8 -17.8C-44 -37.2 -22 -52.9 0.7 -53.1C23.4 -53.3 46.9 -38.1 52.9 -18.4Z"
            stroke={stroke}
            fill="none"
            strokeWidth="20"
          />
        </g>
      </g>
      <g className="ring-group ring-delay-3">
        <g transform="translate(354 485)">
          <path
            d="M49.3 -15.5C55.9 4.5 47.9 29.7 31.7 40.8C15.5 52 -9 49 -27.4 36C-45.9 23 -58.3 0 -52.7 -18.5C-47.1 -36.9 -23.6 -50.9 -1.1 -50.5C21.3 -50.1 42.6 -35.5 49.3 -15.5Z"
            stroke={stroke}
            fill="none"
            strokeWidth="20"
          />
        </g>
      </g>
      <g className="ring-group ring-delay-1">
        <g transform="translate(858 212)">
          <path
            d="M63.8 -21.7C72.3 5.3 61.5 37.6 39.1 54C16.6 70.3 -17.6 70.8 -41.6 54.1C-65.5 37.4 -79.3 3.6 -70.7 -23.7C-62.1 -50.9 -31 -71.5 -1.7 -71C27.7 -70.4 55.3 -48.7 63.8 -21.7Z"
            stroke={stroke}
            fill="none"
            strokeWidth="20"
          />
        </g>
      </g>
      <g className="ring-group ring-delay-2">
        <g transform="translate(51 495)">
          <path
            d="M87.7 -28C98.4 4.2 81.1 46 49.5 69.2C17.9 92.4 -28 97.1 -58.3 76C-88.6 55 -103.3 8.3 -91 -26.2C-78.7 -60.7 -39.4 -83 -0.4 -82.8C38.5 -82.7 77.1 -60.1 87.7 -28Z"
            stroke={stroke}
            fill="none"
            strokeWidth="20"
          />
        </g>
      </g>
    </svg>
  );
}
