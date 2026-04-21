export default function Breadcrumb({ trail }) {
  return (
    <div className="breadcrumb">
      {trail.map((t, i) => {
        const isLast = i === trail.length - 1;
        return (
          <div key={i}>
            {isLast || !t.href
              ? <span className={isLast ? "cur" : ""}>{t.label}</span>
              : <a href={t.href}>{t.label}</a>}
            {!isLast && <span className="sep">›</span>}
          </div>
        );
      })}
    </div>
  );
}
