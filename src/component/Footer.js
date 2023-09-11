import React from 'react';
import { Link } from 'react-router-dom';

let Footer =()=>{
    return(
        <React.Fragment>
             <footer className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <p>About Us</p>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <div className="col-md-2">
                            <p>Quick Links</p>
                           <ul>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/rev">TESTIMONIALS</Link><br/></li>
                            <li><Link to="/about">team and servies</Link></li>
                            <li><Link to="/cor">Tutorials</Link></li>
                            <li><Link to="/con">Contanct us</Link> </li>
                           </ul>
                        </div>
                        <div className="col-md-2">
                            <p>Resources</p>
                            <ul>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/rev">TESTIMONIALS</Link><br/></li>
                            <li><Link to="/about">team and servies</Link></li>
                            <li><Link to="/cor">Tutorials</Link></li>
                            <li><Link to="/con">Contanct us</Link> </li>
                               </ul>
                        </div>
                        <div className="col-md-2">
                            <p>Support</p>
                            <ul>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/rev">TESTIMONIALS</Link><br/></li>
                            <li><Link to="/about">team and servies</Link></li>
                            <li><Link to="/cor">Tutorials</Link></li>
                            <li><Link to="/con">Contanct us</Link> </li>
                               </ul>
                        </div>
                        <div className="col-md-2">
                            <p>Company</p>
                            <ul>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/rev">TESTIMONIALS</Link><br/></li>
                            <li><Link to="/about">team and servies</Link></li>
                            <li><Link to="/cor">Tutorials</Link></li>
                            <li><Link to="/con">Contanct us</Link> </li>
                               </ul>
                        </div>
                        
                    </div>
                    <p className="text-center mt-5">Copyright ©2023 All rights reserved  </p>
                    
                </div>
        </footer>
        </React.Fragment>
    )
}
export default Footer;