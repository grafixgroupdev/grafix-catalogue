import { useParams } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Hero from '../components/Hero'
import Breadcrumb from '../components/Breadcrumb'
import Ph from '../components/Ph'

const productNames = {
  'channel': 'Channel Letters',
  'flat-cut': 'Flat Cut Letters',
  'built-up': 'Built-Up Letters',
  'flat-sign': 'Flat Sign',
  'box-sign': 'Box Signs',
  'totem': 'Totem Signs',
  'post-sign': 'Post Signs',
  'plane-frame': 'Plane Frame Sign',
  'letters-logos': 'Letters & Logos',
  'vinyl-wrap': 'Vinyl Wrap',
  'rigid-panels': 'Rigid Panels',
  'window-wrap': 'Window Wrap',
  'printed-roller': 'Printed Roller Blinds',
  'plain-roller': 'Plain Roller Blinds',
  'style-guides': 'Style Guides',
  'signage': 'Signage Systems',
  'graphic-systems': 'Graphic Systems',
  'blind-systems': 'Blind Systems',
}

export default function ProductDetailPage() {
  const { slug } = useParams()
  const name = productNames[slug] || slug

  return (
    <>
      <TopBar active="products" />
      <div className="page">
        <Breadcrumb trail={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: name },
        ]} />
        <Hero
          kicker="Product"
          title={name}
          lede="Detailed specifications, finishes, and installation methods for this product family." />

        <section>
          <h2 className="sec">§ 01 — Gallery</h2>
          <Ph label={name} h={420} style={{ marginBottom: 12 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 10 }}>
            {["01","02","03","04","+5"].map((l,i)=> <Ph key={i} label={l} h={84} />)}
          </div>
        </section>

        <section>
          <h2 className="sec">§ 02 — Specifications</h2>
          <div style={{ background: 'var(--panel)', border: '1px solid var(--stroke)', borderRadius: 3, padding: 24 }}>
            <p style={{ color: 'var(--ink-2)' }}>Detailed specs coming soon...</p>
          </div>
        </section>

        <section>
          <h2 className="sec">§ 03 — Finishes & Materials</h2>
          <div style={{ background: 'var(--panel)', border: '1px solid var(--stroke)', borderRadius: 3, padding: 24 }}>
            <p style={{ color: 'var(--ink-2)' }}>Available finishes and material options coming soon...</p>
          </div>
        </section>

        <section>
          <h2 className="sec">§ 04 — Installation</h2>
          <div style={{ background: 'var(--panel)', border: '1px solid var(--stroke)', borderRadius: 3, padding: 24 }}>
            <p style={{ color: 'var(--ink-2)' }}>Installation guide coming soon...</p>
          </div>
        </section>
      </div>
    </>
  )
}
