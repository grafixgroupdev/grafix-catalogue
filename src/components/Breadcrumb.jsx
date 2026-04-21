import { Link } from 'react-router-dom'

export default function Breadcrumb({ trail }) {
  return (
    <div className="breadcrumb">
      {trail.map((t, i) => {
        const isLast = i === trail.length - 1;
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {isLast || !t.href
              ? <span className={isLast ? "cur" : ""}>{t.label}</span>
              : <Link to={t.href}>{t.label}</Link>}
            {!isLast && <span className="sep">›</span>}
          </div>
        );
      })}
    </div>
  );
}
