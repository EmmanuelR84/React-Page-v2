import './listSection.css';

function ListSection() {
  return <div className="liSection__container">

    <div className='liSection__content'>
      <div className="liSection-img"></div>

      <div className="liSection-info">
        <h3 className="liSection-title"><span className="dualColor">Tailored to </span>your needs</h3>
        <ul className='liSection-ul'>
          <li className='liSection-li'>Experience and Expertise</li>
          <li className='liSection-li'>Customized Design</li>
          <li className='liSection-li'>Search Engine Optimization (SEO)</li>
          <li className='liSection-li'>Technical Support</li>
          <li className='liSection-li'>Updates and Maintenance</li>
        </ul>
      </div>
    </div>
    </div>

    
}

export default ListSection;