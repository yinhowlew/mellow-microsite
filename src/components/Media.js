import React from "react"
import Img from "gatsby-image";


const Media = ({ data }) => {
	return (
		<section className="media-section">
	        <h1>As Seen On</h1>
	        <div className="media-images-container">
		        <Img
			      fluid={data.bloomberg} 
			      alt="media-1"
			      className="hero-image"
			    />	 
		        <Img
			      fluid={data.nytimes} 
			      alt="media-2"
			      className="hero-image"
			    />	 
		        <Img
			      fluid={data.verge} 
			      alt="media-2"
			      className="hero-image"
			    />	 	
		        <Img
			      fluid={data.businessinsider} 
			      alt="media-2"
			      className="hero-image"
			    />
			</div>	 			    		    			    			
		</section>
	)
}



export default Media;