import React from 'react'
import '../../styles/Sur.css'
import male from '../../assets/img/male.jpg'

const Sur = () => {
  return (
    <section>

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
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque in vero, vitae blanditiis sint animi, ipsam porro dolore veritatis hic ipsum consequuntur quod quam corrupti assumenda magnam voluptas incidunt explicabo.</p>

                     <button className="register_btn">Get Started</button>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Sur
