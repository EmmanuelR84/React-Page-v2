import './header.css';

function Header(props){

  console.log(props);

  return <div className='header-container'>
    <div className='header__div-logo'>
      <img src="/img/logo-White.png" alt='logo empresa' className='nav__logo' />
    </div>
    <div className='div__nav'>
      <i aria-hidden="true" className='menu-icon fa fa-bars fa-2x'></i>
      <nav className='responsive'>
        <ul className='nav-ul'>
          <li className='nav__link' onClick={props.showHome}>Home</li>
          <li className='nav__link' onClick={props.showAbout}>About Us</li>
          <li className='nav__link' onClick={props.showProyects}>Proyects</li>
          <li className='nav__link' onClick={props.showContact}>Contact</li>
        </ul>
      </nav>
    </div>
    <div className='nav__button'>
      <button className='btn btn-success btn-mobile'><img src='/img/whatsapp.png' className='media__icon' 
      alt='logo whatsapp'/><span className='text-whats'>Whatsapp</span></button>
    </div>

  </div>
}

export default Header;