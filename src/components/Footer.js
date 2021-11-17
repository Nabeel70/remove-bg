/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <footer className="footer">
          <br></br> 
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Media</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">Online</a>
        </li>

        <li>
          <a href="#">Print</a>
        </li>
            
        <li>
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="/#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2021 RemoveAI. All rights reserved.</p>
    
    <div class="legal__links">
      <a href="http://www.removeai.com/">Made by removeai.com</a> 
    </div>
  </div>
        </footer>
      </div>
    );
  }
}
