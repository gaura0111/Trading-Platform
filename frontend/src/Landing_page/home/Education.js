import React from 'react';

function Education() {
    return (  
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 mb-5 p-5'>
                    <img src='\media\education (1).svg' alt='education' style={{width:"90%" , margin:"0 auto"}}></img>

                </div>
                <div className='col-6  '>
                    <h1 className='mt-5 '>Free and open market education</h1>
                    <br></br>
                    <p>  Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.</p>
                     <a  href='' style={{textDecoration:"none"}}>Versity<i class="fa-solid fa-arrow-right"></i></a>
                     <br></br>
                     <p className='mt-5'>TradingQ&A, the most active trading and investment community in
            India for all your market related queries.</p>
                      <a href='' style={{textDecoration:"none"}}> TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            </div>

                </div>
                 
                
            
        
    );
}

export default Education;