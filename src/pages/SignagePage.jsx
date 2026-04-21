import TopBar from '../components/TopBar'
import Hero from '../components/Hero'
import Breadcrumb from '../components/Breadcrumb'
import ProductTile from '../components/ProductTile'
import PageFooter from '../components/PageFooter'
import { SIGNAGE_PRODUCTS } from '../data/products'

export default function SignagePage() {
  return (
    <>
      <TopBar active="products" />
      <div className="page">
        <Breadcrumb trail={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Signage" },
        ]} />
        <Hero
          kicker="Signage"
          title="Letters, logos, panels, boxes, totems."
          lede="Eight product families covering the full range of commercial signage. Pick a family to drill into specs, finishes and installation methods." />

        <section>
          <h2 className="sec">§ 01 — Product families</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {SIGNAGE_PRODUCTS.map(p => <ProductTile key={p.slug} p={p} />)}
          </div>
        </section>
      </div>
      <PageFooter />
    </>
  )
}
