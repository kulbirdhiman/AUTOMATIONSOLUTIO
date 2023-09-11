import React from 'react';
import Navbar from './Navbar'

import Cardsm from './Cardsm';
import Card from './Card'
import Footer from './Footer'
let Courses=()=>{
    return(
        <React.Fragment>
           < div className="landing-page">
        <div className="wrap">
           <Navbar />
            <h1 className="text-center text-white m-5 p-3 display-3">Our Tutorials</h1>

        </div>
    </div>
    <Cardsm />
    <Card />
    <Footer />
        </React.Fragment>
    )
}
export default Courses;