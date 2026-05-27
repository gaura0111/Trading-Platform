import React from 'react';

import { Link } from 'react-router-dom';

function Universe() {
    return (  
       <div className='container'>
        <div className='row text centre'>
             <h1 className='mt-5 text-center'>The Zerodha Universe</h1>
        <p className='text-center mt-3'>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

            <div className='col-4 p-3 mt-5'>
                <img src="\media\smallcaseLogo (1).png" />
                <p  className='text-small text-muted mt-4'>Thematic investment platform</p>

            </div>
             <div className='col-4 p-3 mt-5'>
                <img src= "\media\streakLogo (1).png" style={{width:"50%"}} />
                <p style={{marginLeft:"30px"}} className='text-small text-muted mt-4'>Algo & strategy platform</p>

            </div>
             <div className='col-4 p-3 mt-5'>
               <img src='\media\sensibullLogo (1).svg' style={{width:"67%", marginTop:"5%"}}/>
                <p style={{marginLeft:"60px"}} className='text-small text-muted mt-4'>Option trading platform</p>

            </div>
            <div className='col-4 p-3 mt-4'>
                <img src= "\media\zerodhaFundhouse (1).png"  style={{width:"60%"}} />
                <p style={{marginLeft:"60px"}} className='text-small text-muted mt-4'>Asset management</p>

            </div>
             <div className='col-4 p-3 mt-4'>
                <img src="\media\goldenpiLogo (1).png" style={{width:"60%"}} />
                <p style={{marginLeft:"60px"}} className='text-small text-muted mt-4'>Bonds tradings platform</p>

            </div>
             <div className='col-4 p-3 mt-4'>
                <img src="\media\dittoLogo (1).png" style={{width:"55%"}} />
                <p style={{marginLeft:"60px"}} className='text-small text-muted mt-4  '>Insurance</p>

            </div>
              <Link to="/signup" className='btn btn-primary p-2 mb-5 mt-5 ' style={{width:"20%" , margin:" 0 auto" }}>Signup Now</Link>

          
        </div>
       </div>
    );
}

export default Universe;