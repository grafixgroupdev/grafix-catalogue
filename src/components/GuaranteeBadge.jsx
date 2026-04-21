export default function GuaranteeBadge() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: 14,
      border: "1px solid var(--stroke)",
      borderRadius: 2,
      maxWidth: 420,
      background: "var(--panel)"
    }}>
      <div style={{
        width: 56,
        height: 56,
        borderRadius: "50%",
        border: "1px dashed var(--stroke)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--muted)",
        fontSize: 10,
        fontFamily: "JetBrains Mono, monospace",
        textAlign: "center"
      }}>
        SEAL
      </div>
      <div>
        <div style={{ fontWeight: 600, fontSize: 14 }}>Lifetime Guarantee</div>
        <div className="mono-2" style={{ fontSize: 12, color: "var(--muted)" }}>Materials & workmanship</div>
      </div>
    </div>
  );
}
