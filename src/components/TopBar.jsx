import { Link } from 'react-router-dom'

export default function TopBar({ active }) {
  const items = [
    { label: "Products", href: "/products", key: "products" },
    { label: "Installation", href: "/installation", key: "installation" },
  ];

  return (
    <div className="topbar">
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="logo">GRAFIX / CATALOGUE</div>
        </Link>
        <div className="mono">internal tool</div>
      </div>
      <nav>
        <Link to="/" className={active === "home" ? "is-active" : ""}>Home</Link>
        {items.map(i => (
          <Link key={i.key} to={i.href} className={active === i.key ? "is-active" : ""}>{i.label}</Link>
        ))}
      </nav>
    </div>
  );
}
