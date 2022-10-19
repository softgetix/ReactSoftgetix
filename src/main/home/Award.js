import React from 'react';

function Award() {
  return (
    <>
      <section className="award">
          <div className="container award_container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row text-center">
                    <div className="col-lg-3 col-md-6 col-xs-6">
                      <div>
                        <img src="images/Software-Development.png" width="180"/>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-6">
                      <div>
                        <img src="images/TruefirmReviews.png" width="200"/>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-6">
                      <div>
                        <img src="images/CrowedReviews.png" width="200"/>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-6">
                      <div>
                        <img src="images/Web-Development.png" width="180"/>
                      </div>
                    </div>
                  </div>  
                </div>
                <div className="col-lg-12 award_paragraph" >
                   <p className="text-center text-uppercase">
                      We provide our clients with a full range of software services. These include dedicated teams, product development, R&D and technology consulting. With a proven track record, mature engineering and design teams, a fast growing roster of delighted clients, and veteran management, SoftGetix is a solutions partner of choice.
                   </p>
                </div>   
              </div>  
          </div>
      </section>
    </>
  )
}

export default Award
