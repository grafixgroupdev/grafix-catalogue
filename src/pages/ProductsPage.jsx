import TopBar from '../components/TopBar'
import Hero from '../components/Hero'
import Grid from '../components/Grid'
import CategoryCard from '../components/CategoryCard'
import Breadcrumb from '../components/Breadcrumb'

export default function ProductsPage() {
  return (
    <>
      <TopBar active="products" />
      <div className="page">
        <Breadcrumb trail={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]} />
        <Hero
          kicker="Catalogue"
          title="All products."
          lede="Every family Grafix fabricates, grouped by system. Pick one to see specs and installation." />

        <section>
          <h2 className="sec">§ 01 — Signage Systems</h2>
          <Grid cols={3}>
            <CategoryCard title="Letters & Logos" sub="Flat cut, built-up, channel" href="/products/letters-logos" />
            <CategoryCard title="Flat Sign" sub="Wall-mounted panels" href="/products/flat-sign" />
            <CategoryCard title="Plane Frame Sign" sub="Frame-backed panels" href="/products/plane-frame" />
            <CategoryCard title="Box Signs" sub="Illuminated cabinets" href="/products/box-sign" />
            <CategoryCard title="Post Signs" sub="Panel on posts" href="/products/post-sign" />
            <CategoryCard title="Totem Signs" sub="Vertical monoliths" href="/products/totem" />
          </Grid>
        </section>

        <section>
          <h2 className="sec">§ 02 — Graphic Systems</h2>
          <Grid cols={2}>
            <CategoryCard title="Vinyl Wrap" sub="Printed vinyl on vehicles, walls, surfaces" href="/products/vinyl-wrap" />
            <CategoryCard title="Rigid Panels" sub="Printed graphics on ACM, acrylic, foam-core" href="/products/rigid-panels" />
            <CategoryCard title="Window Wrap" sub="Frosted, printed, one-way vision" href="/products/window-wrap" />
            <CategoryCard title="Style Guides & Digital Assets" sub="Brand & signage standards" href="/products/style-guides" />
          </Grid>
        </section>

        <section>
          <h2 className="sec">§ 03 — Blind Systems</h2>
          <Grid cols={3}>
            <CategoryCard title="Printed Roller Blinds" sub="Printed graphics on roller fabric" href="/products/printed-roller" />
            <CategoryCard title="Plain Roller Blinds" sub="Blockout, translucent, screen" href="/products/plain-roller" />
          </Grid>
        </section>
      </div>
    </>
  )
}
