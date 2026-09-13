import { LAB_EXP, FIELD_EXP } from '../data'

function TimelineRow({ date, role, org, items }) {
  return (
    <div className="tl-row">
      <p className="tl-date">{date}</p>
      <p className="tl-role">{role}</p>
      <p className="tl-org">{org}</p>
      <ul className="tl-list">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="sec-in">
        <p className="s-eye">Experience</p>
        <h2 className="s-title">IN THE LAB<br />&amp; ON THE FIELD</h2>
        <div className="s-rule" />
        <div className="tracks">
          <div>
            <div className="track-hd">
              <div className="track-icon lab">⚗️</div>
              <span className="track-name lab">IN THE LAB</span>
            </div>
            <div className="tl lab">
              {LAB_EXP.map((exp, i) => <TimelineRow key={i} {...exp} />)}
            </div>
          </div>
          <div>
            <div className="track-hd">
              <div className="track-icon field">🏃</div>
              <span className="track-name field">ON THE FIELD</span>
            </div>
            <div className="tl field">
              {FIELD_EXP.map((exp, i) => <TimelineRow key={i} {...exp} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
