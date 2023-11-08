import './scrollUp.css';

const BtnScrollUp = (props)=> {

  return <button className='btn-scrollUp' onClick={props.scrollUp}>
    <i className="fa fa-arrow-up btn-scrollUp-on" aria-hidden="true"></i>
  </button>
}

export default BtnScrollUp;