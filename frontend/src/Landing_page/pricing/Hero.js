import React from 'react';


function Hero() {
    return ( 
       <div className='container mb-3'>
        <div className='row mt-5  p-5 text-center border-bottom'>
            <h1 clas>Pricing</h1>
            <p className='mt-4 fs-4 text-muted'>Free equity investments and flat ₹20 traday and F&O trades</p>

        </div>
        <div className='row text-center'>
            <div className='col-4  mt-5 p-3'>
            <img src='\media\pricingEquity (1).svg'></img>
            <h1 className='text-center mb-3 fs-2'>Free equity delivery</h1>
                <p className='text-center mt-3 text-muted mb-5'>All equity delivery investments (NSE, BSE)<br></br> are absolutely free — ₹
            0 brokerage.</p>

            
            </div>
            <div className='col-4  mt-5 p-3'>
            <img src='\media\intradayTrades (1).svg'></img>
            <h1 className='text-center mb-3 fs-2'>Intraday and F&O trades</h1>
                <p className='text-center mt-3 text-muted mb-5'>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.</p>

            
            </div>
            <div className='col-4  mt-5 p-3 '>
            <img src='\media\pricingEquity (1).svg'></img>
            <h1 className='text-center mb-3 fs-2'>Free direct MF</h1>
                <p className='text-center mt-3 text-muted mb-5'>All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.</p>

            
            </div>
            


 


        </div>
       </div>
     );
}

export default Hero;