interface BlobProps {
  colours?: string[];
}

const blobAnimation = `
  @keyframes breathe {
    0%, 100% {
      transform: translate(428.3px, 300.8px) scale(1) rotate(0deg);
    }
    50% {
      transform: translate(428.3px, 300.8px) scale(1.05) rotate(3deg);
    }
  }
  .animate-blob {
    animation: breathe 8s ease-in-out infinite;
    transform-origin: center;
    transform-box: fill-box;
  }
`;

export function BlobLight({ colours }: BlobProps) {
  const bg = colours?.[0] ?? "#f5f5f5";
  const blob = colours?.[1] ?? "#e0e0e0";

  return (
    <svg
      id="visual-blob-light"
      viewBox="0 0 900 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <style>{blobAnimation}</style>
      <rect width="900" height="600" fill={bg} />
      <g className="animate-blob">
        <path
          className="blob blob1"
          d="M131.6 -118.4C181.6 -81.6 240.8 -40.8 252.6 11.8C264.3 64.3 228.7 128.7 178.7 166C128.7 203.4 64.3 213.7 14.5 199.2C-35.4 184.7 -70.7 145.4 -109 108C-147.4 70.7 -188.7 35.4 -204.4 -15.7C-220 -66.7 -210.1 -133.4 -171.7 -170.2C-133.4 -207.1 -66.7 -214 -13 -201.1C40.8 -188.1 81.6 -155.2 131.6 -118.4"
          fill={blob}
        />
      </g>
    </svg>
  );
}

export function BlobDark() {
  return (
    <svg
      id="visual-blob-dark"
      viewBox="0 0 900 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <style>{blobAnimation}</style>
      <rect width="900" height="600" fill="#121212" />
      <g className="animate-blob">
        <path
          className="blob blob1"
          d="M131.6 -118.4C181.6 -81.6 240.8 -40.8 252.6 11.8C264.3 64.3 228.7 128.7 178.7 166C128.7 203.4 64.3 213.7 14.5 199.2C-35.4 184.7 -70.7 145.4 -109 108C-147.4 70.7 -188.7 35.4 -204.4 -15.7C-220 -66.7 -210.1 -133.4 -171.7 -170.2C-133.4 -207.1 -66.7 -214 -13 -201.1C40.8 -188.1 81.6 -155.2 131.6 -118.4"
          fill="#333333"
        />
      </g>
    </svg>
  );
}
