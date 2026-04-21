import TopBar from '../components/TopBar'
import Hero from '../components/Hero'
import Breadcrumb from '../components/Breadcrumb'
import Grid from '../components/Grid'
import CategoryCard from '../components/CategoryCard'
import PageFooter from '../components/PageFooter'

export default function LettersLogosPage() {
  const items = [
    { t: "Fabricated Metal", s: 'Hollow SS/AL · to 100"+', h: "/products/channel" },
    { t: "Cast Metal", s: "Bronze · aluminium", h: "/products" },
    { t: "Flat Cut Metal", s: "SS · brass · copper", h: "/products/flat-cut" },
    { t: "Flat Cut Acrylic", s: "Solid colour · mirror", h: "/products/flat-cut" },
    { t: "Formed Plastic", s: "Thermoformed", h: "/products" },
    { t: "Illuminated Halo", s: "LED back-lit", h: "/products/channel" },
  ];

  return (
    <>
      <TopBar active="products" />
      <div className="page">
        <Breadcrumb trail={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Signage", href: "/products/signage" },
          { label: "Letters & Logos" },
        ]} />
        <Hero
          kicker="Letters & Logos"
          title="Six fabrication families."
          lede="From hollow fabricated metal to thermoformed plastic — pick the family to see specs, finishes, and installation methods." />

        <section>
          <Grid cols={3}>
            {items.map((it, i) => (
              <CategoryCard key={i} title={it.t} sub={it.s} href={it.h} />
            ))}
          </Grid>
        </section>
      </div>
      <PageFooter />
    </>
  )
}
