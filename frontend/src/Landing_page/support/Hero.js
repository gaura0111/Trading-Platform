import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
         <div className= "pt-5 mt-5 mb-5" id='supportwrapper'>
            <h4 style={{marginright:"25%"}} className='mb-5 '>Support Portal </h4>
            <a style={{color:"white", marginRight:"15%"}} href=''>Track Tickets</a>
            </div>
            <div className='row  p-5 mt-5 mb-5'>
               <div className='col-6'>
                  <h2 className='fs-4 mb-3'>
                     Search for an answer or browse<br></br> help topics to create a ticket
                  </h2>
                  < input placeholder="Eg. how do I activate F&O" style={{width:"70%" , height:"45%" , borderRadius:"10px" , border:"none"}}  />
          <br />
          <div className=' links'>
          <a style={{color:"white" ,marginright:"15%"}} href="">Track account opening</a>
          <a style={{color:"white", }}href="">Track segment activation</a>
          <a style={{color:"white", marginRight:"20%"}}href="">Intraday margins</a><br></br>
          <a style={{color:"white"}}href="">Kite user manual</a>
          </div>

               </div>
               <div className='col-6'>
                  <h2 style={{marginLeft:"40%", marginBottom:"5px"}} >
                     Features
                  </h2>
                  <br></br>
                  <div >
                   <ol style={{marginLeft:"35%",lineHeight:"2.1" }}>
            <li>
              <a style ={{color:"white"}} href="">Current Takeovers and Delisting - January 2024 </a>
            </li>
            
            <li>
              <a style ={{color:"white" , }} href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
          </div>

               </div>

            </div>

         

        </section>
     );
}

export default Hero; 