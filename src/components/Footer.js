/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component } from "react";
import {BrowserRouter,Link} from 'react-router-dom';


export default class Footer extends Component {
  render() {
    return (
      <div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <footer className="footer">
          <br></br> 
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">How to use removeai App?</h2>
      <p>removeai is cloud-based tool and a one-click free solution to remove backgrounds 100% automatically. The quickest way for new users working on a PC and Mac is to navigate to removeai.com in your browser, then: Click on choose file and click on remove background.</p>
    </li>
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <BrowserRouter>
        <li>
        <Link to="/">Privacy Policy</Link>
        </li>
        <li>
        <Link to="/">Terms of Use</Link>
        </li>
        <li>
        <Link to="/">Sitemap</Link>
        </li>
       </BrowserRouter>
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
