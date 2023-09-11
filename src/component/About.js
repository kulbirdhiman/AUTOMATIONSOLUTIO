import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import Img from '../img/Landing-page.jpg'

let About=()=>{
    return(
        <React.Fragment>
             <div className="landing-page">
        <div className="wrap">
           <Navbar />
        <h1 className="text-center text-white m-5 p-3 display-3">AUTOMATION SOLUTION</h1>
        </div>
    </div>
        {/* about  */}
        <section >
        <div class="container p-5">
            <div class="row mt-5">
                <div class="col-md-5">
                    <h4 >About us</h4>
                    <h1 class="text-info">Our company</h1>
                    <p>Best PLC, SCADA, HMI, VFD, AI, Machine Learning Training available at our Training Center from the most experienced trainers.
Come Learn and build super successful technical career</p>
                    <p>Our Experience- 
15+ Years of Training, Research and Development.

Company in Touch- Swaraj, Sonalika, Contour Automotive, Panacea Biotec,  
Tech Mahindra, Reliance Jio, HCL, Infosys, Wipro, Accenture, Myntra, Mirafra Technology,  </p>
                </div>
                <div class="col-md-7">
                    <div class="d-flex justify-content-center">
                        <img src={Img} class="about-img " alt=""/>
                    </div>
                </div>
            </div>
        </div>
   </section>
<section class="p-5">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <img src={Img} class="about-img" alt=""/>
            </div>
            <div class="col-md-4 mt-3">
                <p>Why founded</p>
                <h2 class="text-info">Mission and Vision</h2>
                <p>Available Trainings <br />
PLC & SCADA , Arduino, Robotics, IOT, Python, Artificial Intelligence, Machine Learning, Data Science, MATLAB,  Embedded System, 
</p>
                <p>
                Available Trainings <br />
PLC & SCADA , Arduino, Robotics, IOT, Python, Artificial Intelligence, Machine Learning, Data Science, MATLAB,  Embedded System, 

                </p>
            </div>
        </div>
    </div>
</section>

<div class="bg-info p-3">
    <div class="container">
        <div class="row">
            <div class="col-md-9">
                <h2 class="text-white">What are you waiting for ?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nam.</p>
            </div>
            <div class="col-md-3">
                <a href="a" class="btn btn-outline-white ">Enroll now</a>
            </div>
        </div>
    </div>
</div>

        <Footer />
        </React.Fragment>
    );
};
export default About;