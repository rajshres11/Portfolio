import React, { useEffect } from "react";
import styles from "../Styles/Timeline.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import tenAILogo from "../Images/TenAI.png";
import inf from "../Images/Influencer Marketing.png"
import Res from "../Images/Resume.png"

export const Projects = () => {
	useEffect(() => {
		const elements = document.querySelectorAll("#video");
		elements.forEach((element) => {
			element.play().catch((error) => {
				console.error("Autoplay failed", error);
			});
		});
		AOS.init({ duration: 1000, offset: 200 });
	}, []);

	return (
		<div className={styles.container}>
			 <p className={styles.heading}>Projects</p>
			<p className={styles.desc}>
				Here are some of the projects I've developed and worked on,
				showcasing my skills and creativity.
			</p> 
			 <div className={styles.timeline}>
				<div className={`${styles.box} ${styles.left_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/TenAI.png")}
						alt="Influencer Marketing"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
					<img
        src={tenAILogo}
        alt="Project Preview"
        style={{ width: "100%", borderRadius: "10px" }}
      />
						<div className={styles.tags_box}>
							<span className={styles.tags}>React js</span>
							<span className={styles.tags}>Node js</span>
							<span className={styles.tags}>tailwind css</span>
							<span className={styles.tags}>font awesome</span>
						</div>
						<p className={styles.title}>TEN AI Consulting</p>
						<p className={styles.subtitle}>
							 AI driven solutions
						</p>
						<p className={styles.description}>
						TEN Ai Consulting specializes in cutting-edge AI-driven solutions, leveraging technologies like React.js, Node.js, and Bootstrap to deliver secure and scalable applications. Our expertise extends to developing cloud-based solutions, including secure online notebooks, enterprise applications, and AI-powered platforms. With a focus on data security and seamless user experience, we integrate modern frameworks and encryption techniques to ensure privacy and efficiency. Whether it's building robust MERN stack applications or optimizing existing systems, TEN Ai Consulting empowers businesses with innovative, high-performance technology solutions.
						</p>
						<div className={styles.button_box}>
							{/* <a
								href="https://github.com/amar-codingenthusiast/inotebook"
								target="_blank"
								rel="noreferrer"
							>
								Source Code
							</a> */}
							<a
								href="https://aiconsulting.entrepreneurshipnetwork.net/"
								target="_blank"
								rel="noreferrer"
							>
								Live App
							</a>
						</div>
						<span className={styles.left_box_arrow}></span>
					</div>
				</div>
				
				
				
			</div>

			<div className={styles.timeline}>
				<div className={`${styles.box} ${styles.right_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/Influencer Marketing.png")}
						alt="TenAI"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
					<img
        src={inf}
        alt="Project Preview"
        style={{ width: "100%", borderRadius: "10px" }}
      />
						<div className={styles.tags_box}>
							<span className={styles.tags}>React js</span>
							<span className={styles.tags}>Node js</span>
							<span className={styles.tags}>bootstrap</span>
							<span className={styles.tags}>font awesome</span>
						</div>
						<p className={styles.title}>Influencer Marketing</p>
						<p className={styles.subtitle}>
							 Effortless Influencer marketing
						</p>
						<p className={styles.description}>
						Our advanced Influencer Marketing Platform is crafted using the MERN stack with Tailwind CSS, ensuring a seamless and engaging user experience. The platform features a modern look and feel, with a clean, user-friendly interface that enhances effortless navigation. A captivating hero carousel at the top of the homepage highlights key offerings, making a strong first impression. Designed with responsive architecture, the platform adapts flawlessly to all screen sizes, providing a consistent experience across devices.

A standout feature is the dynamic influencer cards, fetching real-time data from the backend to showcase influencers in an organized and visually appealing manner. A scrolling service icons section presents ten distinct services, ensuring users gain a quick overview of what’s offered. The FAQs and testimonials section builds trust by addressing common queries and sharing user experiences. To streamline communication, the functional Contact Us form, integrated with EmailJS, allows users to reach out easily and efficiently.						</p>
						<div className={styles.button_box}>
							{/* <a
								href="https://github.com/amar-codingenthusiast/inotebook"
								target="_blank"
								rel="noreferrer"
							>
								Source Code
							</a> */}
							<a
								href="https://influencer-marketing-kappa.vercel.app/"
								target="_blank"
								rel="noreferrer"
							>
								Live App
							</a>
						</div>
						<span className={styles.left_box_arrow}></span>
					</div>
				</div>
				
			</div>

			<div className={styles.timeline}>
				<div className={`${styles.box} ${styles.left_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/Resume.png")}
						alt="AI Resume Builder"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
					<img
        src={Res}
        alt="Project Preview"
        style={{ width: "100%", borderRadius: "10px" }}
      />
						<div className={styles.tags_box}>
							<span className={styles.tags}>React js</span>
							<span className={styles.tags}>Node js</span>
							<span className={styles.tags}>tailwind css</span>
							<span className={styles.tags}>font awesome</span>
						</div>
						<p className={styles.title}>AI Resume Builder</p>
						<p className={styles.subtitle}>
							 AI powered resume maker
						</p>
						<p className={styles.description}>
						This AI-powered Resume Builder is a comprehensive tool developed using the MERN stack, Tailwind CSS, and Gemini AI, designed to help users create professional resumes effortlessly. With a secure user authentication system, it ensures data privacy while providing a seamless experience. The platform features dynamic forms, catering to both freshers and experienced professionals, allowing them to input relevant details with ease.

Leveraging Gemini AI, the tool refines summaries, descriptions, and bullet points, enhancing the quality of each resume. Users can review and edit their resumes in real-time, ensuring accuracy and personalization. At the final stage, a PDF generation feature allows users to download a polished, professional resume instantly.

This intelligent and user-friendly platform streamlines the resume-building process, making it efficient, precise, and tailored to individual career needs.
						</p>
						<div className={styles.button_box}>
							{/* <a
								href="https://github.com/amar-codingenthusiast/inotebook"
								target="_blank"
								rel="noreferrer"
							>
								Source Code
							</a> */}
							<a
								href="https://resumebuilding-4klw.vercel.app/"
								target="_blank"
								rel="noreferrer"
							>
								Live App
							</a>
						</div>
						<span className={styles.left_box_arrow}></span>
					</div>
				</div>
				
				
				
			</div> 
		</div>
	);
};
