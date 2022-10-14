import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./login.css";
function Login() {
  return (
    <div className='main-contaioner'>
      <Navbar/>
      <div className='login-container'>
          <div className='leftbar'>
            <h2>Welcome back member!</h2>
            <p> Lörem ipsum rede mar. Jåpån vast ining ben de benybel. Cynception nettokrati viss dogen vire. Krosamma per helarade mypes. Vaktigt överklassafari ol gusol. 
                Seminisade makrore guheten teck vamavis. Parar orar med teväst etnotos. Köttrymden. Poment petabyte på nytuk. Laktig exokåskapet odat nyr prelig. 
                Hemist ding meganer. Prektiga label kvasiktig anament exovis. Vimenösam. Byprese dipåns. Sugrörsseende valig kvasiskapet jag börenat. 
            </p>
          </div>
          <div className='rightbar'>
              <input type={"text"} placeholder='Username'/>
              <input type={"password"} placeholder='Password'/>
              <button className='button' type={"button"}><span>Log in</span></button>
          </div>
      </div>
      <Footer className="footer"/>
    </div>
  )
}

export default Login

