import { NAV_LINKS } from '../data'

export default function Nav({ scrolled }) {
  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#top" className="nav-mark"><em>DHAARANI</em> TUMMALA</a>
      <ul className="nav-ul">
        {NAV_LINKS.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
