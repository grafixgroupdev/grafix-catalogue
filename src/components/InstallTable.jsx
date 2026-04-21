export default function InstallTable({ rows }) {
  return (
    <div style={{ overflow: "auto", border: "1px solid var(--stroke)", borderRadius: 3, background: "var(--panel)" }}>
      <table className="specs" style={{ minWidth: 920 }}>
        <thead>
          <tr>
            <th style={{ width: "18%" }}>Method</th>
            <th style={{ width: "14%" }}>Surface</th>
            <th style={{ width: "14%" }}>Difficulty</th>
            <th style={{ width: "14%" }}>Spacer</th>
            <th style={{ width: "14%" }}>Visible fixings</th>
            <th>Best for</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td style={{ fontWeight: 600 }}>{r.name}</td>
              <td>{r.surface}</td>
              <td>{r.difficulty}</td>
              <td>{r.spacer}</td>
              <td>{r.visible}</td>
              <td style={{ color: "var(--ink-2)" }}>{r.best}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
