import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper.jsx";

import { textVariant } from "../utils/motion";

import {
	logo1,
	logo2,
	logo3,
	logo4,
	logo5,
	logo6,
	logo7,
	logo8,
	logo9,
	logo10,
	logo11,
	logo12,
} from "../assets/logos";

const Clients = ({ container }) => {
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [0, 2]);
	const opacity1 = useTransform(scrollYProgress, [0, 1], [1, 1]);
	const opacity01 = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

	const logos = [
		{
			src: logo1,
			x: "80%",
			y: "50%",
			// w: "20px",
			opacity: opacity1,
		},
		{
			src: logo2,
			x: 0,
			y: 0,
			// w: "20px",
			opacity: opacity01,
		},
		{
			src: logo3,
			x: 0,
			y: 0,
			// w: "20px",
			opacity: opacity01,
		},
		{
			src: logo4,
			x: 0,
			y: 0,
			// w: "20px",
			opacity: opacity01,
		},
		{
			src: logo5,
			x: 0,
			y: 0,
			// w: "20px",
			opacity: opacity01,
		},
		{
			src: logo6,
			x: 0,
			y: 0,
			// w: "20px",
			opacity: opacity01,
		},
		{
			src: logo7,
			x: 0,
			y: 0,
			// w: "20px",
			opacity: opacity01,
		},
		{
			src: logo8,
			x: 0,
			y: 0,
			// w: "20px",
			opacity: opacity01,
		},
		{
			src: logo9,
			x: 0,
			y: 0,
			// w: "20px",
			opacity: opacity01,
		},
		{
			src: logo10,
			x: 0,
			y: 0,
			// w: "20px",
			opacity: opacity01,
		},
		{
			src: logo11,
			x: 0,
			y: 0,
			// w: "20px",
			opacity: opacity01,
		},
		{
			src: logo12,
			x: 0,
			y: 0,
			// w: "20px",
			opacity: opacity01,
		},
	];
	return (
		<div className="sticky top-0 w-full h-[100vh]">
			<div className="absolute top-0 h-full w-full">
				<div className="relative container h-screen section-py">
					<motion.div
						variants={textVariant()}
						className="flex flex-col items-center text-center w-full"
					>
						<p className="section-subtext">Our Clients</p>
						<motion.h1 className="section-header">Clients</motion.h1>
					</motion.div>

					<div className="h-full w-full ">
						<div className="w-full h-full relative">
							{logos.map(({ src, x, y, opacity }, index) => (
								<motion.div
									className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
									key={index}
									style={{
										opacity,
										scale: opacity,
										translateX: "-50%",
										translateY: "-50%",
									}}
								>
									<img
										src={src}
										alt={"client " + index}
										className="object-cover"
									/>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionWrapper(Clients, "clients");
