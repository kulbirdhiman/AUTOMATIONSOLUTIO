import React from 'react';
let Cardsm = () => {
    return (
        <React.Fragment>
            <div className="container mt-5">
                <h5>TUTORIAL COURSES</h5>
                <h2 className="text-secondary">Choose Course</h2>
                <div className="row">
                    <div className="col-md-2">
                        <div className="card mt-2">
                            <div className="card-body"> Python </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card mt-2">
                            <div className="card-body"> M.L </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card mt-2">
                            <div className="card-body"> A.I </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card">
                            <div className="card-body"> MERN STACK </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card">
                            <div className="card-body"> AUTOMATION </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card">
                            <div className="card-body"> PLC And SCADA </div>
                        </div>
                    </div>


                </div>
            </div>
        </React.Fragment>
    );
};
export default Cardsm;