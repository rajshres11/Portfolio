import styles from "../Styles/About.module.css";
import { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import myPic from "../Images/shresthprofile-removebg.png";

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
		words: ["Full Stack Developer", "React Enthusiast"],
		loop: true,
	});

	return (
		<div className={styles.container}>
			<div className={styles.about}>
				<p className={styles.name}>
					Hi, I am <br />
					Shresth Raj
				</p>

				<p className={styles.typewriter}>
					I am a <span>{text}</span>
					<Cursor />
				</p>

				<div className={styles.bio}>
					I am a passionate Full Stack Developer dedicated to building robust, scalable, and user-centric web applications. I enjoy working across the stack, from designing intuitive user interfaces to architecting efficient backend systems. Proficient in technologies like React.js, JavaScript, Node.js, and Firebase, I thrive on solving complex problems, optimizing performance, and collaborating with teams to turn ideas into reliable, production-ready solutions. With a growth mindset and a strong attention to detail, I aim to deliver applications that are not only functional and performant but also maintainable and accessible. Let’s create something impactful together.
				</div>

				<a
					href="https://drive.google.com/file/d/1pHIilS6qy5GX0NcyqF0aZYwSYXJTSk_4/view?usp=drive_link"
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
				src={myPic}
				alt="mypic"
			/>
		</div>
	);
};
