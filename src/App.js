import './App.css';
import { Nav } from './components/Nav';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Resume } from './components/Resume';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='bg-black'>
      <Nav/>
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
