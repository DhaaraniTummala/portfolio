import { useEffect, useRef, useState } from 'react'

function CountStat({ target, label }) {
  const elRef = useRef(null)
  const [value, setValue] = useState(0)
  const observed = useRef(false)

  useEffect(() => {
    const el = elRef.current
    if (!el) return
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !observed.current) {
        observed.current = true
        const t0 = performance.now()
        const ms = 1400
        const tick = now => {
          const p = Math.min((now - t0) / ms, 1)
          setValue(Math.round(target * (1 - Math.pow(1 - p, 3))))
          if (p < 1) requestAnimationFrame(tick)
          else setValue(target)
        }
        requestAnimationFrame(tick)
        io.disconnect()
      }
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [target])

  return (
    <div className="stat" ref={elRef}>
      <span className="stat-n">{value}</span>
      <span className="stat-l">{label}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <div className="hero" id="top">
      <div className="hero-inner">
        <p className="hero-eye">AI Engineer · Full-Stack · End-to-End Builder</p>
        <h1 className="hero-name">
          <span className="n1">DHAARANI</span>
          <span className="n2">TUMMALA</span>
        </h1>
        <div className="hero-bar" />
        <p className="hero-sub">AI Engineer at PlantiqX</p>
        <div className="stats">
          <div className="stat">
            <span className="stat-n">30<span className="plus">+</span></span>
            <span className="stat-l">Real-Time Projects</span>
          </div>
          <CountStat target={25} label="Interns Led" />
          <div className="stat">
            <span className="stat-n"><sup>4×</sup>CHAMP</span>
            <span className="stat-l">Inter-College Kabaddi</span>
          </div>
        </div>
      </div>
    </div>
  )
}
