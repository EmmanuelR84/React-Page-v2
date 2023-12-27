import './presentation.css';

const Presentation = () => {

  const btnClick = ()=> {
    window.open('https://emmanuelr84.github.io/cv-emmanuelRamello/');
  }

  return <div className='pres__container'>
    <div className='info__container'>
      <h1 className='info__title'>INITIUM</h1>
      <p className='info__text'>Mas ande otro criollo pasa Martín Fierro ha de pasar, Nada la hace recular Ni las fantasmas lo espantan; Y dende que todos cantan Yo también quiero cantar.</p>
      <button className='btn btn-style' onClick={btnClick}>Curriculum</button>
    </div>
  </div>
}

export default Presentation;