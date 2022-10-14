import React from 'react'
import "./footer.css";
import logoImage from "../../images/image 3.png";
import facebook from "../../images/Vector.png";
import youtube from "../../images/Group.png";
import instagram from "../../images/insta.png";

function Footer() {
  return (
    <div className='footer-container'>
    <img src={logoImage} alt="logo-image" className="footer-logo"/>
    <div className='pageLink'>
    <div>Sign up</div>
    <div>Sign in</div>
    <div>About us</div>
    <div>Contact us</div>
    </div>
    <div className='socialLink'>
      <h4>Follow us on</h4>

      <div className='icon'>
        <img src={facebook} alt='facebook'/>
        <img src={instagram} alt='instagram'/>
        <img src={youtube} alt='youtube'/>
      </div>
    </div>
    </div>
    
  )
}

export default Footer
