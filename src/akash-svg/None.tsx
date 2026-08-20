interface BlobProps {
  colours?: string[];
}

export function NoneLight({ colours }: BlobProps) {
  const bg = colours?.[0] ?? "#f5f5f5";

  return (
    <svg
      id="visual-blob-light"
      viewBox="0 0 900 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <rect width="900" height="600" fill={bg} />
      <g className="animate-blob"></g>
    </svg>
  );
}

export function NoneDark() {
  return (
    <svg
      id="visual-blob-dark"
      viewBox="0 0 900 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <rect width="900" height="600" fill="#121212" />
      <g className="animate-blob"></g>
    </svg>
  );
}
