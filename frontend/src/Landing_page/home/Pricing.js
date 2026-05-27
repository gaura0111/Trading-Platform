import React from 'react';


function Pricing() {
    return ( 
        <div className='container'>
            <div className='row' style={{textAlign:"center"}}>
                <div className='col-4 '>
                    <h1 className='mb-2.5 p-4'>Unbeatable pricing</h1>
                              <p className='text-muted' style={{textAlign:"center"}}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href='' style={{textDecoration:"none" , textAlign:"center"}} className='mb-5'>See pricing<i class="fa-solid fa-arrow-right"></i></a>

                    
                    
                     </div>
                <div className='col-2'></div>
                <div className='col-6 mb-5'>
                    <div className='row mt-2'>
                        <div className='col border p-3'>
                            <h1>₹0</h1>
                            <p>Free equity delivery and <br/>  direct mutual funds</p>
                        </div>
                        <div className='col border p-3'>
                             <h1 className="mb-3 ">₹20</h1>
                             <p>Intraday and F&O</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
     );
}

export default Pricing ;