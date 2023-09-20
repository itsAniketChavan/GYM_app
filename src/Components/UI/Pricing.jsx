import React from 'react'
import '../../styles/Pricing.css'
import {RiCheckboxBlankCircleFill} from 'react-icons/ri';

const Pricing = () => {
  return (
    <section>

        <div className="container">
            <div className="pricing_top">
                <h2 className="section_title">
                    Gym <span className="hightlights">Pricing </span>Plan</h2>
                    <p>
                    All plans include access to our experienced trainers, clean and safe workout environments, and a supportive fitness community. Choose the plan that best fits your fitness goals and lifestyle, and let's embark on this journey to better health together!
                        </p>
                 
            </div>

            {/* pricing wrapper */}
            <div className="pricing_wrapper">
                <div className="pricing_item"data-aos="fade-up"
              data-aos-duration="1500">
                    <div className="pricing_card_top">
                        <h2 className="section_title">Regular Member</h2>
                        <h2 className="pricing_section_title">$50 <span>/month</span></h2>
                    </div>
                    <div className="services">
                        <ul>
                            <li><span><RiCheckboxBlankCircleFill/></span>Unlimited access to the GYM</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Custmer support</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Personal Trainer</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Standard Options</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Classes per week</li>
                        </ul>

                        <button className='Register__btn'> Join Now</button>
                    </div>
                </div>




                <div className="pricing_item pricing_item_02"
                data-aos="fade-up"
                data-aos-duration="1500">
                    <div className="pricing_card_top">
                        <h2 className="section_title">Primium Member</h2>
                        <h2 className="pricing_section_title">$70 <span>/month</span></h2>
                    </div>
                    <div className="services">
                        <ul>
                            <li><span><RiCheckboxBlankCircleFill/></span>Unlimited access to the GYM</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Custmer support</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Personal Trainer</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Standard Options</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Classes per week</li>
                        </ul>

                        <button className='Register__btn'> Join Now</button>
                    </div>
                </div>

                 

                <div className="pricing_item"
                data-aos="fade-up"
                data-aos-duration="1500">
                    <div className="pricing_card_top">
                        <h2 className="section_title">Standard Member</h2>
                        <h2 className="pricing_section_title">$100 <span>/month</span></h2>
                    </div>
                    <div className="services">
                        <ul>
                            <li><span><RiCheckboxBlankCircleFill/></span>Unlimited access to the GYM</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Custmer support</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Personal Trainer</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Standard Options</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Classes per week</li>
                        </ul>

                        <button className='Register__btn'> Join Now</button>
                    </div>
                </div>

                

               
            </div>
        </div>
    </section>
  )
}

export default Pricing
