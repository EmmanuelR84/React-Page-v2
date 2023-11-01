import './banner.css';

const Banner = (props)=> {
  let title = props.title;

  return <div className='container__banner'>
    <div className='banner'>
      <div>
        <h1 className='title-initial info__title'>{title}</h1>
      </div>
    </div>
  </div>
}

export default Banner;