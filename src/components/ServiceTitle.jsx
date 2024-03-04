import React, { useRef } from "react";
// import styles from './style.module.scss';
import {
	useScroll,
	motion,
	useTransform,
	useMotionTemplate,
} from "framer-motion";

const ServiceText = ({ data, setSelectedService }) => {
	return (
		<div className="container">
			<div className="service-titles">
				{data.map((service, i) => {
					return (
						<Title
							key={i}
							data={{ ...service, i }}
							setSelectedService={setSelectedService}
						/>
					);
				})}
			</div>
		</div>
	);
};

function Title({ data, setSelectedService }) {
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
		<div className="">
			<motion.div
				ref={container}
				className={`service-title overflow-hidden pl-2`}
			>
				<div
					className={`service-wrapper w-full`}
					onMouseOver={() => setSelectedService(i)}
					onMouseLeave={() => setSelectedService(null)}
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
