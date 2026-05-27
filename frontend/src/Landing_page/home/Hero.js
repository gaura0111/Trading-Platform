import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src="/media/homeHero (1).png" alt="hero" />

                <h1 className='mt-5 ' >Invest in everything</h1>
                <p> Online platform to invest in stocks, derivatives, mutual funds, and
          more</p>
                <Link to="/signup" style={{width:"25%" , margin:" 0 auto" }} className='btn btn-primary p-2 mb-5 '>Signup Now</Link>

            </div>

        </div>
    );
}

export default Hero;