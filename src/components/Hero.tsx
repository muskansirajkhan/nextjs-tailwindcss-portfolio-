import React from "react";
import Navbar from "./Navbar";
import Heading from '../components/Heading';
const Hero = () => {
    return(
        <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/Untitled-4.png)] bg-cover"
        style={{backgroundSize: "40%", backgroundPosition: "left 100px top 100px"}}>
    
<Navbar />
<div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
<div className="hidden lg:block"></div>
<div className="text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center">
<div>
    <p data-aos="zoom-in">I'm</p>
    <p data-aos="zoom-in">Muskan</p>
    <p data-aos="zoom-in">Siraj</p>
</div>
</div>
</div>
        </div>
    )
}

export default Hero;