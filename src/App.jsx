import Center from './Center/Center.jsx'
import AnimatedBackground from './Animated/AnimatedBackground.jsx';
import Categories from './Categories/Categories.jsx';
import Introduction from './Center/Card.jsx';

function App() {

  return(
    <>

      <Categories/>
      <AnimatedBackground>      
        <Center/>
      </AnimatedBackground>
    </>
  );

}

export default App
