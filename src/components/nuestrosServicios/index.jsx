import './ourServices.css';

function OurServices() {
  return <div className='oServ__container'>
    <div className='oServ__header'>
      <h1 className='oServ__header-title'><span className='dualColor'>Our </span>Services</h1>
      <p className='oServ__header-p'>Empowering Your Online Presence with Innovative Web Solutions.</p>
    </div>
    <div className='oServ__info'>
      <div className='oServ__info-container'>
        <img src='/img/slide2.jpg' alt='telefono mobil' className='oServ__info-img' />
        <h3 className='oServ__info-title'>Responsive Design</h3>
        <p className='oServ__info-text'>Responsive design is an approach to web design that ensures web pages render well on a variety of devices and window or screen sizes. This design technique allows for optimal viewing and interaction experience, making it easy to read and navigate the website with a minimum of resizing, panning, and scrolling across different devices such as desktop computers, tablets, and mobile phones. By using responsive design, websites can adapt their layout and content dynamically based on the device being used, providing a consistent and user-friendly experience for all users.</p>
      </div>
      <div className='oServ__info-container'>
        <img src='/img/appsweb.jpg' alt='aplicaciones web' className='oServ__info-img' />
        <h3 className='oServ__info-title'>Web Apps</h3>
        <p className='oServ__info-text'>Web applications are software programs that run in a web browser and do not need to be downloaded and installed on a device. These applications are accessible through the internet and can be used on various devices with internet connectivity. Web applications offer a wide range of functionalities, from productivity tools to e-commerce platforms, social networks, and cloud services. By not requiring installation, web applications are convenient and easy to use, making them popular for both personal and professional tasks.</p>
      </div>
      <div className='oServ__info-container'>
        <img src='/img/e-commerce.jpg' alt='e-commerce' className='oServ__info-img' />
        <h3 className='oServ__info-title'>e-commerce</h3>
        <p className='oServ__info-text'>E-commerce has revolutionized the way businesses operate and has provided consumers with a convenient way to shop for products and services from the comfort of their homes. It offers benefits such as a wider reach, cost-effectiveness, 24/7 availability, and personalized shopping experiences through data analytics and targeted marketing. Overall, e-commerce has become an integral part of the modern economy, shaping the way businesses interact with customers and conduct transactions in the digital age.</p>
      </div>
    </div>
  </div>
}

export default OurServices;