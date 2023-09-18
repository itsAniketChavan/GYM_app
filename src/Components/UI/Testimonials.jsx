import React from 'react'
import avatar01 from '../../assets/img/avatar01.png'
import avatar02 from '../../assets/img/avatar02.png'
import lunges from '../../assets/img/avatar01.png'

import '../../styles/Testomonials1.css'

const Testimonials = () => {
    return (
        <div>

            <div className="testimonials">
                <h1>Testimonials</h1>
                <p>Lorem ipsum dolor sit amet c repellendus dolorem ut repellat.</p>
            </div>


            <div class="maincontaier">
                <div class="containerr">
                    <img src={avatar01}
                        alt="" />
                    <h2>Penelope</h2>
                    <p>Joining FitnessFusion was a life-changing decision! Their expert trainers, state-of-the-art equipment,
                        and supportive community helped me achieve my fitness goals faster than I ever thought possible</p>
                </div>


                <div class="containerr">
                    <img src={avatar02}
                        alt="" />
                    <h2>Beatrice</h2>
                    <p>I've tried many gyms, but FitLife Gym is truly exceptional. The personalized training plans, motivating
                        atmosphere, and visible results have kept me coming back for years.
                    </p>
                </div>


                <div class="containerr">
                    <img src={lunges}
                        alt="" />
                    <h2>Josephine</h2>
                    <p>FitnessPro Gym is the real deal! Thanks to their professional coaches and diverse workout options, I've
                        never been in better shape. I can't recommend this gym enough!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
