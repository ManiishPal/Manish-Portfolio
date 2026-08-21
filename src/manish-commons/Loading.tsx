import spinnerImg from "../assets/img-commons/spinner.png";

export default function Loading({ text }: { text: string }) {
  return (
    <div className="loading" id="splash">
      <div className="loadwrapper">
        <img src={spinnerImg} />
      </div>
      <p
        style={{
          fontSize: "1.5rem",
          marginTop: "0.85rem",
          fontWeight: "500",
          color: "white",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        }}
      >
        {text}
      </p>
    </div>
  );
}
