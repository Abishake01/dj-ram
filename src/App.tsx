import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Equipment from './components/Equipment';
import Gallery from './components/Gallery';
import MusicStyles from './components/MusicStyles';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Events />
      <Equipment />
      <Gallery />
      <MusicStyles />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
