import styles from "../Styles/About.module.css";
import { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const About = () => {
	const tiltRef = useRef(null);
	useEffect(() => {
		if (tiltRef.current) {
			VanillaTilt.init(tiltRef.current, {
				max: 25,
				speed: 400,
				reverse: true,
				glare: true,
				scale: 1.1,
				"max-glare": 0.8,
			});
		}
	}, []);
	const [text] = useTypewriter({
		words: [
			"Full Stack Developer",
			"ReactJs Developer",
			"Java Developer",
		],
		loop: {},
	});
	return (
		<div className={styles.container}>
			<div className={styles.about}>
				<p className={styles.name}>
					Hi, I am
					<br />
					Shresth Raj
				</p>
				<div className={styles.title}>
					I am a{" "}
					<span className={styles.typewriter}>
						{text}
						<Cursor />
					</span>
				</div>
				<div className={styles.bio}>
					I am a motivated and versatile individual, always eager to
					take on new challenges. With a passion for learning I am
					dedicated to delivering high-quality results. With a
					positive attitude and a growth mindset, I am ready to make a
					meaningful contribution and achieve great things.
				</div>
				<a
					href="https://drive.google.com/file/d/1ZwLi5skN6OpH8ICxC4BpGsNLA6rBzGAu/view?usp=sharing"
					target="_blank"
					rel="noreferrer"
					className={styles.resume}
				>
					Check Resume
				</a>
			</div>
			<img
				className={styles.mypic}
				ref={tiltRef}
				src={require("../Images/shresthprofile.jpeg")}
				alt="mypic"
			/>
		</div>
	);
};
