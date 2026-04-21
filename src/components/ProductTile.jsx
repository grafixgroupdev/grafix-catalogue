import { Link } from 'react-router-dom'
import Ph from './Ph'

export default function ProductTile({ p }) {
  return (
    <Link
      to={`/products/${p.slug}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        border: "1px solid var(--stroke-2)",
        background: "var(--panel)",
        borderRadius: 3,
        display: "block"
      }}
    >
      <Ph label={p.name} h={200} style={{ border: "none" }} />
      <div style={{ padding: "16px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div style={{ fontWeight: 600, fontSize: 16 }}>{p.name}</div>
          <span style={{ fontSize: 18, color: "var(--muted)" }}>→</span>
        </div>
        <div style={{ color: "var(--ink-2)", fontSize: 13, marginTop: 6, lineHeight: 1.5 }}>{p.blurb}</div>
      </div>
    </Link>
  );
}
