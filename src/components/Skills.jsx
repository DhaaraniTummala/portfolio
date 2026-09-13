import { SKILL_GROUPS, CERTS } from '../data'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="sec-in">
        <p className="s-eye">Skills &amp; Certifications</p>
        <h2 className="s-title">THE TOOLKIT</h2>
        <div className="s-rule" />
        <div className="sc-grid">
          <div>
            {SKILL_GROUPS.map(grp => (
              <div className="skill-grp" key={grp.label}>
                <p className="skill-grp-lbl">{grp.label}</p>
                <div className="skill-wrap">
                  {grp.skills.map(s => (
                    <span className="stag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="s-eye" style={{ marginBottom: '16px' }}>Certifications</p>
            <div className="cert-col">
              {CERTS.map(c => (
                <div className="cert-item" key={c.name}>
                  <p className="cert-nm">{c.name}</p>
                  <p className="cert-is">{c.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
