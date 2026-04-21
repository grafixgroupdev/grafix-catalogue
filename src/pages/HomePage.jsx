import TopBar from '../components/TopBar'
import Hero from '../components/Hero'
import Grid from '../components/Grid'
import CategoryCard from '../components/CategoryCard'
import PageFooter from '../components/PageFooter'

export default function HomePage() {
  return (
    <>
      <TopBar active="home" />
      <div className="page">
        <Hero
          kicker="Grafix Group · internal catalogue"
          title="Everything we make, in one place."
          lede="Knowledge base for sales. Browse products, compare specs, and pull installation methods straight into a quote configurator." />

        <section>
          <h2 className="sec" style={{ marginTop: 8 }}>§ 01 — Browse by category</h2>
          <Grid cols={3}>
            <CategoryCard title="Signage Systems" sub="Letters, logos, panels, boxes, totems" href="/products/signage" h={240} />
            <CategoryCard title="Graphic Systems" sub="Vinyl, panels, window wraps, standards" href="/products/graphic-systems" h={240} />
            <CategoryCard title="Blind Systems" sub="Roller, roman, venetian, shades" href="/products/blind-systems" h={240} />
          </Grid>
        </section>

        <section>
          <h2 className="sec">§ 02 — Featured products</h2>
          <Grid cols={3}>
            <CategoryCard title="Channel" sub="Signage · Letters & Logos" href="/products/channel" />
            <CategoryCard title="Flat Cut" sub="Signage · Letters & Logos" href="/products/flat-cut" />
            <CategoryCard title="Built-Up" sub="Signage · Letters & Logos" href="/products/built-up" />
            <CategoryCard title="Flat Sign" sub="Signage" href="/products/flat-sign" />
            <CategoryCard title="Box Signs" sub="Signage" href="/products/box-sign" />
            <CategoryCard title="Totem Signs" sub="Signage" href="/products/totem" />
          </Grid>
        </section>

        <section>
          <h2 className="sec">§ 03 — Resources</h2>
          <Grid cols={3}>
            <CategoryCard title="Installation Methods" sub="How to spec and install" href="/installation" />
            <CategoryCard title="Finishes & Materials" sub="Specs for every surface" href="/products" />
            <CategoryCard title="Style Guide" sub="Brand standards & rules" href="/products/style-guides" />
          </Grid>
        </section>
      </div>
      <PageFooter />
    </>
  )
}
