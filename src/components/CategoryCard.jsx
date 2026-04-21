import { Link } from 'react-router-dom'
import Ph from './Ph'

export default function CategoryCard({ title, sub, href, h = 220 }) {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.borderColor = "var(--ink)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.borderColor = "var(--stroke-2)";
  };

  return (
    <Link
      to={href}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
        background: "var(--panel)",
        border: "1px solid var(--stroke-2)",
        borderRadius: 3,
        transition: "border-color .15s"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Ph label={title} h={h} style={{ border: "none" }} />
      <div style={{ padding: "16px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: 16 }}>{title}</div>
          <div className="mono-2" style={{ color: "var(--muted)", fontSize: 11, marginTop: 3 }}>{sub}</div>
        </div>
        <span style={{ fontSize: 20, color: "var(--muted)" }}>→</span>
      </div>
    </Link>
  );
}
