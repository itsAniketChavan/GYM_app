import React from 'react'
import '../../styles/exercise.css'

import  lunges from '../../assets/img/lunges.png'
import  yoga from '../../assets/img/yoga-pose.png'
import  extended from '../../assets/img/extended.png'

const Ex = () => {
  return (
    <section id = "schedule"   className="scheduleSection">

      <div className="contaner_exercise_contaner">
          <div className="exercise_top"
          data-aos="fade-down"
          data-aos-duration="1500">
            <h2 className="section_title">Benifits of <span className="highlights">Exercise</span></h2>
            <p>Regular exercise offers a multitude of benefits, including improved physical fitness,<br /> reduced stress, and better sleep quality.It plays a crucial role in maintaining a healthy <br /> body and mind, contributing to an overall higher quality of life</p>
          </div>

          {/* exercises list */}

          <div className="exercise_wrapper"
          data-aos="fade-up"
          data-aos-duration="1500">
              <div className="exercise_item"
              data-aos="zoom-in"
              data-aos-duration="1500">
                <span className="exercise_icon">
                  <img src="" alt="" />
                </span>

                <div className="exercise_content">
                  <h4>Increased flexibility</h4>
                  <p>Increased flexibility is a key advantage of regular exercise. <br /> Maintains Stretching and flexibility of body.

                  </p>
                </div>




              </div>



              <div className="exercise_item"
              data-aos="zoom-in"
              data-aos-duration="1500">
                <span className="exercise_icon">
                  <img src= "" alt="" />
                </span>

                <div className="exercise_content">
                  <h4>Healthy Life</h4>
                  <p>A healthy life encompasses a holistic approach to well-being, <br />including physical, mental, and emotional aspects.

                  </p>
                </div>

              </div>


              <div className="exercise_item"
              data-aos="zoom-in"
              data-aos-duration="1500">
                <span className="exercise_icon">
                  <img src= "" alt="" />
                </span>

                <div className="exercise_content">
                  <h4>Reducing Blood Pressure</h4>
                  <p> Regular exercise, such as brisk walking or cycling,<br /> can aid in lowering hypertension. Additionally, manages  stress 
                  </p>
                </div>

              </div>
               


          </div>
      </div>
    </section>
  )
}

export default Ex
