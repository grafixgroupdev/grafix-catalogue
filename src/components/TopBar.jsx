export default function TopBar({ active }) {
  const items = [
    { label: "Products", href: "/products", key: "products" },
    { label: "Installation", href: "/installation", key: "installation" },
  ];

  return (
    <div className="topbar">
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="logo">GRAFIX / CATALOGUE</div>
        </a>
        <div className="mono">internal tool</div>
      </div>
      <nav>
        <a href="/" className={active === "home" ? "is-active" : ""}>Home</a>
        {items.map(i => (
          <a key={i.key} href={i.href} className={active === i.key ? "is-active" : ""}>{i.label}</a>
        ))}
      </nav>
    </div>
  );
}
