import './presentation.css';

const Presentation = () => {

  const btnClick = ()=> {
    window.open('https://emmanuelr84.github.io/cv-emmanuelRamello/');
  }

  return <div className='pres__container'>
    <div className='info__container'>
      <h1 className='info__title'>INITIUM</h1>
      <p className='info__text'>Building your digital presence with creativity and functionality.</p>
      <button className='btn btn-style' onClick={btnClick}>Curriculum</button>
    </div>
  </div>
}

export default Presentation;