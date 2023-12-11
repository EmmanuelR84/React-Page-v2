import Card from '../card';
import Banner from '../banner';
import './proyects.css';

const Proyects = () => {
  return <div className='proyects__container'>
    <div>
      <Banner title={'Proyects'} />
    </div>
    <div className='proyects__card'>
      < Card 
        img={'./img/img-erwebp.png'}
        title={'ERWEBP'}
        info={'Sitio web personal desarrollado con UTN'}
        btn={'Ver proyecto'}
        url={'https://www.erwebp.com.ar'}
      />

      < Card 
        img={'./img/img-aluraLatam.png'}
        title={'Alura/Oracle'}
        info={'Portfolio creado con el curso de Alura Latam'}
        btn={'Ver proyecto'}
        url={'https://emmanuelr84.github.io/challengeoneportafolio4-Portfolio/'}
      />

      < Card 
        img={'./img/img-plazoFijo.png'}
        title={'Plazo Fijo'}
        info={'Simulador de plazo fijo creado con html5, css3 y js'}
        btn={'Ver proyecto'}
        url={'https://emmanuelr84.github.io/Simulador-Plazo-Fijo/'}
      />

      < Card 
        img={'./img/img-ecPlatzi.png'}
        title={'Platzi'}
        info={'e-commerce con uno de los cursos de Platzi'}
        btn={'Ver proyecto'}
        url={'https://emmanuelr84.github.io/curso-frontend-developer-javascript-practico/'}
      />

      < Card 
        img={'./img/img-cb.png'}
        title={'C. del Barrio'}
        info={'Sitio web del comercio de un familiar'}
        btn={'Ver proyecto'}
        url={'https://carniceriadelbarrio.netlify.app/'}
      />

      < Card 
        img={'./img/img-reactAlura.png'}
        title={'React App'}
        info={'Primer react app con Alura Latam'}
        btn={'Ver proyecto'}
        url={'https://first-react-app-alura.vercel.app/'}
      />
    </div>
  </div>
}

export default Proyects;