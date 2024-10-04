import styles from "../Styles/Footer.module.css";

export const Footer = () => {
	return (
		<div className={styles.container}>
			<p className={styles.name}>Shresth Raj</p>
			<div className={styles.links}>
				<a
					href="https://drive.google.com/file/d/1ZwLi5skN6OpH8ICxC4BpGsNLA6rBzGAu/view?usp=drive_link"
					target="_blank"
					rel="noreferrer"
					title="Resume"
				>
					<i className="fa-solid fa-file"></i>
				</a>
				<a
					href="https://www.github.com/rajshres11"
					target="_blank"
					rel="noreferrer"
					title="GitHub"
				>
					<i className="fa-brands fa-github"></i>
				</a>
				{/* <a
					href="https://www.leetcode.com/amar-codingenthusiast/"
					target="_blank"
					rel="noreferrer"
					title="LeetCode"
				>
					<svg
						className="leetcode-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="25"
						height="25"
					>
						<path
							d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"
							fill="currentColor"
							className="color000 svgShape"
						/>
						<path
							d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"
							fill="currentColor"
							className="color000 svgShape"
						/>
					</svg>
				</a> */}
				<a
					href="https://www.linkedin.com/in/shresth-raj-632355216/"
					target="_blank"
					rel="noreferrer"
					title="LinkedIn"
				>
					<i className="fa-brands fa-linkedin"></i>
				</a>
				<a
					href="mailto:shresthraj1012001@gmail.com"
					target="_blank"
					rel="noreferrer"
					title="Email"
				>
					<i className="fa-solid fa-envelope"></i>
				</a>
				<a
					href="tel:+917717780210"
					target="_blank"
					rel="noreferrer"
					title="Phone No."
				>
					<i className="fa-solid fa-phone"></i>
				</a>
				<a
					href="https://maps.app.goo.gl/WCWHsiEW8tQ3bWBP8"
					target="_blank"
					rel="noreferrer"
					title="Address"
				>
					<i className="fa-solid fa-location-dot"></i>
				</a>
			</div>
			<p>&copy; 2024 Shresth Raj. All rights reserved.</p>
		</div>
	);
};
