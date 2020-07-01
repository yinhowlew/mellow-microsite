import React from "react";
import "../utils/global.css";
import { Link } from "gatsby"
import fbIcon from '../assets/images/fb-icon.png';
import youtubeIcon from '../assets/images/youtube-icon.png';
import instagramIcon from '../assets/images/instagram-icon.png';
import downloadIos from '../assets/images/download-iOS.svg';
import downloadAndroid from '../assets/images/download-android.png';

const Layout = ({ children }) => {
	return (
		<div>
			{children}
			<footer>
				<div className="footer-container">
					<div>
						<p>© 2020 Mellow App</p>
						<img src={downloadIos} alt="Download iOS" className="download-ios-image" />
						<img src={downloadAndroid} alt="Download android" className="download-android-image" />
					</div>
					<div>
						<h3>About Us</h3>
						<ul>
							<li>Home</li>
							<li>Our Story</li>
							<li>Career</li>
						</ul>
					</div>
					<div>
						<h3>Info</h3>
						<ul>
							<li><Link to="/terms-of-service">Terms of Service</Link></li>
							<li><Link to="/privacy">Privacy Policy</Link></li>
							<li>Copyright</li>
						</ul>
					</div>									
					<div>
						<h3>Contact</h3>
						<ul>
							<li>User Enquiries</li>
							<li>Artist Enquiries</li>
							<li>Press</li>
						</ul>
					</div>	
					<div>
						<h3>Follow Us</h3>
						<a href="https://www.facebook.com/"><img src={fbIcon} alt="FB icon" className="social-icon" /></a>
						<a href="https://www.instagram.com/"><img src={instagramIcon} alt="Instagram icon" className="social-icon" /></a>
						<a href="https://www.youtube.com/"><img src={youtubeIcon} alt="Youtube icon" className="social-icon" /></a>
					</div>
				</div>					
			</footer>
		</div>

	)
}

export default Layout
