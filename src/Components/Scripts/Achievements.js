import React, { useEffect } from "react";
import styles from "../Styles/Timeline.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Achievements = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, offset: 200 });
	}, []);

	return (
		<div className={styles.container}>
			<p className={styles.heading}>Achievements</p>
			<p className={styles.desc}>
				Recognitions and milestones that highlight my accomplishments
				and contributions throughout my journey.
			</p>
			<div className={styles.timeline}>
				<div className={`${styles.box} ${styles.left_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/offerletterlogo.png")}
						alt="leetcode"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<img
							src={require("../Images/offerletter.png")}
							alt="leetcoderanking"
							width="100%"
						/>
						<p className={styles.title}>Intership Offer letter</p>
						<p className={styles.subtitle}>
							ReactJs Developer Intern
						</p>
						<p className={styles.description}>
							
						</p>
						<span className={styles.left_box_arrow}></span>
					</div>
				</div>
				<div className={`${styles.box} ${styles.right_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/certificate logo.jpeg")}
						alt="consistency"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<img
							src={require("../Images/Udemycertificate.png")}
							alt="leetcodeconsistency"
							width="100%"
						/>
						<p className={styles.title}>
							Udemy Certification
						</p>
						<p className={styles.subtitle}>
							Frontend - Html,Css,JavaScript
						</p>
						<p>
							
						</p>
						<span className={styles.right_box_arrow}></span>
					</div>
				</div>
				<div className={`${styles.box} ${styles.left_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/certificate logo.jpeg")}
						alt="certificates"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<img
							src={require("../Images/greatlearningcertificated.png")}
							alt="certificatesofcompletion"
							width="100%" style={{aspectRatio: 16/9}}
						/>
						<p className={styles.title}>
							Certificates of Completion
						</p>
						<p className={styles.subtitle}>
							Programming Basics
						</p>
						<p>
							
						</p>
						{/* <div className={styles.button_box}>
							<a
								href="https://drive.google.com/drive/folders/19dF_J9m7D1azSicfCtqNpzsw33RfOSSU?usp=drive_link"
								target="_blank"
								rel="noreferrer"
							>
								View Certificates
							</a>
						</div> */}
						<span className={styles.left_box_arrow}></span>
					</div>
				</div>
			</div>
		</div>
	);
};
