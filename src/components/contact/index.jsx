import './contact.css';
import Banner from '../banner';

const Contact = ()=> {
  return <div className='contact__container'>
    < Banner title={'Contact Us'} />

    <div className='div-form'>
      <form>
        <h2 className='h2'><span className='dualColor'>Contact</span> Us</h2>
        <div className='div-inputs'>
          <label for='name'>Name</label>
          <input type='text' name='name' placeholder='Your name' />
          <input type='email'placeholder='Your email'  />
          <input type='phone' placeholder='Your phone' />
        </div>
      </form>
    </div>
  </div>
}

export default Contact;