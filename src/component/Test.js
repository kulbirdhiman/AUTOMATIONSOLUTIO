import React from 'react';
import Navbar from './Navbar'
import Rcard from './Rcard';
import Footer from './Footer'
let Test=()=>{
    return(
        <React.Fragment>
             <div className="landing-page">
        <div className="wrap">
           <Navbar />
        <h1 className="text-center text-white m-5 p-3 display-3">TESTIMONIALS</h1>
        </div>
    </div>
        <Rcard />
        <Footer />
        </React.Fragment>
    );
};
export default Test;