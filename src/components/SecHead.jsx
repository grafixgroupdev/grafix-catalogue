export default function SecHead({ n, title, sub }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2 className="sec">§ {n} — {title}</h2>
      {sub && <h3 className="sub" style={{ maxWidth: "48ch" }}>{sub}</h3>}
    </div>
  );
}
