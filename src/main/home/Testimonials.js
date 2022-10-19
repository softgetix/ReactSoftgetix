import React from 'react'

function Testimonials() {
  return (
    <>
      <div className="col-md-12 mt-5">
        <h1 className="font-weight-bold text-center staff-heading">What our <b className="orange-text">Clients</b> Say</h1>
      </div>
      <div className="col-md-8 m-auto">
      <div className="staff_steps_details text-center">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </div>
      </div>
      <section id="client_testimonials">
        <div className="container">
            <div id="demo" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="carousel-caption">
                    <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code,
                        I don't know what will.This was the very best explanation of frameworks for brginners 
                        that I've ever seen.
                    </p>
                    <img src="images/profile_pic4.jpg" alt="" />
                    <div id="image-caption">Nick Doe</div>
                </div>   
                </div>
                <div className="carousel-item">
                <div className="carousel-caption">
                    <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code,
                    I don't know what will.This was the very best explanation of frameworks for brginners 
                    that I've ever seen.</p>
                    <img src="images/profile_pic1.jpg" className="img-fluid" alt="" />
                    <div id="image-caption">Cromption Greves</div>
                </div>   
                </div>
                <div className="carousel-item">
                <div className="carousel-caption">
                    <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code,
                    I don't know what will.This was the very best explanation of frameworks for brginners 
                    that I've ever seen.</p>
                    <img src="images/profile_pic4.jpg" className="img-fluid" alt="" />
                    <div id="image-caption">Harry Mon</div>
                </div>   
                </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <i className='fa fa-arrow-left'></i>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <i className='fa fa-arrow-right'></i>
            </a>
            </div>
        </div>
      </section>  
    </>
  )
}

export default Testimonials
