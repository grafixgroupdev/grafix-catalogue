import TopBar from '../components/TopBar'
import Hero from '../components/Hero'
import Breadcrumb from '../components/Breadcrumb'
import InstallTable from '../components/InstallTable'
import PageFooter from '../components/PageFooter'
import { installMethods } from '../data/installMethods'

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
          kicker="Installation methods"
          title="Eight standard mounts."
          lede="Reference for sales — every mounting method Grafix uses, side by side. Method details (hardware, spacers, template supply) are confirmed at quote." />

        <section>
          <InstallTable rows={installMethods} />
          <div style={{ display: "flex", gap: 24, marginTop: 28, padding: "20px 24px", border: "1px solid var(--stroke-2)", background: "var(--panel)", borderRadius: 3, alignItems: "center" }}>
            <div style={{ flex: 1 }}>
              <div className="mono" style={{ color: "var(--accent)" }}>Note</div>
              <div style={{ fontSize: 14, color: "var(--ink-2)", marginTop: 4 }}>
                Method selection is driven by substrate, letter weight, and whether fixings should be visible.
              </div>
            </div>
            <a className="btn">Full installation guide (PDF)</a>
          </div>
        </section>
      </div>
      <PageFooter />
    </>
  )
}
