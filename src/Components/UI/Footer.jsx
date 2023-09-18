import React from "react";
import "../../styles/Footer.css";
import d1 from "../../assets/img/d1.png";

const Footer = () => {

    const year = new Date().getFullYear()

  return (
    <footer className="Footer">
        <div className="contaner"> 
      <div className="footer_wrapper">
        <div className="footer_box">
            <div className="logo"> 
          <div className="logo_img">
            <img src="" alt="" />
          </div>
          <h2>FitBody</h2>
        </div>
        <br />
        <p>
            
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, rem.
        </p>
        </div>

        <div className="footer_box">
            <h4 className="footer_title">Company</h4>

                <ul className="footer_links">
                    <li><a href="#">Our programs</a></li>
                    <li><a href="#">Our Plans</a></li>
                    <li><a href="#">Become a member</a></li>
                    <li><a href="#"></a></li>
                </ul>
        </div>


        <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>

                <ul className="footer_links">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">support</a></li>
                    <li><a href="#"></a></li>
                </ul>
        </div>





        <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>

                <ul className="footer_links">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">support</a></li>
                    <li><a href="#"></a></li>
                </ul>
        </div>
      </div>
      <p className="copyright">
        copyright - {year} developed by Ani. All rights are reserved.


      </p>
      </div>
    </footer>
  );
};

export default Footer;
