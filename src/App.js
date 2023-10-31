import { useState } from 'react';
import './App.css';
import './components/header/header.css';
import Header from './components/header/header.jsx';
import Main from './components/mainContainer';
import AboutUs from './components/aboutUs';
import Proyects from './components/proyects';
import Contact from './components/contact';
import Footer from './components/footer/footer';

function App() {

  const [homeClick, updateHome] = useState(true);
  const [aboutClick, updateAbout] = useState(false);
  const [proyectsClick, updateProyects] = useState(false);
  const [contactClick, updateContact] = useState(false);


  const showHome = ()=> {
    console.log('mostrar/ocultar home');
    updateHome(true);
    updateAbout(false);
    updateProyects(false);
    updateContact(false);
  }
  const showAbout = ()=> {
    console.log('mostrar/ocultar about');
    updateAbout(true);
    updateHome(false);
    updateProyects(false);
    updateContact(false);
  }
  const showProyects = ()=> {
    console.log('mostrar/ocultar proyects');
    updateHome(false);
    updateAbout(false);
    updateProyects(true);
    updateContact(false);
  }
  const showContact = ()=> {
    console.log('mostrar/ocultar contact');
    updateHome(false);
    updateAbout(false);
    updateProyects(false);
    updateContact(true);
  }

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // o mas abreviado --> condicion && seMuestra

  return (
    <div className="App">
      < Header showHome={showHome} showAbout={showAbout} showProyects={showProyects} showContact={showContact}/>
      { homeClick && < Main /> }
      { aboutClick === true ? < AboutUs /> : <></> }
      { proyectsClick && < Proyects /> }
      { contactClick && < Contact /> }
      < Footer />
    </div>
  );
}

export default App;
