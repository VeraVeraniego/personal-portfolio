import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ProjectBox from './components/ProjectBox';

import ContactLinks from './components/ContactLinks';

function App() {
  return (
    <div className="App">
      <NavBar />

      <div id="container">

        <section id="welcome-section">
          <h1>Hello I am VeraVeraniego</h1>
          <p id="presentation">A frontend web developer, aspiring fullstack and web3 dev.</p>
        </section>

        <section id="projects">
          <h2 id="h2-projects">These are some of my projects</h2>
          <div className="project-grid">
            <ProjectBox
            projurl="https://codepen.io/veraveraniego/full/ZEvXJmm"
            imgurl="https://shots.codepen.io/veraveraniego/pen/ZEvXJmm-1280.webp?version=1649019770"
            name="Landing Page"  />
            <ProjectBox
            projurl="https://codepen.io/veraveraniego/full/XWVgqKG"
            imgurl="https://shots.codepen.io/veraveraniego/pen/XWVgqKG-1280.jpg?version=1648612954"
            name="Tribute Page"  />
            <ProjectBox
            projurl="https://codepen.io/veraveraniego/full/JjMOdRo"
            imgurl="https://shots.codepen.io/veraveraniego/pen/JjMOdRo-1280.jpg?version=1649020411"
            name="Technical Documentation"  />
            <ProjectBox
            projurl="https://codepen.io/veraveraniego/full/wvpqxdB"
            imgurl="https://shots.codepen.io/veraveraniego/pen/wvpqxdB-1280.jpg?version=1649020478"
            name="Survey Form"  />
          </div>
        </section>


        <section id="contact">
          <h2>Let's work together</h2>
          <p>How do you like your coffee?</p>
          <ContactLinks/>
        </section>


        <footer>
          <span>Veraniego Studios</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
