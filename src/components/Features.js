import React, { useEffect } from "react"
import Img from "gatsby-image";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Features = ({ data }) => {

	useEffect(() => {
		AOS.init();
  	},[])  
  	
	return (
		<section className="features-section">
			<h1>Highlights</h1>
			<div className="features-subsection-1">
			    <content className="hero-content"> 
			    	<h2>Personalised Recommendation</h2> 
			    	<p>Using Machine Learning to deliver art you like</p>
			    	<p>Mood feedback to indicate your preference</p>        	
			    </content>
		        <div 
		        	data-aos="fade-left"
		        	data-aos-duration="3000"
		        >
			        <Img
				      fluid={data} 
				      alt="features-image-1"
				      className="featured-image"
				    />	 
				</div>    			    			
			</div>

			<div className="features-subsection-2">
		        <div 
		        	data-aos="fade-right"
		        	data-aos-duration="3000"
		        >		       
			        <Img
				      fluid={data} 
				      alt="features-image-2"
				      className="featured-image"
				    />
				</div>    	 
			    <content className="hero-content"> 
			    	<h2>Timely Push</h2> 
			    	<p>Control when and how frequent you'd like to receive art images</p>
			    	<p>A quick escape to the world of art</p>        	
			    </content>			    			
			</div>

			<div className="features-subsection-1">
			    <content className="hero-content"> 
			    	<h2>Favorite & Share</h2> 
			    	<p>Keep a repertoire of art you like</p>
			    	<p>Share your discovery to family and friends</p>        	
			    </content>
		        <div 
		        	data-aos="fade-left"
		        	data-aos-duration="3000"
		        >			    
			        <Img
				      fluid={data} 
				      alt="features-image-1"
				      className="featured-image"
				    />	 	
				</div>    		    			
			</div>					

		</section>
	)
}



export default Features;