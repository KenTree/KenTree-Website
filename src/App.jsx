import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import FadeInSection from './Components/FadeInSection.jsx';
import profile from './assets/hackathon-profile.jpg';
import apod from './assets/APOD.png';
import waterverse from './assets/waterverse.png';
import sonar from './assets/sonar.png';
import clash from './assets/clash-war-tracker.png';
import github from './assets/github.svg';
import './index.css';

const projects = [
  {
    image: apod, title: 'APOD — Astronomy Picture of the Day',
    description: "I built this web application that integrates with NASA’s Astronomy Picture of the Day (APOD) API to fetch and display stunning images or videos from space every day. It showcases the daily astronomy media along with its official NASA-provided description, formatted for a better viewing experience.",
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    links: [{ label: 'Code', href: 'https://github.com/KenTree/NASA-APOD', icon: true }, { label: 'Live Demo', href: 'https://kentree.github.io/NASA-APOD/' }],
  },
  {
    image: waterverse, title: 'Water-Verse',
    description: 'My first hackathon project, built with two other programmers in just 24 hours. We learned HTML, CSS, and JavaScript together while creating an interactive map to guide CSUF students to the nearest clean water stations. I focused on JavaScript functionality, Leaflet maps, and location permissions.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Leaflet.js'],
    links: [{ label: 'DevPost', href: 'https://devpost.com/software/college-campus-water-fountain-interactive-map' }],
  },
  {
    image: sonar, title: 'Sonar Scanner',
    description: 'An Arduino-based scanning system that uses an ultrasonic sensor and a servo motor to detect nearby objects. Real-time distance measurements and angular sweeps bring the surrounding environment to life on a radar-style display, combining embedded programming, hardware interfacing, and serial communication.',
    tags: ['C++', 'Arduino UNO', 'Embedded Systems'],
    links: [{ label: 'Code', href: 'https://github.com/KenTree/sonar-arduino', icon: true }],
  },
  {
    image: clash, title: 'Clash of Clans War Tracker',
    description: 'A Python Discord bot for tracking Clash of Clans wars. The project brings together the Clash of Clans REST API and Discord, using object-oriented programming and background task scheduling to keep clan information connected to the community.',
    tags: ['Python', 'discord.py', 'REST API'],
    links: [{ label: 'Code', href: 'https://github.com/KenTree/clash-war-tracker', icon: true }],
  },
];
const navigation = [{ id: 'home', label: 'Home' }, { id: 'projects', label: 'Projects' }, { id: 'resume', label: 'Resume' }, { id: 'contact', label: 'Contact Me' }];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  useEffect(() => {
    const updateNavigation = () => {
      setScrolled(window.scrollY > 24);
      const current = navigation.reduce((selected, item) => {
        const section = document.getElementById(item.id);
        return section && section.getBoundingClientRect().top <= window.innerHeight * 0.35 ? item.id : selected;
      }, 'home');
      setActive(current);
    };
    updateNavigation();
    window.addEventListener('scroll', updateNavigation, { passive: true });
    window.addEventListener('resize', updateNavigation);
    return () => {
      window.removeEventListener('scroll', updateNavigation);
      window.removeEventListener('resize', updateNavigation);
    };
  }, []);

  return (
    <>
      <Analytics />
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <nav className="navigation" aria-label="Main navigation">
          <a className="wordmark" href="#home" aria-label="Kenneth Ly home">KL</a>
          <div className="nav-links">
            {navigation.map(({ id, label }) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'location' : undefined}>{label}</a>)}
          </div>
        </nav>
      </header>
      <main id="main">
        <section id="home" className="hero container" aria-labelledby="hero-title">
          <FadeInSection className="hero-layout">
            <div className="portrait"><img src={profile} alt="Kenneth Ly collaborating at a hackathon" fetchPriority="high" /></div>
            <div className="hero-copy">
              <span className="eyebrow">Software Engineer</span>
              <h1 id="hero-title">Kenneth Ly</h1>
              <p>I’m Kenneth, a passionate developer with a strong interest in software and hardware engineering. I am fascinated and inspired by the rapidly advancing tech industry, which motivates me to push the limits of my technical abilities, tackle challenging problems, and collaborate with others to build impactful solutions.</p>
              <div className="button-row"><a className="button primary" href="#projects">View Projects</a><a className="button" href="#contact">Contact Me</a></div>
            </div>
          </FadeInSection>
        </section>
        <section id="projects" className="projects container" aria-labelledby="projects-title">
          <FadeInSection><h2 id="projects-title">Projects</h2></FadeInSection>
          <div className="project-grid">
            {projects.map(project => <FadeInSection key={project.title} className="project-reveal">
              <article className="project-card">
                <a className="project-image-link" href={project.links[0].href} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${project.title}`}><img src={project.image} alt={`${project.title} preview`} loading="lazy" /></a>
                <div className="project-content">
                  <h3>{project.title}</h3><p>{project.description}</p>
                  <ul className="tags" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                  <div className="project-links">{project.links.map(link => <a key={link.label} className="project-button" href={link.href} target="_blank" rel="noopener noreferrer">{link.icon && <img src={github} alt="" />} {link.label}<span aria-hidden="true">↗</span></a>)}</div>
                </div>
              </article>
            </FadeInSection>)}
          </div>
        </section>
        <section id="resume" className="resume container" aria-labelledby="resume-title">
          <FadeInSection>
            <div className="section-heading"><h2 id="resume-title">Resume</h2><a className="button" href={resumeUrl} download="Kenneth-Ly-Resume.pdf">Download Resume<span aria-hidden="true">↓</span></a></div>
            <div className="resume-viewer"><iframe src={resumeUrl} title="Kenneth Ly’s resume" loading="lazy" /><a className="resume-open" href={resumeUrl} target="_blank" rel="noopener noreferrer" aria-label="Open resume in a new tab">↗</a></div>
            <p className="resume-fallback">Having trouble viewing? <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Open the resume in a new tab ↗</a></p>
          </FadeInSection>
        </section>
        <section id="contact" className="contact" aria-labelledby="contact-title">
          <FadeInSection className="contact-inner"><h2 id="contact-title">Explore my work or get in touch.</h2><p>I’m open to new opportunities and collaborations.</p><div className="button-row"><a className="button primary" href="mailto:kennethly909808@gmail.com">Send an Email</a><a className="button" href="https://github.com/KenTree" target="_blank" rel="noopener noreferrer">GitHub</a><a className="button" href="https://www.linkedin.com/in/kenneth-ly-cs/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div></FadeInSection>
        </section>
      </main>
      <footer className="footer"><span>© {new Date().getFullYear()} Kenneth Ly</span><a href="#home">Back to top <span aria-hidden="true">↑</span></a></footer>
    </>
  );
}
export default App;
