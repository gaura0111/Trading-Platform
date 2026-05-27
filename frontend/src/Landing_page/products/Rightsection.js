import React from 'react';

function Rightsection({
       productName , productDescription ,   learnMore , imageURL}) {
    return ( 
       <div className='container mt-5 p-5'>
        <div className='row '>
            
            <div className='col-6 p-5'>
                <h1 className='mb-3'>{productName}</h1>
                <p className='mb-5'>{productDescription}</p>
                <div className='mt-4 '>
                    
         < a href={learnMore}>Learn More<i class="fa-solid fa-arrow-right"> </i></a>

                </div>
                </div>
                <div className='col-6'>
           <img  style={{width:"90%"}} src={imageURL} />
            </div>
          
         
           


            </div>
        </div>
       
     );
}

export default Rightsection;
    