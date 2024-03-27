import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import leftCover from "../assets/left.png";
import rightCover from "../assets/right.png";

import logo from "../assets/brandtalk-white.png";

import logoLeft from "../assets/logo-w-l.png";
import logoRight from "../assets/logo-w-r.png";

import hero from "../assets/hero.jpg";
import sky from "../assets/sky.jpg";
import mountains from "../assets/parallax-3.png";
import palmtrees from "../assets/parallax-2.png";
import lady from "../assets/parallax-1.jpg";

const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

const Hero1 = () => {
	const [screenSize, setScreenSize] = useState(getWindowsDimension());
	useEffect(() => {
		const handleResize = () => {
			setScreenSize(getWindowsDimension());
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});
	const translateLeft = useTransform(
		scrollYProgress,
		[0, 1],
		[0, -screenSize.width / 1.5]
	);

	const translateRight = useTransform(
		scrollYProgress,
		[0, 1],
		[0, screenSize.width / 1.5]
	);

	const parallax1 = useTransform(
		scrollYProgress,
		[0, 0.8],
		[200, -screenSize.height / 2.5]
	);
	const parallax2 = useTransform(
		scrollYProgress,
		[0.4, 0.8],
		[50, -screenSize.height / 2]
	);

	const scaleLR = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
	const scaleParallax = useTransform(scrollYProgress, [0, 0.8], [1, 1.25]);
	const scaleText = useTransform(scrollYProgress, [0, 0.8], [0.5, 1]);
	const textOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

	const scaleParallax1 = useTransform(scrollYProgress, [0, 0.8], [1, 1.25]);
	const scaleParallax1SM = useTransform(scrollYProgress, [0, 0.8], [1, 1.45]);
	const translateParalax1 = useTransform(
		scrollYProgress,
		[0, 0.8],
		[0, screenSize.height / 15]
	);

	return (
		<div ref={container} className="relative h-[400vh] lg:h-[300vh]">
			<div className="h-[100vh] w-full bg-gray-100 sticky top-0 overflow-hidden">
				<div className="relative w-full h-full">
					<div className="w-full h-full">
						<img
							src={sky}
							alt="hero"
							className="h-screen w-full object-cover object-top"
						/>
					</div>
					{/* parralax */}
					<motion.div
						style={{ translateY: parallax2, scale: scaleParallax }}
						className="absolute top-[50%] w-full h-full"
					>
						<img
							src={mountains}
							alt="hero"
							className="h-full w-full object-cover object-bottom"
						/>
					</motion.div>
					<motion.div
						style={{ translateY: parallax1, scale: scaleParallax }}
						className="absolute top-[50%] w-full h-full"
					>
						<img
							src={palmtrees}
							alt="hero"
							className="h-full w-full object-cover object-center"
						/>
					</motion.div>

					<motion.div
						style={{ scale: scaleParallax }}
						className="absolute bottom-0 w-full h-[25vh] lg:h-[200px]"
					>
						<div className="h-full w-full">
							<img
								src={lady}
								alt="hero"
								className="h-full w-full object-cover object-center"
							/>
						</div>
					</motion.div>
					{/* <motion.div
						style={{ scale: scaleText, opacity: textOpacity }}
						className="absolute bottom-0 w-full h-full flex items-center justify-center"
					>
						<div className="container text-center flex flex-col items-center gap-5">
							<h1 className="text-[10vw] md:text-[8vw] leading-[115%] lg:text-6xl font-bolden max-w-[900px] mx-auto text-center text-white uppercase drop-shadow-2xl px-3">
								Cultivating the art of story telling to build brands
							</h1>
							<a
								href="#about"
								className="bg-brand text-white rounded-[2rem] px-7 py-2 shadow-card font-regular text-sm md:text-[15.5px]"
							>
								Learn More
							</a>
						</div>
					</motion.div> */}
				</div>

				{/* Cover */}
				<div className="absolute h-screen top-0 left-0 w-full flex z-[100000000000] gap-[20px] lg:gap-[70px] pointer-events-none">
					<motion.div
						style={{ translateX: translateLeft, scale: scaleLR }}
						className="h-full w-full flex-1 relative"
					>
						<img
							src={leftCover}
							alt="hero cover"
							className="h-full w-full object-cover object-right"
						/>
						<div className="absolute right-8 md:right-[70px] top-[50%] translate-y-[-50%] h-[15vw] md:h-[12vw] lg:h-[125px]">
							<img
								src={logoLeft}
								alt="hero cover logo"
								className="object-contain h-full"
							/>
						</div>
					</motion.div>
					<motion.div
						style={{ translateX: translateRight, scale: scaleLR }}
						className="h-full w-full flex-1 relative"
					>
						<img
							src={rightCover}
							alt="hero cover"
							className="h-full w-full object-cover object-left"
						/>
						<div className="absolute left-10 md:left-[70px] top-[50%] translate-y-[-50%] h-[15vw] md:h-[12vw] lg:h-[125px]">
							<img
								src={logoRight}
								alt="hero cover logo"
								className="object-contain h-full"
							/>
						</div>
					</motion.div>
					{/* <div className="h-full w-full flex-1">
						<img
							src={rightCover}
							alt="hero cover"
							className="h-full w-full object-cover"
						/>
					</div> */}
				</div>
			</div>
		</div>
	);
};

const Hero2 = () => {
	return <div>Hero2</div>;
};

const Hero = () => {
	return (
		<div>
			<Hero1 />
			{/* <Hero2 /> */}
		</div>
	);
};

export default Hero;
