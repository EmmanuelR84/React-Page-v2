import Banner from '../banner';
import './aboutUs.css';

const AboutUs = ()=> {
  return <div className='about__container'>

  {/* PRIMER MODULO */}
    < Banner title={'About Us'} />

  {/* SEGUNDO MODULO */}
    <div className='container__info'>

        <div className='container-img'>
          <img src='/img/img1.jpg' alt='img' className='img1' />
        </div>

        <div className='info-about'>
          <div className='info-title'>
            <h2 className='h2'><span className='dualColor'>Who</span> we are</h2>
            <p>I'm creative web front-end developer based in Córdoba, Argentina.</p>
          </div>
          <div className='info-plus'>
            <p>With 2 year of experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
          </div>
          <div className='info-plus'>
            <p>I enjoy every step while working.</p>
          </div>
          <div className='info-plus'>
            <p>If you need to take your project to the infinite world of cyber space, you are in the right place, contact me and I will take your project to every electronic device connected to the world network.</p>
          </div>
        </div>
        
      </div>

  {/* TERCER MODULO */}
      <div className='container__3'>

        <div className='c3-info'>
          <i aria-hidden="true" class="fas fa-star c3-icon"></i>
          <h3><span className='dualColor'>Mision</span></h3>
          <p>Mas ande otro criollo pasa Martín Fierro ha de pasar, Nada la hace recular Ni las fantasmas lo espantan; Y dende que todos cantan Yo también quiero cantar.</p>
        </div>

        <div className='c3-info'>
          <i aria-hidden="true" class="fas fa-lightbulb c3-icon"></i>
          <h3><span className='dualColor'>Vision</span></h3>
          <p>Mas ande otro criollo pasa Martín Fierro ha de pasar, Nada la hace recular Ni las fantasmas lo espantan; Y dende que todos cantan Yo también quiero cantar.</p>
        </div>

        <div className='c3-info'>
          <i aria-hidden="true" class="fas fa-check c3-icon"></i>
          <h3><span className='dualColor'>Objetivo</span></h3>
          <p>Mas ande otro criollo pasa Martín Fierro ha de pasar, Nada la hace recular Ni las fantasmas lo espantan; Y dende que todos cantan Yo también quiero cantar.</p>
        </div>

      </div>

  </div>
}

export default AboutUs;