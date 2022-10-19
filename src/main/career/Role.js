import React , {useState} from 'react';

function Role() {

  const [data, setData] = useState();
  const [isYellowActive, setYellowActive] = useState();
  const [isBlueActive, setBlueActive] = useState();
  const [isGreenActive, setGreenActive] = useState();
  const [isPistaActive, setPistaActive] = useState();
  const [isPinkActive, setPinkActive] = useState();
  const [isOrangeActive, setOrangeActive] = useState();
  
  const getRole = (value,color) => () => {
    console.log(value);
    console.log(color);
    if(color === "#ffb300"){
        setYellowActive(color);
        setBlueActive('');
        setGreenActive('');
        setPistaActive('');
        setPinkActive('');
        setOrangeActive('');
    }
    if(color === "#4385f4"){
      setBlueActive(color);
      setYellowActive('');
      setGreenActive('');
      setPistaActive('');
      setPinkActive('');
      setOrangeActive('');
    }
    if(color === "#4eacae"){
      setBlueActive('');
      setYellowActive('');
      setGreenActive(color);
      setPistaActive('');
      setPinkActive('');
      setOrangeActive('');
    }
    if(color === "#c4df9b"){
      setBlueActive('');
      setYellowActive('');
      setGreenActive('');
      setPistaActive(color);
      setPinkActive('');
      setOrangeActive('');
    }
    if(color === "#ffa8ff"){
      setBlueActive('');
      setYellowActive('');
      setGreenActive('');
      setPistaActive('');
      setPinkActive(color);
      setOrangeActive('');
    }
    if(color === "#ff7800"){
      setBlueActive('');
      setYellowActive('');
      setGreenActive('');
      setPistaActive('');
      setPinkActive('');
      setOrangeActive(color);
    }
    setData(value);
  };

  return (
    <div>
      <section id="opportunities">
        <div className="container">
        <div className="row">
            <div className="text-center pb-2">
              <div className="col-md-12">
                <h1 className="font-weight-bold text-center staff-heading">Current <b className="orange-text">opportunities</b></h1>
              </div>
              <div className="col-md-8 m-auto">
                <div className="staff_steps_details text-center">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 ml-3">
            <div className="col-md-4">
              <div className="opportunities1">
                <div className="opportunities1_body" style={{
                  backgroundColor: isYellowActive ? "#ffb300" : ''}}>
                  
                  <a href="#!" onClick={getRole('Wordpress Developer','#ffb300')} style={{
                  color: isYellowActive ? 'white' : 'black' }}>
                    <h3 className="text-center">ROLE</h3>
                    <h1 className="text-center pt-3 pb-3">Wordpress Developer</h1>
                    <h5 className="text-center">Desired Experience 2+ Years</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="opportunities2">
                <div className="opportunities2_body" style={{
                  backgroundColor: isBlueActive ? "#4385f4" : ''}}>
                  <a href="#!"  onClick={getRole('Codeigniter Developer','#4385f4')} style={{
                  color: isBlueActive ? 'white' : 'black' }}>
                    <h3 className="text-center">ROLE</h3>
                    <h1 className="text-center pt-3 pb-3">Codeigniter Developer</h1>
                    <h5 className="text-center">Desired Experience 1+ Years</h5>
                  </a> 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="opportunities3">
                <div className="opportunities3_body" style={{
                  backgroundColor: isGreenActive ? "#4eacae" : ''}}>
                  <a href="#!" onClick={getRole('Laravel Developer','#4eacae')} style={{
                  color: isGreenActive ? 'white' : 'black' }}>
                    <h3 className="text-center">ROLE</h3>
                    <h1 className="text-center pt-3 pb-3">Laravel Developer</h1>
                    <h5 className="text-center">Desired Experience 1+ Years</h5>
                  </a>  
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="opportunities4">
                <div className="opportunities4_body" style={{
                  backgroundColor: isPistaActive ? "#c4df9b" : ''}}>
                  <a href="#!" onClick={getRole('PHP Developer','#c4df9b')} style={{
                  color: isPistaActive ? 'white' : 'black' }}>
                    <h3 className="text-center">ROLE</h3>
                    <h1 className="text-center pt-3 pb-3">PHP <br/> Developer</h1>
                    <h5 className="text-center">Desired Experience 1+ Years</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="opportunities5">
                <div className="opportunities5_body" style={{
                  backgroundColor: isPinkActive ? "#ffa8ff" : ''}}>
                  <a href="#!" onClick={getRole('Digital Marketing Executive','#ffa8ff')} style={{
                  color: isPinkActive ? 'white' : 'black' }}>
                    <h3 className="text-center">ROLE</h3>
                    <h1 className="text-center pt-3 pb-3">Digital Marketing Executive</h1>
                    <h5 className="text-center">Desired Experience 0-1 Years</h5>
                  </a>  
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="opportunities6">
                <div className="opportunities6_body" style={{
                  backgroundColor: isOrangeActive ? "#ff7800" : ''}}>
                  <a href="#!" onClick={getRole('Business Development Executive','#ff7800')} style={{
                  color: isOrangeActive ? 'white' : 'black'}}>
                    <h3 className="text-center">ROLE</h3>
                    <h1 className="text-center pt-3 pb-3">Business Development Executive</h1>
                    <h5 className="text-center">Desired Experience 1+ Years</h5>
                  </a>  
                </div>
              </div>
            </div>
          </div>
          <div className="row opportunities_button">
              <div className="col-md-3 choose-role">
                <h3>ROLE:</h3>
                <p>{data}</p>
              </div>
              <div className="col-md-2 choose-city">
                <h3>CITY:</h3>
                <p>Indore</p>
              </div>
              <div className="col-md-6 ">
                <a href="#" className="btn free_Quote_btn btn-lg"> View Job Role Details</a>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Role
