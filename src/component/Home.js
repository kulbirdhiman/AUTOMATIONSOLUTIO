import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
let Home=()=>{
    return(
        <React.Fragment>
          <div className="landing-page">
        <div className="wrap">
        <Navbar />
            <h1 className="text-center text-white m-5 p-3 display-3">About The Company</h1>

        </div>
    </div>
    
  
<section className="p-5">
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <div className="row"  >
                    <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control p-4 bg-light"
                          placeholder="Firstname"
                          aria-label="Username"
                        />
                        
                        <input
                          type="text"
                          className="form-control mx-2 p-4 bg-light"
                          placeholder="last name"
                          aria-label="Server"
                        />
                      </div>
                </div>
                <div className="input-group flex-nowrap">
                    
                    <input type="email" className="form-control p-4 bg-light" placeholder="Enter your Email" aria-describedby="addon-wrapping" />
                  </div>
                  <div className="input-group flex-nowrap mt-3">
                    
                    <input type="text" className="form-control p-10 bg-light" placeholder="Write your messagee" aria-describedby="addon-wrapping" />
                  </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h3>Contact Info</h3>
                        <p>Address:</p>
                        <p>CITY HEART
                        MARKET
                        Kharar, Punjab 140301
                        India</p>
                    <p>Chandigarh,India</p>
                    <a href="mailto:">Email :HR@d2automation</a> <br />
                    <a href="telto:9988366701"> Phone num :+91 9988366701</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

   <Footer/>
        </React.Fragment>
    );
}
export default Home;