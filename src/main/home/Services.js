import React from 'react'

function Services() {
  return (
    <>
      <section className="index-services">
       <div className="container mt-5">
          <div className="text-center pb-2">
            <div className="col-md-12">
              <h1 className="font-weight-bold text-center staff-heading">Our <b className="orange-text">Services</b></h1>
            </div>
            <div className="col-md-8 m-auto">
              <div className="staff_steps_details text-center">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-4">
              <div className="row services_container">
                <div className="col-sm-6 col-lg-3 col-xs-6 ">
                  <div className="service">
                    <div className="service_icon text-center">
                       <img className="mt-3" src="icons/software-development.png"/>
                    </div>
                    <div className="service_heading mt-3 text-center">
                       <h4>Custom Software Development</h4>
                    </div>
                    <p className="service_details">We develop bespoke software to match your needs with the ideal tech solutions. Benefit from SoftGetix engineers’ experience and take your business to new heights with tailored software products.</p>
                    <a className="read_more_btn" href="/custom_software_development">Read More <i className="fa fa-angle-double-right"></i></a>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 col-xs-6 ">
                  <div className="service">
                    <div className="service_icon text-center">
                       <img className="mt-3" src="icons/team.png" alt=""/>
                    </div>
                    <div className="service_heading mt-3 text-center">
                       <h4>Dedicated Team</h4>
                    </div>
                    <p className="service_details">SoftGetix provides all the roles needed to complete the team you require. A remote team composed of Senior expert developers with excellent ability to quickly and efficiently deliver technological solutions.</p>
                    <a className="read_more_btn" href="#">Read More <i className="fa fa-angle-double-right"></i></a>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 col-xs-6 ">
                  <div className="service">
                    <div className="service_icon text-center">
                       <img className="mt-3" src="icons/development.png" alt=""/>
                    </div>
                    <div className="service_heading mt-3 text-center">
                       <h4>IT Staff Augmentation</h4>
                    </div>
                    <p className="service_details">IT staff augmentation involves the temporary recruitment of specialists to extend the productivity of the in-house development. It’s one of the most cost-effective options to staff projects, cover expertise gaps, and stay flexible.</p>
                    <a className="read_more_btn" href="#">Read More <i className="fa fa-angle-double-right"></i></a>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 col-xs-6">
                  <div className="service">
                    <div className="service_icon text-center">
                       <img className="mt-3" src="icons/consulting.png" alt=""/>
                    </div>
                    <div className="service_heading mt-3 text-center">
                       <h4>IT Consulting and Digital Advisory</h4>
                    </div>
                    <p className="service_details"> We dive deep into your strategy and processes to validate your ideas and technology. Then we create a perfect solution according to your business objectives and budget.</p>
                    <a className="read_more_btn" href="/ITConsultantAdvisoryService">Read More <i className="fa fa-angle-double-right"></i></a>
                  </div>
                </div>
              </div>
          </div>
      </div>    
    </section>
    </>
  )
}

export default Services
