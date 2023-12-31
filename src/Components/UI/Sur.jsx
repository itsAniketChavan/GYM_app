import React from 'react'
import '../../styles/Sur.css'
import male from '../../assets/img/male.jpg'

const Sur = () => {
  return (
    <section id = "Sur" className="SurSection">

        <div className="container">
            <div className="start_wrapper">
                <div className="start_img">
                    <img src={male} alt=""data-aos="fade-left"
              data-aos-duration="1500" />
                </div>

                <div className="start_content"data-aos="fade-right"
              data-aos-duration="1500">
                    <h2 className="section_title">
                        Ready To Make A <span className="highlights">Change?</span>
                    </h2>
                     <p>Discover a healthier, stronger, and happier you at our gym! Our expert trainers, top-notch facilities, and vibrant fitness community await you. Join us today to start your journey to a better, more active life.</p>

                     <button className="register_btn">Get Started</button>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Sur
