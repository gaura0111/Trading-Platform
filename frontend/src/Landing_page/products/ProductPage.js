import React from 'react';
import Hero from './Hero';
import Leftsection from './Leftsection';
import Rightsection from './Rightsection';
import Universe from './Universe';



function ProductPage() {
    return (
        <>
        <Hero />
        <Leftsection imageURL="\media\kite (1).png"
          productName="Kite" 
           productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
            tryDemo="" 
             learnMore="" 
              googlePlay="" 
               appStore=""
          />
          <Rightsection 
          productName="Console" 
           productDescription= "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
            learnMore="" 
             imageURL="\media\console (1).png"
             
          />
          <Leftsection imageURL="\media\coin (1).png"
          productName="Coin" 
           productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
            tryDemo="" 
             learnMore="" 
              googlePlay="" 
               appStore=""
          />
          <Rightsection 
          productName="Kite Connect API"
           productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
            learnMore="" 
             imageURL="\media\kiteconnect (1).png" />

          <Leftsection imageURL="\media\varsity (1).png"
          productName="Varsity Mobile" 
           productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
            tryDemo="" 
             learnMore="" 
              googlePlay="" 
               appStore=""
          />
        <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog. </p>
        <Universe />
        </>
      );
}

export default ProductPage;