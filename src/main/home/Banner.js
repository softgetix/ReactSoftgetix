import React from "react";

function Banner() {
  return (
    <>
      <section className="banner">
         <div className="container">
            <div className="row">
               <div className="banner_image">
                  <div className="banner_text">
                     <div className="">
                        <h1 className="banner_title">We Help Visionary Start-ups, Scale-ups, and Global Brands Digitally Transform, Build New Products, And Scale Dev Teams.</h1>
                     </div>
                     <div className="banner_info mt-3">
                        <p>We take care of everything from concept development to business analysis, design and prototyping, development, quality assurance, deployment and post-project maintenance and support.</p>
                     </div>
                     <div className="banner_buttons mt-5">
                        <a href="/GetFreeQuote" className="btn btn-banner_btn1 btn-lg " ><b>Build a Product</b></a>
                        <a href="/staffing" className="btn btn-banner_btn2 btn-lg "><b>Staff My Team</b></a>
                        
                     </div>
                     <div className="mt-4 banner_sm_title">
                        <p>OUR DEVELOPED APPLICATIONS HAVE BEEN FUNDED BY:</p>
                     </div>
                     <div className="row banner_company">
                        <div className="col">
                           <img src="company_logos/google_venture_logo.png" width="120px" className="img-shadow"/>
                        </div>
                        <div className="col">
                           <img src="company_logos/Index_Ventures_Logo.png" width="120px" className="img-shadow"/>
                        </div>
                        <div className="col">
                           <img src="company_logos/ms-ventures.png" width="120px" className="img-shadow"/>
                        </div>
                        <div className="col">
                           <img src="company_logos/Novo-Ventures-logo.png" width="120px" className="img-shadow"/>
                        </div>
                        <div className="col"> 
                           <img src="company_logos/Qualcomm-Logo.png" width="120px" className="img-shadow"/>
                        </div>
                        <div className="col"> 
                           <img src="company_logos/salesforce-vc.png" width="120px" className="img-shadow"/>
                        </div>
                        <div className="col"> 
                           <img src="company_logos/Trinity Logo.png" width="120px" className="img-shadow"/>
                        </div>
                        <div className="col">
                           <img src="company_logos/y-combinator_logo.png" width="120px" className="img-shadow"/>
                        </div>
                        <div className="col">
                           <img src="company_logos/Pfizer-Venture.png" width="120px" className="img-shadow"/>
                        </div>
                        <div className="col">
                           <img src="company_logos/Cisco-Investments.png" width="120px" className="img-shadow"/>
                        </div>
                        <div className="col">
                           <img src="company_logos/johnson-innovation.png" width="120px" className="img-shadow"/>
                        </div>
                        <div className="col">
                           <img src="company_logos/Intel-Capital.png" width="120px" className="img-shadow"/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  );
}

export default Banner;
