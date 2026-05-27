import React from 'react';

function Leftsection({
    imageURL , productName , productDescription , tryDemo , learnMore , googlePlay , appStore}) {
    return ( 
       <div className='container mt-5 p-5'>
        <div className='row '>
            <div className='col-6'>
           <img  style={{width:"80%"}} src={imageURL} />
            </div>
            <div className='col-6 p-5'>
                <h1 className='mb-3'>{productName}</h1>
                <p className='mb-5'>{productDescription}</p>
                <div className='mt-4 '>
                      < a style={{marginRight:"25px"}} href={tryDemo}>Try Demo<i class="fa-solid fa-arrow-right"> </i></a>
         < a href={learnMore}>Learn More<i class="fa-solid fa-arrow-right"> </i></a>

                </div>
          
         <div className='mt-4 '>
             < a href={googlePlay}><img src="\media\googlePlayBadge (2).svg"/></a>
            < a href={appStore}><img src="\media\appstoreBadge (1).svg"/></a>

         </div>
           


            </div>
        </div>
       </div>
     );
}

export default Leftsection;