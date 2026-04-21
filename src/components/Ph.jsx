export default function Ph({ label, w, h, style, corner }) {
  return (
    <div
      className={"ph" + (corner ? " corner" : "")}
      style={{ width: w, height: h, ...style }}
    >
      <span>{label}</span>
    </div>
  );
}
