import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';

import './JoinUs.css'

function Join() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="Join" id="join-us">
        <div className="left-j ">
        <hr/>
      <div><span className="stroke-text">Ready to</span>
        <span>Level up</span></div>
        <div><span>your body</span>
        <span className="stroke-text">with us?</span></div>
      </div>
        <div className="right-j "><form  ref={form} onSubmit={sendEmail} class="email-container">
            <input  type="email" name="user_email" placeholder="Enter your Email Address here..."/>
                <button type="submit" className="btn btn-j">Join now</button></form></div></div>
  )
}

export default Join