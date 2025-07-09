import React from 'react';
import './Footer.css';
import Logo from '../../assets/images/logo01.png';
import Wtp from '../../assets/images/wtp.png';
import Fb from '../../assets/images/fb.png';
import Ig from '../../assets/images/insta.png';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={Logo} alt='' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat. Nisi scelerisque eu ultrices vitae auctor eu augue. Faucibus purus in massa tempor nec feugiat nisl pretium fusce.</p>
          <div className='footer-social-icons'>
            <img src={Wtp}/>
            <img src={Fb}/>
            <img src={Ig}/>
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>908-779-6506</li>
            <li>dubhasreebr@gmail.nom</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;