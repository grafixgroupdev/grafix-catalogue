export default function Hero({ kicker, title, lede }) {
  return (
    <section style={{ padding: "64px 0 48px", borderBottom: "1px dashed var(--stroke-2)" }}>
      <div className="kicker">{kicker}</div>
      <h1 className="title" style={{ fontSize: 72, maxWidth: "16ch" }}>{title}</h1>
      <p className="lede" style={{ marginTop: 18 }}>{lede}</p>
    </section>
  );
}
