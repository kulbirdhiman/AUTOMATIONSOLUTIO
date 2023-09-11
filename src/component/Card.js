import React from 'react';
import Img from '../img/Landing-page.jpg'
import WEb from '../img/Web.jpg'
import Python from '../img/Python.jpg'
import Ai from '../img/ai.jpg'
import Ml from '../img/Ml.jpg'
import Auto from '../img/auto.jpg'
import AAt from '../img/AII.jpg'
let Card=()=>{
    return(
        <React.Fragment>
             <section className="bg-light mt-5 p-5">
        <div className="container-lg ">
            <div className="row pt-5 ">
                <div className="col-md-8">
                    <div className="input-group">
                        <div className="form-outline">
                            <input type="search" id="form1" className="form-control px" placeholder="search" />

                        </div>
                        <button type="button" className="btn btn-primary btn-md">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>

                <div className="colmd-4">
                    <h4>Share :</h4>
                    <i className="fa fa-facebook fa-2x text-info"></i>
                </div>
            </div>
            
            <div className="mt-5">
                <p>LATEST</p>
                <h2 className="text-info mt-0">Tutorials</h2>
                
                <div className="row mt-5">
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src={WEb} className="img-cont" alt=""/>
                                    </div>
                                    <div className="col-md-7">
                                        <h3>WEB development</h3>
                                        <p>Create a comprehensive MERN stack course covering MongoDB, Express, React, and Node.js. Learn full-stack development, build dynamic web apps, and deploy with industry-standard practices.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card mt-3">
                            <div className="card-body">
                                <img src={AAt} className="img-side" alt=""/>
                                <h5>Automation</h5>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row mt-3">
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src={Python} className="img-cont" alt=""/>
                                    </div>
                                    <div className="col-md-7">
                                        <h3>Python</h3>
                                        <p> Develop an extensive Python course. Cover fundamentals, libraries (e.g., NumPy, Pandas), web development (Django/Flask), data science, and automation. Master Python's versatility for various applications and industries.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card mt-3">
                            <div className="card-body">
                                <img src={Auto} className="img-side" alt=""/>
                                <h5>Plc and skda </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src={Ml} className="img-cont" alt=""/>
                                    </div>
                                    <div className="col-md-7">
                                        <h3>Machine laarning</h3>
                                        <p> Design an in-depth Machine Learning course. Explore key concepts, algorithms (e.g., SVM, neural networks), data preprocessing, model evaluation, and real-world applications. Develop expertise in AI and data-driven decision-making.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card mt-3">
                            <div className="card-body">
                                <img src={Img} className="img-side" alt=""/>
                                <h5>Basic of computer</h5>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="row mt-3">
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src={Ai} className="img-cont" alt=""/>
                                    </div>
                                    <div className="col-md-7">
                                        <h3>A.I</h3>
                                        <p> Craft an AI course encompassing foundational principles, machine learning, deep learning, natural language processing, computer vision, and ethical AI. Empower learners to create AI solutions and grasp its societal impact.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
</section>
        </React.Fragment>
    );
};
export default Card;