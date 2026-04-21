import TopBar from '../components/TopBar'
import Hero from '../components/Hero'
import Breadcrumb from '../components/Breadcrumb'
import ProductTile from '../components/ProductTile'
import PageFooter from '../components/PageFooter'
import { GRAPHIC_PRODUCTS } from '../data/products'

export default function GraphicSystemsPage() {
  return (
    <>
      <TopBar active="products" />
      <div className="page">
        <Breadcrumb trail={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Graphic Systems" },
        ]} />
        <Hero
          kicker="Graphic Systems"
          title="Vinyl, panels, windows, standards."
          lede="Four product families covering applied graphics and brand deliverables. Pick a family to drill into specs, application methods and finish options." />

        <section>
          <h2 className="sec">§ 01 — Product families</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {GRAPHIC_PRODUCTS.map(p => <ProductTile key={p.slug} p={p} />)}
          </div>
        </section>
      </div>
      <PageFooter />
    </>
  )
}
