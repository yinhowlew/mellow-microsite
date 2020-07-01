import React from "react";
import Img from "gatsby-image";


const Hero = ({ data }) => {

	return (
		<section className="hero-section">
	        <Img
		      fluid={data} 
		      alt="placeholder-hero"
		      className="hero-image"
		    />	 
		    <content className="hero-content"> 
		    	<h1 style={{fontSize: "4em"}}>Daily Art Inspiration</h1> 
		    	<h2>Personalised Art, Delivered Daily</h2> 
		    	<h2>Get Inspired</h2>
		    	<h2>Enjoy a Mellow Moment</h2>
		    	<button className="download-button">Download Mellow</button>
		    	<p>Free. No sign-up required.</p>        	
		    </content>
		</section>
	)
}



export default Hero;