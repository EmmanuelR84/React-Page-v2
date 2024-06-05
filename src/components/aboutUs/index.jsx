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
            <p>We are a web development company founded in 2021 with the mission of boosting your online presence through innovative and personalized digital solutions.</p>
          </div>
          <div className='info-plus'>
            <p>Our team of technology experts works tirelessly to create exceptional web experiences that drive the growth of your business and connect you with your audience in a meaningful way.</p>
          </div>
          <div className='info-plus'>
            <p>In every project, we are committed to delivering quality, creativity, and professionalism to bring your ideas to digital reality.</p>
          </div>
          <div className='info-plus'>
            <p>Trust us to make your web presence shine!</p>
          </div>
        </div>
        
      </div>

  {/* TERCER MODULO */}
      <div className='container__3'>

        <div className='c3-info'>
          <i aria-hidden="true" class="fas fa-star c3-icon"></i>
          <h3><span className='dualColor'>Mission</span></h3>
          <p>The mission of our web development company is to provide cutting-edge digital solutions that drive the success of our clients in the online environment. We are committed to offering high-quality, innovative, and customized web development services that meet the specific needs of each client. Our mission is to help businesses stand out on the Internet, increase their visibility, enhance their interaction with users, and achieve their business goals through effective digital strategies. In every project, we strive to exceed expectations and deliver exceptional value to our clients, driving their growth and success in the digital world.</p>
        </div>

        <div className='c3-info'>
          <i aria-hidden="true" class="fas fa-lightbulb c3-icon"></i>
          <h3><span className='dualColor'>Vision</span></h3>
          <p>Our vision as a web development company is to be a leader in the digital industry, recognized for our excellence in creating innovative and high-quality web solutions. We strive to be the preferred choice for companies looking to enhance their online presence and achieve digital success. We aim to be a reference in the sector, standing out for our creativity, professionalism, and commitment to customer satisfaction. We aspire to continue growing and evolving constantly, adapting to the latest technological trends and offering services that make a difference in the digital market. Our vision is to be the key to our clients' online success, providing web solutions that drive their growth and projection in an increasingly digitized world.</p>
        </div>

        <div className='c3-info'>
          <i aria-hidden="true" class="fas fa-check c3-icon"></i>
          <h3><span className='dualColor'>Objective</span></h3>
          <p>The goal of our web development company is to offer our clients effective and personalized digital solutions that enable them to achieve their online business goals. We are committed to creating functional, attractive, and optimized websites that enhance our clients' online presence, increase their visibility, and generate tangible results such as increased traffic, conversions, and user engagement. We aim to provide a comprehensive service that covers everything from web design and development to search engine optimization (SEO) and the integration of analytics tools to measure performance. Our goal is to be the trusted digital partner of our clients, helping them grow and thrive in the digital environment sustainably and successfully.</p>
        </div>

      </div>

  </div>
}

export default AboutUs;