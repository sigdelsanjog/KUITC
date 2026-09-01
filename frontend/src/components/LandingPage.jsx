import { useState } from 'react'
import KULogo from '../assets/KU-Logo.png'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Units', href: '#units' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const highlightItems = [
  { title: 'University-wide', text: 'Data center & cloud infrastructure' },
  { title: 'Research Ready', text: 'Supercomputer facility for innovation' },
  { title: 'Secure Access', text: 'VPN and email systems for campus users' },
  { title: 'Connected', text: 'Robust campus network and digital support' },
];

const services = [
  {
    title: 'Computing & Data Services',
    text: 'High-performance computing and reliable data storage for academic and research needs.',
  },
  {
    title: 'Cloud & Hosting',
    text: 'Cloud storage, virtualization, and server management for departments and research labs.',
  },
  {
    title: 'Network & Security',
    text: 'Campus-wide network with robust security and data protection measures.',
  },
  {
    title: 'VPN & Email Systems',
    text: 'Secure remote access and institutional email platforms for staff and students.',
  },
];

const units = [
  {
    badge: 'HPC',
    badgeClass: '',
    title: 'High Performance Computing Unit',
    text:
      'Hosting KU’s research computation clusters with high storage and compute capacity, supporting advanced research through CERN-donated infrastructure.',
  },
  {
    badge: 'AIE',
    badgeClass: 'orange',
    title: 'Artificial Intelligence Excellence Unit',
    text:
      'Advancing AI literacy, policy research, and ethical AI applications across education, health, and agriculture.',
  },
  {
    badge: 'CIR',
    badgeClass: 'aqua',
    title: 'Crisis Informatics Research Unit',
    text:
      'Developing Nepal’s National Crisis Intelligence System for real-time emergency response and multi-sector coordination.',
  },
];

const team = [
  { initials: 'BB', name: 'Prof. Dr. Bivek Baral', role: 'Vice-Chancellor, Kathmandu University', tone: 'avatar-blue' },
  { initials: 'RS', name: 'Prof. Dr. Rajeev Shrestha', role: 'Registrar, Kathmandu University', tone: 'avatar-gold' },
//   { initials: 'SJ', name: 'Prof. Dr. Sudan Jha', role: 'Associate Director', tone: 'avatar-teal' },
  { initials: 'SS', name: 'Mr. Sanjog Sigdel', role: 'Coordinator, KUITC | Lecturer, DoCSE', tone: 'avatar-orange' },
];

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <div className="brand">
            <img src={KULogo} alt="Kathmandu University ITC logo" className="brand-mark" />
            <div>
              <span className="brand-name">KUITC</span>
              <small>Kathmandu University Information Technology Center</small>
            </div>
          </div>

          <nav className={`main-nav ${isMenuOpen ? 'mobile-open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={handleNavClick}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <a className="nav-cta" href="#contact">
            Get in Touch
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Welcome to Kathmandu University</p>
              <h1>Empowering Knowledge through Technology</h1>
              <p className="lead">
                At the heart of Kathmandu University’s digital transformation, the
                Information Technology Center (ITC) plans, develops, manages, and
                maintains the university’s ICT infrastructure to support research,
                learning, and secure communication.
              </p>
              <div className="hero-actions">
                <a className="primary-btn" href="#about">
                  Learn More
                </a>
                <a className="secondary-btn" href="#services">
                  Explore Services
                </a>
              </div>
              <ul className="hero-points">
                <li>University-wide data center</li>
                <li>Secure VPN &amp; email systems</li>
                <li>High-performance research support</li>
              </ul>
            </div>

            <div className="hero-panel" aria-label="ITC information panel">
              <div className="panel-card top-card">
                <span className="card-label">Research &amp; Infrastructure</span>
                <strong>HPC + Cloud + Secure Networks</strong>
              </div>
              <div className="panel-card middle-card">
                <span className="card-label">Mission</span>
                <strong>Transform Nepal’s ICT landscape through innovation</strong>
              </div>
              <div className="panel-card bottom-card">
                <span className="card-label">Vision</span>
                <strong>
                  Build a digitally advanced, secure and sustainable university ecosystem
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section className="highlights">
          <div className="container highlights-grid">
            {highlightItems.map((item) => (
              <div key={item.title} className="stat-box">
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section section-light">
          <div className="container split-layout">
            <div>
              <p className="section-tag">About Us</p>
              <h2>Building a resilient digital foundation for Kathmandu University</h2>
            </div>
            <div>
              <p>
                The Information Technology Center (ITC) of Kathmandu University,
                established in 2025, is the central body responsible for planning,
                developing, managing, and maintaining the University’s ICT
                infrastructure.
              </p>
              <p>
                Our team consists of skilled engineers, system administrators,
                academics, and researchers dedicated to ensuring uninterrupted
                connectivity, efficient data management, and secure communication
                across departments and research centers.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <p className="section-tag centered">Mission &amp; Vision</p>
            <div className="two-col-grid">
              <article className="info-card accent-card">
                <h3>Mission</h3>
                <p>
                  To transform Nepal’s Information and Communication Technology (ICT)
                  landscape with cutting-edge research and development solutions.
                </p>
              </article>
              <article className="info-card">
                <h3>Vision</h3>
                <p>
                  To build a digitally advanced, secure, and sustainable IT ecosystem
                  that empowers students, faculty, and researchers.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="services" className="section section-light">
          <div className="container">
            <p className="section-tag">Services</p>
            <h2 className="section-heading">
              Technology services for learning, research, and operations
            </h2>
            <div className="card-grid service-grid">
              {services.map((service) => (
                <article key={service.title} className="info-card service-card">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="units" className="section section-alt">
          <div className="container">
            <p className="section-tag">Our Specialized Units</p>
            <h2 className="section-heading">Dedicated research and innovation units at KU</h2>
            <div className="card-grid unit-grid">
              {units.map((unit) => (
                <article key={unit.title} className="feature-card">
                  <span className={`feature-badge ${unit.badgeClass}`}>{unit.badge}</span>
                  <h3>{unit.title}</h3>
                  <p>{unit.text}</p>
                  <a href="#contact">Read More</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="section section-light">
          <div className="container">
            <p className="section-tag">Our Team</p>
            <h2 className="section-heading">Leaders, advisors, and contributors</h2>
            <div className="team-grid">
              {team.map((member) => (
                <article key={member.name} className="team-card">
                  <div className={`avatar ${member.tone}`}>{member.initials}</div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <p className="section-tag">Contact Us</p>
              <h2>Get in touch with the ITC team</h2>
              <div className="contact-info">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:itc@ku.edu.np">itc@ku.edu.np</a>
                </p>
                <p>
                  <strong>Location:</strong> NTIC Building, Kathmandu University,
                  Dhulikhel Campus
                </p>
                <p>
                  For HPC access, research enquiries, and IT services, please reach out to the ITC team.
                </p>
              </div>
            </div>

            <div className="contact-card">
              <h3>Quick Contact</h3>
              <p>Need immediate assistance or have questions about our services?</p>
              <a className="primary-btn" href="mailto:itc@ku.edu.np">
                Email ITC Team
              </a>
              <small>Response time: Within 24-48 hours</small>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>
            © <span id="year">{new Date().getFullYear()}</span> Kathmandu University ITC — Empowering Knowledge through Technology
          </p>
          <div className="footer-links">
            {navItems.map((item) => (
              <a key={`${item.label}-footer`} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
