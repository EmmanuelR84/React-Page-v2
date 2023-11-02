import './card.css';

const Card = (props)=> {
  let img = props.img;
  let title = props.title;
  let info = props.info;
  let btn = props.btn;

  return (<div className='container__card'>
    <div className='div-img'>
      <img src={img} className='card-img' alt='proyect'/>
    </div>
    <div className='div-info'>
      <h1 id='title-card' className='card-title dualColor'>{title}</h1>
      <p className='card-info'>{info}</p>
    </div>
    <div className='div-btn'>
      <button className='card-btn btn'>{btn}</button>
    </div>
  </div>)
}

export default Card;