import React from 'react'


function Counting() {
  return (
    <>
    <section className="counting">
		<div className="container">
			<div className="col-lg-12">
			<div className="row counting_container">
				<div className="col-lg-2 col-md-6">
				<div className="counter">
					<h2 className="count-title">24+</h2>
					<p className="count-text "><img src="icons/flight.png" width="25px" alt=""/>&nbsp; COUNTRIES SERVED </p>
				</div>
				</div>
				<div className="col-lg-2 col-md-6">
				<div className="counter">
					<h2 className="count-title">530+</h2>
					<p className="count-text "><img src="icons/rating.png" width="25px" alt=""/> HAPPY CLIENTS </p>
				</div>
				</div>
				<div className="col-lg-2 col-md-6">
				<div className="counter">
					<h2 className="count-title">1280+</h2>
					<p className="count-text "><img src="icons/pencil-and-ruler.png" width="25px" alt=""/>&nbsp; PROJECTS COMPLETE </p>
				</div>
				</div>
				<div className="col-lg-2 col-md-6">
				<div className="counter">
					<h2 className="count-title">12+</h2>
					<p className="count-text "><img src="icons/years.png" width="25px" alt=""/>&nbsp; YEARS </p>
				</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-6">
				<div>
					<a href="/GetFreeQuote" className="btn free_Quote_btn btn-lg">Get a Free Quote!</a>
				</div>
				</div>
			</div>
			</div>  
		</div>
    </section>
    </>
  )
}

export default Counting
