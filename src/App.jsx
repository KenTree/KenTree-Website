import Center from './Center/Center.jsx'
import AnimatedBackground from './Animated/AnimatedBackground.jsx';
import Categories from './Categories/Categories.jsx';
import Introduction from './Center/Card.jsx';

function App() {

  return(
    <>
      <Categories />

      {/* Home Section */}
      <section id="home">
        <AnimatedBackground>
          <Center />
        </AnimatedBackground>
      </section>

      {/* About Section */}
      <section id="about">
        <Introduction />
        {/* You can add more About content here */}
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        {/* Add your projects components or cards here */}
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        {/* Add contact form or info here */}
      </section>
    </>
  );

}

export default App
