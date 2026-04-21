import { Link } from 'react-router-dom'
import SecHead from './SecHead'
import Ph from './Ph'
import { SIGNAGE_PRODUCTS, GRAPHIC_PRODUCTS, BLIND_PRODUCTS } from '../data/products'

export default function SystemRelated({ system, currentSlug }) {
  const pool = system === "Graphic Systems" ? GRAPHIC_PRODUCTS
             : system === "Blind Systems"   ? BLIND_PRODUCTS
             : SIGNAGE_PRODUCTS;
  const others = pool.filter(x => x.slug !== currentSlug).slice(0, 6);
  if (others.length === 0) return null;

  return (
    <section>
      <SecHead n="04" title="Related products" sub={`Explore adjacent ${system.toLowerCase()}.`} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
        {others.map((t, i) => (
          <Link
            key={i}
            to={`/products/${t.slug}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid var(--stroke-2)",
              background: "var(--panel)",
              borderRadius: 3,
              display: "block"
            }}
          >
            <Ph label={t.name} h={200} style={{ border: "none" }} />
            <div style={{ padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>{t.name}</div>
                <div className="mono-2" style={{ color: "var(--muted)", fontSize: 11, marginTop: 2 }}>{system}</div>
              </div>
              <span style={{ fontSize: 18, color: "var(--muted)" }}>→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
