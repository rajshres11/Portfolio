import React, { useEffect } from "react";
import styles from "../Styles/Timeline.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Education = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, offset: 200 });
	}, []);

	return (
		<div className={styles.container}>
			<p className={styles.heading}>Education</p>
			<p className={styles.desc}>
				The academic institutions and programs that have contributed to
				my knowledge and growth.
			</p>
			<div className={styles.timeline}>
				<div className={`${styles.box} ${styles.left_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/aktu1.png")}
						alt="brabu"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<p className={styles.title}>
							Bachelor of technology (Computer Science Engineering)
						</p>
						<p className={styles.subtitle}>
							University: Aktu, Lucknow
						</p>
						<p className={styles.description}>
							Graduated with 68% marks in 2020 from IILM CET,
							Greater Noida. This degree provided a strong foundation
							in computer science, enhancing my
							technical skills.
						</p>
						<span className={styles.left_box_arrow}></span>
					</div>
				</div>
				<div className={`${styles.box} ${styles.right_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/bbose.jpeg")}
						alt="bseb"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<p className={styles.title}>
							Intermediate of Science
						</p>
						<p className={styles.subtitle}>Board: BBOSE, Patna</p>
						<p>
							Completed with 71% marks in 2019. Focused on advanced science
							subjects, preparing me for higher education and a
							career in technical field.
						</p>
						<span className={styles.right_box_arrow}></span>
					</div>
				</div>
				<div className={`${styles.box} ${styles.left_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/cbsce.jpeg")}
						alt="bseb"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<p className={styles.title}>Matriculation</p>
						<p className={styles.subtitle}>Board: CBSE, Delhi</p>
						<p>
							Achieved 88% marks in 2016 from St.Xavier's jr/sr School,
							Muzaffarpur. This stage of education laid the
							groundwork for my academic journey, emphasizing core
							subjects and essential skills.
						</p>
						<span className={styles.left_box_arrow}></span>
					</div>
				</div>
			</div>
		</div>
	);
};
