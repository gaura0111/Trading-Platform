import React from 'react';


function Hero() {
    return ( 
       <div className='container border-bottom mb-5'>
        <div className='mt-5 text-center p-5'>
            <h1 className='fs-1'>Technology</h1>
            <h3 className='mt-4 fs-4 text-muted'>Sleek, modern and intuitive trading platforms
        </h3>
        <p className='mt-3 mb-5'>Check out our <a style={{textDecoration:"none"}} href='#'>investment offerings<i class="fa-solid fa-arrow-right"> </i></a></p>
            
        </div>
       </div>
     );
}

export default Hero;