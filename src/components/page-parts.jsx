// Shared page scaffolding for the multi-page site
// Depends on components.jsx (TopBar, Breadcrumb, Ph)

function PageFooter() {
  return (
    <footer>
      <div>Grafix Group · Product Catalogue</div>
      <div>Internal tool · wireframe</div>
    </footer>
  );
}

function Hero({ kicker, title, lede }) {
  return (
    <section style={{ padding: "64px 0 48px", borderBottom: "1px dashed var(--stroke-2)" }}>
      <div className="kicker">{kicker}</div>
      <h1 className="title" style={{ fontSize: 72, maxWidth: "16ch" }}>{title}</h1>
      <p className="lede" style={{ marginTop: 18 }}>{lede}</p>
    </section>
  );
}

function CategoryCard({ title, sub, href, h = 220 }) {
  return (
    <a href={href} style={{ textDecoration: "none", color: "inherit", display: "block", background: "var(--panel)", border: "1px solid var(--stroke-2)", borderRadius: 3, transition: "border-color .15s" }}
       onMouseEnter={e => e.currentTarget.style.borderColor = "var(--ink)"}
       onMouseLeave={e => e.currentTarget.style.borderColor = "var(--stroke-2)"}>
      <Ph label={title} h={h} style={{ border: "none" }} />
      <div style={{ padding: "16px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: 16 }}>{title}</div>
          <div className="mono-2" style={{ color: "var(--muted)", fontSize: 11, marginTop: 3 }}>{sub}</div>
        </div>
        <span style={{ fontSize: 20, color: "var(--muted)" }}>→</span>
      </div>
    </a>
  );
}

function Grid({ cols = 3, gap = 20, children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap }}>{children}</div>
  );
}

Object.assign(window, { PageFooter, Hero, CategoryCard, Grid });
