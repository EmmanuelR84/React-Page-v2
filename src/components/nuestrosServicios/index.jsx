import './ourServices.css';

function OurServices() {
  return <div className='oServ__container'>
    <div className='oServ__header'>
      <h1 className='oServ__header-title'><span className='dualColor'>Nuestros </span>Servicios</h1>
      <p className='oServ__header-p'>Inserte una linea significativa para evaluar el titulo.</p>
    </div>
    <div className='oServ__info'>
      <div className='oServ__info-container'>
        <img src='/img/slide2.jpg' alt='telefono mobil' className='oServ__info-img' />
        <h3 className='oServ__info-title'>Diseño Responsivo</h3>
        <p className='oServ__info-text'>Mas ande otro criollo pasa Martín Fierro ha de pasar, Nada la hace recular Ni las fantasmas lo espantan; Y dende que todos cantan Yo también quiero cantar.</p>
      </div>
      <div className='oServ__info-container'>
        <img src='/img/appsweb.jpg' alt='aplicaciones web' className='oServ__info-img' />
        <h3 className='oServ__info-title'>Aplicaciones Web</h3>
        <p className='oServ__info-text'>Mas ande otro criollo pasa Martín Fierro ha de pasar, Nada la hace recular Ni las fantasmas lo espantan; Y dende que todos cantan Yo también quiero cantar.</p>
      </div>
      <div className='oServ__info-container'>
        <img src='/img/e-commerce.jpg' alt='e-commerce' className='oServ__info-img' />
        <h3 className='oServ__info-title'>e-commerce</h3>
        <p className='oServ__info-text'>Mas ande otro criollo pasa Martín Fierro ha de pasar, Nada la hace recular Ni las fantasmas lo espantan; Y dende que todos cantan Yo también quiero cantar.</p>
      </div>
    </div>
  </div>
}

export default OurServices;