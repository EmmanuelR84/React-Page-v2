import './listSection.css';

function ListSection() {
  return <div className="liSection__container">

    <div className='liSection__content'>
      <div className="liSection-img"></div>

      <div className="liSection-info">
        <h3 className="liSection-title"><span className="dualColor">A tu </span>Medida</h3>
        <ul className='liSection-ul'>
          <li className='liSection-li'>texto 1</li>
          <li className='liSection-li'>texto 2</li>
          <li className='liSection-li'>texto 3</li>
          <li className='liSection-li'>texto 4</li>
          <li className='liSection-li'>texto 5</li>
        </ul>
      </div>
    </div>
    </div>

    
}

export default ListSection;