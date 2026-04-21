// Shared wireframe components
const { useState } = React;

/* Striped image placeholder */
function Ph({ label, w, h, style, corner }) {
  return (
    <div className={"ph" + (corner ? " corner" : "")} style={{ width: w, height: h, ...style }}>
      <span>{label}</span>
    </div>
  );
}

function Kicker({ children }) { return <div className="kicker">{children}</div>; }
function SecHead({ n, title, sub }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2 className="sec">§ {n} — {title}</h2>
      {sub && <h3 className="sub" style={{ maxWidth: "48ch" }}>{sub}</h3>}
    </div>
  );
}

/* Top bar (shared chrome) */
function TopBar({ active }) {
  const items = [
    { label: "Products", href: "products.html", key: "products" },
    { label: "Installation", href: "installation.html", key: "installation" },
  ];
  return (
    <div className="topbar">
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        <a href="index.html" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="logo">GRAFIX / CATALOGUE</div>
        </a>
        <div className="mono">internal tool</div>
      </div>
      <nav>
        <a href="index.html" className={active === "home" ? "is-active" : ""}>Home</a>
        {items.map(i => (
          <a key={i.key} href={i.href} className={active === i.key ? "is-active" : ""}>{i.label}</a>
        ))}
      </nav>
    </div>
  );
}

/* Breadcrumb — accepts an array of { label, href? } */
function Breadcrumb({ trail }) {
  return (
    <div className="breadcrumb">
      {trail.map((t, i) => {
        const isLast = i === trail.length - 1;
        return (
          <React.Fragment key={i}>
            {isLast || !t.href
              ? <span className={isLast ? "cur" : ""}>{t.label}</span>
              : <a href={t.href}>{t.label}</a>}
            {!isLast && <span className="sep">›</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* Gallery — 4 thumbs + hero */
function GalleryGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto", gap: 12 }}>
      <Ph label="Product · 01" h={260} />
      <Ph label="Product · 02" h={260} />
      <Ph label="Product · 03" h={260} />
      <Ph label="+ more · video" h={260} />
    </div>
  );
}

/* Gallery — 1 hero + thumbs */
function GalleryHero() {
  return (
    <div>
      <Ph label="Hero product image" h={420} style={{ marginBottom: 12 }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 10 }}>
        {["01","02","03","04","+5"].map((l,i)=> <Ph key={i} label={l} h={84} />)}
      </div>
    </div>
  );
}

/* Guarantee badge placeholder */
function GuaranteeBadge() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: 14, border: "1px solid var(--stroke)", borderRadius: 2, maxWidth: 420, background: "var(--panel)" }}>
      <div style={{ width: 56, height: 56, borderRadius: "50%", border: "1px dashed var(--stroke)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)", fontSize: 10, fontFamily: "JetBrains Mono, monospace", textAlign: "center" }}>SEAL</div>
      <div>
        <div style={{ fontWeight: 600, fontSize: 14 }}>Lifetime Guarantee</div>
        <div className="mono-2" style={{ fontSize: 12, color: "var(--muted)" }}>Materials & workmanship</div>
      </div>
    </div>
  );
}

/* Installation method — card with diagram + steps */
function InstallCard({ n, name, blurb, method }) {
  return (
    <div style={{ border: "1px solid var(--stroke)", borderRadius: 3, background: "var(--panel)", padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div className="mono">M-{String(n).padStart(2,"0")}</div>
        <span className="tag-pill">{method}</span>
      </div>
      <Ph label="installation diagram" h={140} />
      <div style={{ fontSize: 18, fontWeight: 600 }}>{name}</div>
      <div style={{ color: "var(--ink-2)", fontSize: 13, lineHeight: 1.5 }}>{blurb}</div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: "auto", paddingTop: 8, borderTop: "1px dashed var(--stroke-2)" }}>
        <span className="tag-pill">Interior</span>
        <span className="tag-pill">Exterior</span>
        <span className="tag-pill">Flush</span>
      </div>
    </div>
  );
}

/* Installation comparison table */
function InstallTable({ rows }) {
  return (
    <div style={{ overflow: "auto", border: "1px solid var(--stroke)", borderRadius: 3, background: "var(--panel)" }}>
      <table className="specs" style={{ minWidth: 920 }}>
        <thead>
          <tr>
            <th style={{ width: "18%" }}>Method</th>
            <th style={{ width: "14%" }}>Surface</th>
            <th style={{ width: "14%" }}>Difficulty</th>
            <th style={{ width: "14%" }}>Spacer</th>
            <th style={{ width: "14%" }}>Visible fixings</th>
            <th>Best for</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r,i)=>(
            <tr key={i}>
              <td style={{ fontWeight: 600 }}>{r.name}</td>
              <td>{r.surface}</td>
              <td>{r.difficulty}</td>
              <td>{r.spacer}</td>
              <td>{r.visible}</td>
              <td style={{ color: "var(--ink-2)" }}>{r.best}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* Technical diagram with numbered callouts */
function TechDiagram() {
  const callouts = [
    { n: 1, top: "18%", left: "22%", label: "Letter face" },
    { n: 2, top: "42%", left: "38%", label: "Stud / threaded rod" },
    { n: 3, top: "62%", left: "58%", label: "Sleeve / anchor" },
    { n: 4, top: "78%", left: "78%", label: "Wall surface" },
    { n: 5, top: "30%", left: "72%", label: "Spacer (optional)" },
  ];
  return (
    <div style={{ position: "relative", border: "1px solid var(--stroke)", borderRadius: 3, background: "var(--panel)", padding: 24 }}>
      <Ph label="Cross-section diagram · stud mount" h={380} />
      {callouts.map(c => (
        <div key={c.n} style={{ position: "absolute", top: c.top, left: c.left, display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--accent)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "JetBrains Mono, monospace", fontSize: 11, fontWeight: 600, flexShrink: 0 }}>{c.n}</div>
          <div style={{ background: "var(--bg)", border: "1px solid var(--stroke)", padding: "3px 8px", fontSize: 11, fontFamily: "JetBrains Mono, monospace", whiteSpace: "nowrap" }}>{c.label}</div>
        </div>
      ))}
    </div>
  );
}

/* Related products grid */
function Related() {
  const items = ["Flat Cut Metal","Cast Metal","Flat Cut Acrylic","Formed Plastic","Laminated","Illuminated"];
  return (
    <section>
      <SecHead n="06" title="Related products" sub="Explore adjacent letter & logo families." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
        {items.map((t,i)=>(
          <div key={i} style={{ border: "1px solid var(--stroke-2)", background: "var(--panel)", borderRadius: 3 }}>
            <Ph label={t} h={200} style={{ border: "none" }} />
            <div style={{ padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>{t}</div>
                <div className="mono-2" style={{ color: "var(--muted)", fontSize: 11, marginTop: 2 }}>Letters & Logos</div>
              </div>
              <span style={{ fontSize: 18, color: "var(--muted)" }}>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Shared install data */
const installMethods = [
  { name: "Flush / Stud Mount", method: "Studs", blurb: "Letters set flush against substrate, fastened by factory-welded threaded studs inserted into drilled holes.", surface: "Most rigid substrates", difficulty: "Medium", spacer: "None", visible: "None", best: "Clean interior walls, monolithic look" },
  { name: "Projected / Spaced Mount", method: "Studs + spacer", blurb: "Letters stand off the wall on spacers to create depth and a shadow line behind the glyphs.", surface: "Most rigid substrates", difficulty: "Medium", spacer: "6–25 mm", visible: "None", best: "Shadow line, lobbies" },
  { name: "Pattern / Template Mount", method: "Template", blurb: "Paper pattern locates every stud for fast, accurate installation of long words or logos.", surface: "Drywall, masonry, wood", difficulty: "Easy", spacer: "Optional", visible: "None", best: "Large runs, long logos" },
  { name: "VHB Tape Mount", method: "Adhesive", blurb: "Pressure-sensitive foam tape bonds lightweight letters. No drilling or fasteners required.", surface: "Smooth, non-porous", difficulty: "Easy", spacer: "None", visible: "None", best: "Glass, polished metal, temp installs" },
  { name: "Silicone / Adhesive Mount", method: "Adhesive", blurb: "Structural silicone for porous or textured substrates where tape cannot bond.", surface: "Porous / textured", difficulty: "Easy", spacer: "None", visible: "None", best: "Brick, stone, stucco" },
  { name: "Rosette / Cap Mount", method: "Mechanical", blurb: "Decorative cap visible on letter face — traditional look for bronze and cast appearances.", surface: "Any", difficulty: "Medium", spacer: "Optional", visible: "Yes", best: "Memorials, traditional plaques" },
  { name: "Rail / Z-Bar Mount", method: "Rail", blurb: "Letters pre-mounted to a hidden rail for perfectly aligned installation in one step.", surface: "Any", difficulty: "Hard", spacer: "As required", visible: "None", best: "Large logos, one-shot installs" },
  { name: "Free-Standing / Base Mount", method: "Base", blurb: "Letters supplied with a welded base plate anchored into pavement or plinth.", surface: "Concrete, plinth", difficulty: "Hard", spacer: "n/a", visible: "Base only", best: "Monument signs, exterior landmark" },
];

Object.assign(window, { Ph, Kicker, SecHead, TopBar, Breadcrumb, GalleryGrid, GalleryHero, GuaranteeBadge, InstallCard, InstallTable, TechDiagram, Related, installMethods });
