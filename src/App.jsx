import './index.css';
import Center from './Center/Center.jsx'
import AnimatedBackground from './Animated/AnimatedBackground.jsx';
import Categories from './Categories/Categories.jsx';
import Introduction from './Center/Card.jsx';
import ProjectCard from './Projects/ProjectCard.jsx';
import Project1 from './assets/APOD.png'
import Project2 from './assets/waterverse.png'
import Project3 from './assets/sonar.png'
import FadeInSection from './Components/FadeInSection.jsx';
import linkedinIcon from './assets/linkedin.svg';
import githubIcon from './assets/github.svg';
import cppIcon from './assets/cpp.svg';
import reactIcon from './assets/react.svg';
import htmlIcon from './assets/html.svg';
import cssIcon from './assets/css.svg';
import jsIcon from './assets/js.svg';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return(
    <>
      <Analytics />
      <Categories />

      {/* Home Section */}
      <section id="home">
        <AnimatedBackground>
          <FadeInSection>
            <Center />
          </FadeInSection>
        </AnimatedBackground>
      </section>

      {/* About Section */}
      <section id="about">
        <FadeInSection>
          <h2 className="sectionHeader">About</h2>
        </FadeInSection>
        <FadeInSection>
          <div className="aboutDescription">
            <p>
              Hi! I'm Kenneth, a passionate developer who loves building fun web projects on the side and learning more in-depth knowledge
              about software engineering in order to solve critical problems for the world. I am very interested and passionate about the growing field of
              defense technology software which further fuels my flame to learn more, problem solve, and collaborate with others.
            </p>
          </div>
        </FadeInSection>
        {/* Skills Section */}
        <FadeInSection>
          <h2 className="sectionHeader">Technical Skills</h2>
          <div className="aboutDescription">
            <div className="socialIcons">
              <a href="https://www.linkedin.com/in/kenneth-ly-cs" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="socialIcon" />
              </a>
              <a href="https://github.com/KenTree" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="socialIcon" />
              </a>
            </div>
            <div className="skillsIcons">
              <img src={cppIcon} alt="C++" className="skillIcon" title="C++" />
              <img src={reactIcon} alt="React" className="skillIcon" title="React" />
              <img src={htmlIcon} alt="HTML" className="skillIcon" title="HTML" />
              <img src={cssIcon} alt="CSS" className="skillIcon" title="CSS" />
              <img src={jsIcon} alt="JavaScript" className="skillIcon" title="JavaScript" />
              {/* Add more icons as needed */}
            </div>
          </div>
        </FadeInSection>
        <Introduction />
        {/* You can add more About content here */}
      </section>

      {/* Projects Section */}
      <section id="projects">
        <FadeInSection>
          <h2 className="sectionHeader">Projects</h2>
        </FadeInSection>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <ProjectCard
            image={Project1}
            title="APOD Project"
            description="This is a simple web application that integrates with NASA's Astronomy Picture of the Day (APOD) API to fetch and display stunning images or videos from space every day.
            It showcases the daily astronomy media along with its official NASA-provided description."
            contribution="Solo Project to put my HTML, CSS, and JavaScript skills to practice along with fetching an API and showcasing the information pulled."
            link="https://kentree.github.io/NASA-APOD/"
          />
          <ProjectCard
            image={Project2}
            title="Water-Verse"
            description="My first hackathon project with a group of 2 other spectacular and intelligent programmers. We had an amazing learning experience with all of us learning HTML, CSS, and JavaScript
            within the 24 hours we were given. This project was aimed to guide CSUF students to the nearest clean water stations available around them. Our devpost can be found above, along with a demo video."
            contribution="Focused almost solely on functionality with JavaScript. Implemented use of the Leaflet library along with managing permissions for location access for the user."
            link="https://devpost.com/software/college-campus-water-fountain-interactive-map"
          />
                    <ProjectCard
            image={Project3}
            title="Sonar Scanner"
            description="An Arduino-based sonar scanning system that combines an ultrasonic distance sensor with a micro servo motor to detect and visualize nearby objects. The project integrates sensor control, servo movement, and serial communication to measure distance in real-time while sweeping across a defined angle range. \
              Built and tested using Arduino IDE, the system demonstrates core embedded programming principles such as digital I/O handling, sensor timing, and hardware interfacing. Power management was refined using a dedicated power adapter and proper grounding for stable operation. 
              Progress and code are tracked through the project’s GitHub repository."
            link="https://github.com/KenTree/sonar-arduino"
          />
        </div>
      </section>
    </>
  );
}

export default App
