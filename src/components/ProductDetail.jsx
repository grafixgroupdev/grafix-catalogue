import { useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from './Breadcrumb'
import Ph from './Ph'
import SecHead from './SecHead'
import GuaranteeBadge from './GuaranteeBadge'
import InstallTable from './InstallTable'
import SystemRelated from './SystemRelated'
import { getProduct } from '../data/products'
import { installMethods } from '../data/installMethods'

export default function ProductDetail({ slug }) {
  const p = getProduct(slug);
  const [variant, setVariant] = useState(p?.hasVariants ? p.variants[0] : null);

  if (!p) return <div style={{ padding: 48 }}>Product not found: {slug}</div>;

  const system = p.system || "Signage Systems";
  const systemIndexHref = {
    "Signage Systems": "/products/signage",
    "Graphic Systems": "/products/graphic-systems",
    "Blind Systems": "/products/blind-systems",
  }[system] || "/products";

  const trail = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: system, href: systemIndexHref },
    { label: p.family },
  ];
  if (p.hasVariants && variant) trail.push({ label: variant });

  return (
    <div className="variation active" data-var="B">
      <div style={{ background: "var(--panel)", borderBottom: "1px solid var(--stroke)" }}>
        <div className="page" style={{ padding: "32px 48px 32px" }}>
          <Breadcrumb trail={trail} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr", alignItems: "end", gap: 24, marginTop: 12 }}>
            <div>
              <div className="mono">{system} / {p.family} · SKU {p.sku}</div>
              <div style={{ marginTop: 4 }}>
                <h1 className="title" style={{ fontSize: 72, margin: 0 }}>{p.name}</h1>
              </div>

              {p.hasVariants && (
                <div style={{ marginTop: 18, display: "flex", gap: 6, alignItems: "center" }}>
                  <span className="mono" style={{ marginRight: 8 }}>Variant:</span>
                  {p.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      style={{
                        padding: "8px 16px",
                        border: "1.5px solid var(--ink)",
                        background: variant === v ? "var(--ink)" : "transparent",
                        color: variant === v ? "var(--bg)" : "var(--ink)",
                        fontFamily: "Inter, sans-serif",
                        fontSize: 13,
                        fontWeight: 500,
                        cursor: "pointer",
                        borderRadius: 2,
                      }}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              )}

              <div className="lede" style={{ maxWidth: "54ch", marginTop: 18 }}>
                {p.tagline}
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${p.stripLabels.length}, 1fr)`, gap: 0 }}>
          {p.stripLabels.map((l, i) => (
            <Ph key={i} label={variant ? `${variant} · ${l}` : l} h={260}
              style={{
                borderTop: "1px solid var(--stroke)",
                borderRight: i < p.stripLabels.length - 1 ? "1px solid var(--stroke)" : "none",
                borderLeft: "none",
                borderBottom: "none",
              }} />
          ))}
        </div>
      </div>

      <div className="page">
        <section style={{ borderBottom: "1px dashed var(--stroke-2)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 56, alignItems: "start" }}>
            <aside style={{ position: "sticky", top: 100 }}>
              <h2 className="sec">§ 01 — Technical</h2>
              <div style={{ border: "1px solid var(--stroke)", borderRadius: 3, background: "var(--panel)" }}>
                <table className="specs" style={{ fontSize: 13 }}>
                  <tbody>
                    {p.specs.map(([k, v], i) => (
                      <tr key={i}><th>{k}</th><td>{v}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop: 18 }}><GuaranteeBadge /></div>
            </aside>
            <div>
              <h2 className="sec">§ 02 — Overview</h2>
              <h3 className="sub">{p.hasVariants && variant ? `${p.name} · ${variant}` : p.name}</h3>
              <p className="lede" style={{ marginBottom: 18 }}>{p.description}</p>

              <h2 className="sec" style={{ marginTop: 28 }}>§ 02.1 — Finishes</h2>
              <div style={{ display: "grid", gridTemplateColumns: `repeat(${p.finishes.length}, 1fr)`, gap: 10, marginBottom: 20 }}>
                {p.finishes.map((f, i) => (
                  <div key={i} style={{ border: "1px solid var(--stroke)", background: "var(--panel)", padding: 12 }}>
                    <Ph label={f} h={90} style={{ border: "none" }} />
                    <div style={{ fontWeight: 600, fontSize: 13, marginTop: 8 }}>{f}</div>
                  </div>
                ))}
              </div>

              <h2 className="sec" style={{ marginTop: 28 }}>§ 02.2 — Applications</h2>
              <ul style={{ lineHeight: 2, color: "var(--ink-2)", margin: 0, paddingLeft: 18 }}>
                {p.applications.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <SecHead n="03" title="Installation methods — comparison" sub="All eight standard methods, side by side." />
          <InstallTable rows={installMethods} />
          <div style={{ display: "flex", gap: 24, marginTop: 28, padding: "20px 24px", border: "1px solid var(--stroke-2)", background: "var(--panel)", borderRadius: 3, alignItems: "center" }}>
            <div style={{ flex: 1 }}>
              <div className="mono" style={{ color: "var(--accent)" }}>Note</div>
              <div style={{ fontSize: 14, color: "var(--ink-2)", marginTop: 4 }}>
                Method details change with substrate and letter size — the table shows defaults. Exact hardware, spacer depth
                and template supply are confirmed at quote.
              </div>
            </div>
            <Link className="btn" to="/installation">Full installation guide →</Link>
          </div>
        </section>

        <SystemRelated system={system} currentSlug={p.slug} />
      </div>
    </div>
  );
}
