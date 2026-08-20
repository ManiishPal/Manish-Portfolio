interface PeakProps {
  colours?: string[];
}

const peakAnimation = `
  @keyframes peakBreathe {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .peak { animation: peakBreathe 6s ease-in-out infinite; }
  .peak-1 { animation-duration: 7s; }
  .peak-2 { animation-duration: 8s; animation-delay: -1s; }
  .peak-3 { animation-duration: 9s; animation-delay: -2s; }
  .peak-4 { animation-duration: 10s; animation-delay: -3s; }
  .peak-5 { animation-duration: 11s; animation-delay: -4s; }
  .peak-6 { animation-duration: 12s; animation-delay: -5s; }
`;

export function PeaksLight({ colours }: PeakProps) {
  const c = [
    colours?.[0] ?? "#931C1C",
    colours?.[1] ?? "#f5730a",
    colours?.[2] ?? "#d15308",
    colours?.[3] ?? "#992503",
  ];

  return (
    <svg
      id="visual-peaks-light"
      viewBox="0 0 900 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <style>{peakAnimation}</style>
      <rect width="900" height="600" fill={c[0]} />
      <path
        className="peak peak-1"
        d="M0 326L129 311L257 242L386 310L514 202L643 271L771 208L900 273L900 601L0 601Z"
        fill={c[1]}
      />
      <path
        className="peak peak-2"
        d="M0 323L129 307L257 304L386 373L514 339L643 372L771 362L900 252L900 601L0 601Z"
        fill={c[1]}
        style={{ filter: "brightness(0.9)" }}
      />
      <path
        className="peak peak-3"
        d="M0 397L129 338L257 327L386 388L514 303L643 418L771 311L900 353L900 601L0 601Z"
        fill={c[2]}
      />
      <path
        className="peak peak-4"
        d="M0 438L129 422L257 431L386 358L514 405L643 431L771 424L900 420L900 601L0 601Z"
        fill={c[2]}
        style={{ filter: "brightness(0.9)" }}
      />
      <path
        className="peak peak-5"
        d="M0 483L129 449L257 437L386 453L514 447L643 492L771 473L900 449L900 601L0 601Z"
        fill={c[3]}
        style={{ filter: "brightness(1.1)" }}
      />
      <path
        className="peak peak-6"
        d="M0 521L129 512L257 470L386 528L514 509L643 474L771 464L900 515L900 601L0 601Z"
        fill={c[3]}
      />
      <path
        className="peak peak-7"
        d="M0 524L129 565L257 546L386 568L514 544L643 544L771 542L900 551L900 601L0 601Z"
        fill={c[3]}
        style={{ filter: "brightness(0.8)" }}
      />
    </svg>
  );
}

export function PeaksDark() {
  const greys = [
    "#0a0a0a",
    "#1a1a1a",
    "#222222",
    "#2a2a2a",
    "#333333",
    "#3d3d3d",
    "#474747",
  ];

  return (
    <svg
      id="visual-peaks-dark"
      viewBox="0 0 900 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <style>{peakAnimation}</style>
      <rect width="900" height="600" fill={greys[0]} />
      <path
        className="peak peak-1"
        d="M0 326L129 311L257 242L386 310L514 202L643 271L771 208L900 273L900 601L0 601Z"
        fill={greys[1]}
      />
      <path
        className="peak peak-2"
        d="M0 323L129 307L257 304L386 373L514 339L643 372L771 362L900 252L900 601L0 601Z"
        fill={greys[2]}
      />
      <path
        className="peak peak-3"
        d="M0 397L129 338L257 327L386 388L514 303L643 418L771 311L900 353L900 601L0 601Z"
        fill={greys[3]}
      />
      <path
        className="peak peak-4"
        d="M0 438L129 422L257 431L386 358L514 405L643 431L771 424L900 420L900 601L0 601Z"
        fill={greys[4]}
      />
      <path
        className="peak peak-5"
        d="M0 483L129 449L257 437L386 453L514 447L643 492L771 473L900 449L900 601L0 601Z"
        fill={greys[5]}
      />
      <path
        className="peak peak-6"
        d="M0 521L129 512L257 470L386 528L514 509L643 474L771 464L900 515L900 601L0 601Z"
        fill={greys[6]}
      />
      <path
        className="peak peak-7"
        d="M0 524L129 565L257 546L386 568L514 544L643 544L771 542L900 551L900 601L0 601Z"
        fill="#525252"
      />
    </svg>
  );
}
