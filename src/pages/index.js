import React from "react";
import { graphql } from "gatsby"
import '../utils/global.css';
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Media from "../components/Media";
import Wave from 'react-wavify';

export default ({ data }) => {
  return (
  	<Layout>
	  	<main>
	  		<Hero id="hero" data={data.appscreenshot1.childImageSharp.fluid} />	
			<Wave fill="url(#gradient)" style={{display: "flex"}}
				options={{
		          height: 20,
		          amplitude: 20,
		          speed: 0.2,
		          points: 3
		        }}
				>
			  <defs>
			    <linearGradient id="gradient" gradientTransform="rotate(90)">
			      <stop offset="10%"  stopColor="#99ff99" />
			      <stop offset="90%" stopColor="#18FF6D" />
			    </linearGradient>
			  </defs>
			</Wave>		

	  		<Features id="features" data={data.placeholderhero.childImageSharp.fluid} />
			
			<Wave fill="url(#gradient2)" 
				style={{
		        	display: "flex",
		        	zIndex: "10",
		        	backgroundColor: "#18FF6D"
		        }}
		        paused={true}
				options={{
		          height: 20,
		          amplitude: 20,
		          speed: 0.2,
		          points: 3
		        }}
				>
			  <defs>
			    <linearGradient id="gradient2" gradientTransform="rotate(90)">
			      <stop offset="10%"  stopColor="#FEE5CA" />
			      <stop offset="90%" stopColor="#FED8B1" />
			    </linearGradient>
			  </defs>
			</Wave>		
			
	  		<Media id="media" 
	  			data={{
	  				bloomberg: data.bloomberg.childImageSharp.fluid,
	  				nytimes: data.nytimes.childImageSharp.fluid,
	  				verge: data.verge.childImageSharp.fluid,
	  				businessinsider: data.businessinsider.childImageSharp.fluid
	  			}}
	  		/>

			 <Wave 
			 	fill='white'
			 	style={{
		        	display: "flex",
		        	zIndex: "10",
		        	backgroundColor: "#FED8B1"
		        }}
		        paused={true}
		        options={{
		          height: 20,
		          amplitude: 30,
		          speed: 0.15,
		          points: 3
		        }}
			 />	  		
	  		
	  	</main>
  	</Layout>
  )
}

export const query = graphql`
  query {
    placeholderhero: file(relativePath: { eq: "placeholder-hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    appscreenshot1: file(relativePath: { eq: "app-screenshot-1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }    
    bloomberg: file(relativePath: { eq: "bloomberg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }  
    nytimes: file(relativePath: { eq: "nytimes.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }     
    verge: file(relativePath: { eq: "verge.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }     
    businessinsider: file(relativePath: { eq: "business-insider.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }                       
    socialseo: file(relativePath: { eq: "nytimes.png" }) {
      childImageSharp {
        resize(width: 1200) {
          src
          height
          width
        }
      }
    }    
  }
`

/*
pending:
SEO
hookup with netlify

npm install --save aos@next
- for more configurations, see https://github.com/michalsnik/aos

npm install react-wavify

*/