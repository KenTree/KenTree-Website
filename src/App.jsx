import './index.css';
import Center from './Center/Center.jsx'
import AnimatedBackground from './Animated/AnimatedBackground.jsx';
import Categories from './Categories/Categories.jsx';
import Introduction from './Center/Card.jsx';
import ProjectCard from './Projects/ProjectCard.jsx';
import Project1 from './assets/APOD.png'
import FadeInSection from './Components/FadeInSection.jsx';

function App() {
  return(
    <>
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
            link="https://kentree.github.io/NASA-APOD/"
          />
          {/* Add more <ProjectCard />s as needed */}
        </div>
      </section>
    </>
  );
}

export default App
