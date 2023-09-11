import React from 'react';
import Navbar from './Navbar'

import Cardsm from './Cardsm';
import Card from './Card'
import Rcard from './Rcard';
import Footer from './Footer'
import Ai from '../img/ai.jpg'
import WEb from '../img/Web.jpg'
import Web from '../img/Python.jpg'
let Main =()=>{
   return(
    <React.Fragment>
         <div className="landing-page">
        <div className="wrap">
           <Navbar />
            <h1 className="text-center text-white m-5 p-3 display-3">AUTOMATION SOLUTION</h1>

        </div>
    </div>
    {/* About  */}
    <div className="bg-light">
        <div className="container-lg ">
            <div className="row main-card postion">
                <div className="col-md-7">
                    <div className="card mt-5">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={WEb} className="img-cont" alt=""/>
                                </div>
                                <div className="col-md-7">
                                    <h3>Mean stack</h3>
                                    <p> Create a comprehensive MERN stack course covering MongoDB, Express, React, and Node.js. Learn full-stack development, build dynamic web apps, and deploy with industry-standard practices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-5">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-5">
                                <img src={Web} className="img-cont2" alt=""/>
                            </div>
                            <div className="col-md-7">
                                <h1> Python</h1>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-5">
                                <img src={Ai} className="img-cont2" alt=""/>
                            </div>
                            <div className="col-md-7">
                                <h1> AI</h1>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
    <Cardsm />
   <Card />
   <Rcard />
   <Footer />
    </React.Fragment>
   )
}
export default Main;