import TopBar from '../components/TopBar'
import Hero from '../components/Hero'
import Breadcrumb from '../components/Breadcrumb'
import ProductTile from '../components/ProductTile'
import PageFooter from '../components/PageFooter'
import { BLIND_PRODUCTS } from '../data/products'

export default function BlindSystemsPage() {
  return (
    <>
      <TopBar active="products" />
      <div className="page">
        <Breadcrumb trail={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Blind Systems" },
        ]} />
        <Hero
          kicker="Blind Systems"
          title="Roller blinds — printed and plain."
          lede="Two product families today, expanding as the range grows. Pick a family to drill into specs, fabric options and mount methods." />

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 12px", border: "1px dashed var(--stroke-2)",
          background: "var(--panel)", borderRadius: 3, marginBottom: 20,
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
          color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em"
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: "#C99A2E" }}></span>
          Template in review — layout pending refinement for blind products
        </div>

        <section>
          <h2 className="sec">§ 01 — Product families</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {BLIND_PRODUCTS.map(p => <ProductTile key={p.slug} p={p} />)}
          </div>
        </section>
      </div>
      <PageFooter />
    </>
  )
}
