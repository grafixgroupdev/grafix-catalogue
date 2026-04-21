import TopBar from '../components/TopBar'
import Hero from '../components/Hero'
import Breadcrumb from '../components/Breadcrumb'

export default function InstallationPage() {
  return (
    <>
      <TopBar active="installation" />
      <div className="page">
        <Breadcrumb trail={[
          { label: "Home", href: "/" },
          { label: "Installation" },
        ]} />
        <Hero
          kicker="Catalogue"
          title="Installation methods."
          lede="Detailed guides for specifying and installing all Grafix signage systems." />

        <section>
          <h2 className="sec">§ 01 — Mounting methods</h2>
          <p style={{ color: 'var(--ink-2)', marginBottom: '28px' }}>
            Choose the right installation method for your substrate and design.
          </p>
        </section>

        <section>
          <h2 className="sec">§ 02 — Surface preparation</h2>
          <p style={{ color: 'var(--ink-2)', marginBottom: '28px' }}>
            Proper surface prep ensures lasting results and customer satisfaction.
          </p>
        </section>

        <section>
          <h2 className="sec">§ 03 — Tools & materials</h2>
          <p style={{ color: 'var(--ink-2)', marginBottom: '28px' }}>
            Standard tools and hardware used across all Grafix installations.
          </p>
        </section>
      </div>
    </>
  )
}
