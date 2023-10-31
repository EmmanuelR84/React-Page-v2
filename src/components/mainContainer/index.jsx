import ListSection from '../listSection';
import OurServices from '../nuestrosServicios';
import Presentation from '../presentation';
import './mainContainer.css';

function Main() {
  return <section className="main__container">
    < Presentation />
    < OurServices />
    < ListSection />
  </section>
}

export default Main;