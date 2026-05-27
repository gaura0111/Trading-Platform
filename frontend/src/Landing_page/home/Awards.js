import React from 'react';

function Awards () {
    return ( 
       <div className='container mb-5 p-5'>
        <div className='row'>
            <div className='col-6'>
          <img src="/media/largestBroker (1).svg" alt="broker" />
            </div>
            <div className='col-6'>
                <h1>
           Largest stock broker in India
                </h1>
                <p>
                2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
             </p>
             <div className='row'>
                <div className='col-6 mt-4 mb-3'>
                    <ul>
                        <li>
                            <p>Futures and Options</p>
                        </li>
                         <li>
                            <p>Commodity derivatives</p>
                        </li>
                         <li>
                            <p>Currency derivatives</p>
                        </li>
                    </ul>
                </div>
                <div className='col-6 mt-4 mb-3 '>
                    <ul>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                         <li>
                            <p>Direct mutual funds</p>
                        </li>
                         <li>
                            <p>Bonds and Govt. Securities</p>
                        </li>
                
                    </ul>
                </div>
               <img style={{width:"90%"}} src='\media\pressLogos (1).png' alt='press' />
                
             </div>

            </div>

        </div>

       </div>
     );
}

export default Awards ;