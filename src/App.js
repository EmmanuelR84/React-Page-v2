import { useState } from 'react';
import './App.css';
import './components/header/header.css';
import Header from './components/header/header.jsx';
import Main from './components/mainContainer';
import AboutUs from './components/aboutUs';
import Proyects from './components/proyects';
import Contact from './components/contact';
import Footer from './components/footer/footer';
import BtnScrollUp from './components/scrollUp/index.jsx';


function App() {

  const [homeClick, updateHome] = useState(true);
  const [aboutClick, updateAbout] = useState(false);
  const [proyectsClick, updateProyects] = useState(false);
  const [contactClick, updateContact] = useState(false);

  const [showBtnScrollUp, setBtnScrollUp] = useState(true);


  const showHome = ()=> {
    updateHome(true);
    updateAbout(false);
    updateProyects(false);
    updateContact(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const showAbout = ()=> {
    updateAbout(true);
    updateHome(false);
    updateProyects(false);
    updateContact(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const showProyects = ()=> {
    updateHome(false);
    updateAbout(false);
    updateProyects(true);
    updateContact(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const showContact = ()=> {
    updateHome(false);
    updateAbout(false);
    updateProyects(false);
    updateContact(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  //mostrar o no el btn de scrollUp
  window.onscroll = function() {
    let y = window.scrollY;
    if (y < 300) {
      setBtnScrollUp(false);
    } else {
      setBtnScrollUp(true);
    }
  };

  // subir el scroll al hacer click en btn scroll
  const scrollUp = ()=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
      { showBtnScrollUp && < BtnScrollUp scrollUp={scrollUp} /> }
      < Footer showHome={showHome} showAbout={showAbout} showProyects={showProyects} showContact={showContact}/>
    </div>
  );
}

export default App;
