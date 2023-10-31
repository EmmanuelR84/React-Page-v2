import { useState } from 'react';
import './footer.css';

const Footer = ()=> {

  const [showAbout, updateShow] = useState(false);

  const handleAbout = ()=> {
    console.log('click', !showAbout);
    updateShow(!showAbout);
  }

  return <div className='footer__container'>

    <div className='footer__links'>
  {/** info */}
      <div className='links__container'>
        <img src='/img/Logo-BW.png' alt='logo' className='logo'/>
        <p className='logo-text'>Inserte una linea significativa para evaluar el titulo.</p>
      </div>
  {/** menu */}
      <div className='links__container'>
        <h3 className='links-title'><span className='dualColor'>Links</span></h3>
        <ul className='ul links-ul'>
          <li className='li links-li'><i className="fa fa-link" aria-hidden="true"></i> Home</li>
          <li className='li links-li' onClick={handleAbout}><i class="fa fa-link" aria-hidden="true"></i> About Us</li>
          <li className='li links-li'><i className="fa fa-link" aria-hidden="true"></i> Proyects</li>
          <li className='li links-li'><i className="fa fa-link" aria-hidden="true"></i> Contact</li>
        </ul>
      </div>
  {/** contact */}
      <div className='links__container'>
      <h3 className='links-title'><span className='dualColor'>Contacto</span></h3>
        <ul className='ul'>
          <li className='li links-li'><i className="fa fa-location-arrow" aria-hidden="true"></i> Villa María, Córdoba,Argentina</li>
          <li className='li links-li'><i className="fa fa-envelope" aria-hidden="true"></i> e-mail: eramello.web@gmail.com</li>
          <li className='li links-li'><i className="fa fa-mobile" aria-hidden="true"></i> Phone: +549 353 6565823</li>
        </ul>
      </div>
    {/** social media */}
      <div className='links__container'>
      <h3 className='links-title'><span className='dualColor'>Redes Sociales</span></h3>
      <div className='sMedia__container'>
        <a href='https://www.instagram.com/emmanuelramello/' target='_blank' rel="noreferrer" className='footer-a'><i className="fab fa-instagram fa-3x sMedia-icon upLink"></i></a>
            <a href='https://www.facebook.com/' target='_blank' rel="noreferrer" className='footer-a'><i className="fab fa-facebook-square fa-3x sMedia-icon upLink"></i></a>
            <a href='https://www.linkedin.com/in/emmanuelramello/' target='_blank' rel="noreferrer" className='footer-a'><i class="fab fa-linkedin fa-3x sMedia-icon upLink"></i></a>
      </div>

      </div>

    </div>

    <div className='footer__copRig'></div>
  </div>
}

export default Footer;