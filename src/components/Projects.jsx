import { useState } from 'react'
import { PROJECTS } from '../data'

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)
  const num = String(index + 1).padStart(2, '0')

  const toggle = () => setOpen(o => !o)
  const handleKey = e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle() }
  }

  return (
    <div
      className={`fp${open ? ' open' : ''}`}
      tabIndex={0}
      role="button"
      aria-label={project.name}
      onClick={toggle}
      onKeyDown={handleKey}
    >
      <div className="fp-in">
        <div className="fp-side fp-front">
          <span className="fp-num" aria-hidden="true">{num}</span>
          <span className="fp-hint">Hover / tap</span>
          <p className="fp-pname">{project.name}</p>
          <p className="fp-ptag">{project.tag}</p>
        </div>
        <div className="fp-side fp-back">
          <div>
            <p className="fp-bname">{project.backName}</p>
            <p className="fp-bdesc">{project.desc}</p>
          </div>
          <div className="fp-stack">
            {project.stack.map(s => <span key={s}>{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="sec-in">
        <p className="s-eye">Projects</p>
        <h2 className="s-title">THINGS I<br />SHIPPED</h2>
        <div className="s-rule" />
        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
