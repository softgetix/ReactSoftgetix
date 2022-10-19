import React from "react";

function CaseStudy() {
  return (
    <>
      <section className="all_services" id="case-study">
        <div className="container">
          <div className="row align-items-center mt-4 ">
            <div className="col-md-6 col-xl-6 order-md-2">
              <h4 className="text-danger font-weight-bold">Case Studies</h4>
              <h2>
                <b>Fence Construction ERP</b>
              </h2>
              <p className="text-secondary">
                FenceForce is all-in-one fence construction management software
                application that helps firms increase their project efficiency
                and accountability by providing streamlined project
                communication and documentation. Users are able to manage their
                projects from any web-connected mobile device, tablet, laptop,
                or desktop.
              </p>
              <div className="mt-3">
                <p className="text-secondary">
                  <b>Location : </b>&nbsp; India
                </p>
                <p className="text-secondary">
                  <b>Industry : </b>&nbsp; Lorem Ipsum
                </p>
                <p className="text-secondary">
                  <b>Technologies : </b>&nbsp; Lorem, Ipsum, is, simply, dummy,
                  text
                </p>
              </div>
              <div className="d-flex flex-row w-100 mt-3 mb-3">
                <a href="" className="btn free_Quote_btn btn-lg">
                  View Case Study
                </a>
              </div>
            </div>
            <div className="col-md-6 col-xl-6 text-center">
              <img
                src="images/fence.png"
                alt=""
                className="service_img"
                width="90%"
              />
            </div>
          </div>
          <div className="row align-items-center mt-4">
            <div className="col-md-6 col-xl-6">
              <h4 className="text-danger font-weight-bold">Case Studies</h4>
              <h2>
                <b>Business Automation Software</b>
              </h2>
              <p className="text-secondary">
                Tracker Core offers advanced level project management features
                with a simple-to-use interface that requires no training for
                teams and no expensive consultant onboarding costs. Tracker Core
                is used by IT, marketing, manufacturing and professional
                services teams across industries to collaborate on projects
                across the organization.
              </p>
              <div className="mt-3">
                <p className="text-secondary">
                  <b>Location : </b>&nbsp; India
                </p>
                <p className="text-secondary">
                  <b>Industry : </b>&nbsp; Lorem Ipsum
                </p>
                <p className="text-secondary">
                  <b>Technologies : </b>&nbsp; Lorem, Ipsum, is, simply, dummy,
                  text
                </p>
              </div>
              <div className="d-flex flex-row w-100 mt-3 mb-3">
                <a href="" className="btn free_Quote_btn btn-lg">
                  View Case Study
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 text-center">
              <img
                src="images/tracker-core.png"
                alt=""
                className="service_img"
                width="90%"
              />
            </div>
          </div>
          <div className="row align-items-center mt-4 ">
            <div className="col-md-6 col-xl-6 order-md-2">
              <h4 className="text-danger font-weight-bold">Case Studies</h4>
              <h2>
                <b>Real Estate CRM</b>
              </h2>
              <p className="text-secondary">
                This is a cloud-based global real estate platform suitable for
                real estate brokerages, enterprises and teams of all sizes. This
                allows users to manage leads and contacts via lead routing, drip
                campaigns and other automated processes. It integrates with
                multiple applications like Dropbox, Quickbook and DocuSign.
              </p>
              <div className="mt-3">
                <p className="text-secondary">
                  <b>Location : </b>&nbsp; India
                </p>
                <p className="text-secondary">
                  <b>Industry : </b>&nbsp; Lorem Ipsum
                </p>
                <p className="text-secondary">
                  <b>Technologies : </b>&nbsp; Lorem, Ipsum, is, simply, dummy,
                  text
                </p>
              </div>
              <div className="d-flex flex-row w-100 mt-3 mb-3">
                <a href="" className="btn free_Quote_btn btn-lg">
                  View Case Study
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 text-center">
              <img
                src="images/fence-erp.png"
                alt="Digital Transformation"
                className="service_img"
                width="90%"
              />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-xl-12 mt-5">
              <a href="/CaseStudies" className="btn free_Quote_btn btn-lg">
                View All Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CaseStudy;
