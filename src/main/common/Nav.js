import React from 'react'

function Nav() {
  return (
    <>
      <section className="navigation">
         <div className="row">
            <nav id="navbar_top" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-softgetix">
               <div className="row">
                  <div className="col-md-3 logo">
                     <a className="navbar-brand" href="/"><img src="logo/softgetix_logo_new.png"/></a>
                  </div>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown active">
                           <a className="nav-link" href="/about">ABOUT US</a>
                        </li>
                        <li className="nav-item dropdown">
                           <a className="nav-link" href="/staffing">STAFFING</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle">PRODUCTS <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="dropdown-menu ">
                           <a className="dropdown-item" href="/fence-crm">FenceCRM</a>
                           <div className="dropdown-divider"></div>
                           <a className="dropdown-item" href="#">Browse all Products</a>
                        </ul>
                        </li>
                        <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle">
                           SERVICES <i className="fa fa-angle-down"></i>
                           </a>
                           <ul className="dropdown-menu ">
                              <a className="dropdown-item" href="/custom_software_development">Custom Software Development</a>
                              <a className="dropdown-item" href="/dedicated_team">Dedicated Team</a>
                              <a className="dropdown-item" href="/ITStaffAugmentation">IT Staff Augmentation</a>
                              <a className="dropdown-item" href="/ITConsultantAdvisoryService">IT Consulting and Digital Advisory</a>
                              <a className="dropdown-item" href="/BackendDevelopmentServices">Back End Development Services</a>
                              <a className="dropdown-item" href="FrontendDevelopmentServices">Front End Development Services</a>
                              <a className="dropdown-item" href="SaasApplicationDevelopmentServices">SaaS Application Development Services</a>
                              <a className="dropdown-item" href="BusinessIntelligenceServices">Business Intelligence Services </a>
                              <a className="dropdown-item" href="DatabaseDevelopmentServices">Database Development Services</a>
                              <a className="dropdown-item" href="WebDevelopmentServices">Web Development Services</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="">Browse all Services</a>
                           </ul>
                        </li>
                        <li className="nav-item dropdown">
                           <a className="nav-link" href="/career">CAREERS</a>
                        </li>
                        <li className="nav-item dropdown">
                           <a className="nav-link" href="#">BLOG</a>
                        </li>
                     </ul>
                     <form className="form-inline my-2 my-lg-0">
                        <a href="/contact" className="btn contact_us_btn my-2 my-sm-0" type="submit">Contact Us</a>
                     </form>
                  </div>
               </div>
            </div>
            </nav>
         </div>
      </section>
    </>
  )
}

export default Nav
