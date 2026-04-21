// Variation B — Specs-forward technical layout
// Hero strip → sticky spec table / long-form description → install comparison table → related

function VariationB() {
  return (
    <div className="variation" data-var="B" data-screen-label="Variation B — Specs-forward">
      {/* Hero: full-bleed thin strip */}
      <div style={{ background: "var(--panel)", borderBottom: "1px solid var(--stroke)" }}>
        <div className="page" style={{ padding: "32px 48px 32px" }}>
          <Breadcrumb trail={[
            { label: "Home", href: "index.html" },
            { label: "Products", href: "products.html" },
            { label: "Signage", href: "signage.html" },
            { label: "Letters & Logos", href: "letters-logos.html" },
            { label: "Fabricated Metal" },
          ]} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr", alignItems: "end", gap: 24, marginTop: 12 }}>
            <div>
              <div className="mono">Letters & Logos / Fabricated Metal · SKU FM-00</div>
              <h1 className="title" style={{ fontSize: 72, marginTop: 4 }}>Fabricated Metal</h1>
              <div className="lede" style={{ maxWidth: "54ch", marginTop: 14 }}>
                Precision-fabricated stainless steel and aluminium letters and logos. Engineered for durability,
                finished for presence.
              </div>
            </div>
          </div>
        </div>
        {/* horizontal image strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0 }}>
          {["Brushed SS 15\"H","Polished AL 24\"H","Anodised black","Custom paint","Detail · edge"].map((l, i) => (
            <Ph key={i} label={l} h={260} style={{ borderTop: "1px solid var(--stroke)", borderRight: i < 4 ? "1px solid var(--stroke)" : "none", borderLeft: "none", borderBottom: "none" }} />
          ))}
        </div>
      </div>

      <div className="page">
        {/* Two-column: sticky specs left, long-form right */}
        <section style={{ borderBottom: "1px dashed var(--stroke-2)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 56, alignItems: "start" }}>
            <aside style={{ position: "sticky", top: 100 }}>
              <h2 className="sec">§ 01 — Technical</h2>
              <div style={{ border: "1px solid var(--stroke)", borderRadius: 3, background: "var(--panel)" }}>
                <table className="specs" style={{ fontSize: 13 }}>
                  <tbody>
                    <tr><th>Material</th><td>SS · AL</td></tr>
                    <tr><th>Face</th><td>0.032 – 0.125"</td></tr>
                    <tr><th>Return</th><td>0.5 – 6.0"</td></tr>
                    <tr><th>Height</th><td>2 – 100"+</td></tr>
                    <tr><th>Min stroke</th><td>3/8"</td></tr>
                    <tr><th>Weight</th><td>Light, hollow</td></tr>
                    <tr><th>Use</th><td>Int / Ext</td></tr>
                    <tr><th>Lead time</th><td>3–5 weeks</td></tr>
                    <tr><th>Warranty</th><td>Lifetime</td></tr>
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop: 18 }}><GuaranteeBadge /></div>
            </aside>
            <div>
              <h2 className="sec">§ 02 — Overview</h2>
              <h3 className="sub">Built from sheet, welded, finished.</h3>
              <p className="lede" style={{ marginBottom: 18 }}>
                Fabricated metal letters are constructed from flat sheet stock — face, returns and back — laser-cut,
                formed and welded into a hollow shell. The process allows virtually any shape at virtually any scale,
                from small interior lobby work to full-height exterior wordmarks.
              </p>

              <h2 className="sec" style={{ marginTop: 28 }}>§ 02.1 — Finishes</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 20 }}>
                {["Brushed","Polished","Anodised","Titanium"].map((f, i) => (
                  <div key={i} style={{ border: "1px solid var(--stroke)", background: "var(--panel)", padding: 12 }}>
                    <Ph label={f} h={90} style={{ border: "none" }} />
                    <div style={{ fontWeight: 600, fontSize: 13, marginTop: 8 }}>{f}</div>
                  </div>
                ))}
              </div>

              <h2 className="sec" style={{ marginTop: 28 }}>§ 02.2 — Applications</h2>
              <ul style={{ lineHeight: 2, color: "var(--ink-2)", margin: 0, paddingLeft: 18 }}>
                <li>Corporate lobby identity — flush stud mount, brushed stainless</li>
                <li>Exterior building ID — spaced mount, anodised or painted</li>
                <li>Retail storefronts — illuminated halo, VHB on glass</li>
                <li>Monument & architectural — rail or base mount, heavy gauge</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Installation — COMPARISON TABLE (primary format for Variation B) */}
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
            <a className="btn">Full installation guide (PDF)</a>
          </div>
        </section>

        <Related />
      </div>
    </div>
  );
}

window.VariationB = VariationB;
