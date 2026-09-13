import { EDUCATION } from '../data'

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="sec-in">
        <p className="s-eye">Education</p>
        <h2 className="s-title">ACADEMIC<br />RECORD</h2>
        <div className="s-rule" />
        <div className="edu-list">
          {EDUCATION.map((edu, i) => (
            <div className="edu-row" key={i}>
              <span className="edu-yr">{edu.year}</span>
              <div className="edu-info">
                <p className="edu-name">{edu.degree}</p>
                <p className="edu-inst">{edu.inst}</p>
              </div>
              <div className="edu-score">
                <span className="edu-score-n">{edu.score}</span>
                <span className="edu-score-l">{edu.scoreLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
