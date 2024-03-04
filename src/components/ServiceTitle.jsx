import React, { useRef } from "react";
// import styles from './style.module.scss';
import {
	useScroll,
	motion,
	useTransform,
	useMotionTemplate,
} from "framer-motion";

const ServiceText = ({ data, selectedService }) => {
	return (
		<div className="service-titles">
			{data.map((project, i) => {
				return (
					<Title
						key={i}
						data={{ ...project, i }}
						setSelectedProject={selectedService}
					/>
				);
			})}
		</div>
	);
};

function Title({ data, selectedService }) {
	const { title, speed, i } = data;

	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,

		offset: ["start end", `${15 / speed}vh end`],
	});

	const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

	const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

	return (
		<div className="container">
			<motion.div
				ref={container}
				className={`service-title w-full overflow-hidden pl-2`}
			>
				<div
					className={`service-wrapper`}
					onMouseOver={() => {
						() => selectedService(i);
					}}
					onMouseLeave={() => {
						() => selectedService(null);
					}}
				>
					<motion.p
						className="service-clipped text-shadow w-full"
						style={{ clipPath: clip }}
					>
						{title}
					</motion.p>

					<p className="text-shadow w-full" style={{ scale }}>
						{title}
					</p>
				</div>
			</motion.div>
		</div>
	);
}

export default ServiceText;
