import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Project from './Component/Project';

function App() {
  return (
    <div className="App">
     <Header/>
     <About/>
     <Project/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
