import React from "react";
import heroImg from "../../assets/img/gym-02.png";
import dumbleIcon from "../../assets/img/d1.png";
import "../../styles/Hero.css";
import { CgPlayButtonO } from "react-icons/cg";
import { BsHeartPulse } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
   

const Hero = () => {

  
  return (
    <section>
      <div className="container">
        <div className="hero__wrapper">
          {/* hero COntent */}
          <div className="hero__content">
            <h2
              className="Section__Title"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Exercise is the key to a
              <span className="highlights"> Healthy</span> lifestyle
            </h2>

            <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              architecto deleniti culpa fugiat inventore. Beatae, accusamus. Sit
              quasi rerum omnis illum. Vitae nam nostrum adipisci non ullam
              debitis dolor voluptatem!
            </p>
            <div
              className="hero__btns"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="2000"
            >
              <button className="register__btn">Get Started
              
 
              </button>

 
                 
             




              <button className="watch__btn">
                <span>
                  <CgPlayButtonO />
                </span>
                watch video
 
              </button>
            </div>
          </div>

          {/* hero img */}
          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={heroImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="heart_rate"
              
              data-aos="fade-right"
              data-aos-duration="1500">
                <h5>Heart Rate</h5>
                <span>
                  <BsHeartPulse />
                </span>
                <h5>2567 BPM</h5>
              </div>

              <div className="gym__location"
              
              data-aos="fade-left"
              data-aos-duration="1500">
                <span>
                  <MdOutlineLocationOn />
                </span>
                <h5>
                  Find a new
                  <br />
                  GYM near you
                </h5>
              </div>

              <div className="dubmble__icon"
               data-aos="fade-down"
               data-aos-duration="1500">
                <img src={dumbleIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
