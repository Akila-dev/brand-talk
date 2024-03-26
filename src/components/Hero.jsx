import { useRef, useState, useEffect } from "react";
import {
	motion,
	useScroll,
	useTransform,
	cubicBezier,
	circOut,
} from "framer-motion";

import leftCover from "../assets/left.png";
import rightCover from "../assets/right.png";

import logo from "../assets/brandtalk-white.png";

import logoLeft from "../assets/logo-w-l.png";
import logoRight from "../assets/logo-w-r.png";

// import hero from "../assets/hero.jpg";
import sky from "../assets/sky.jpg";
// import mountains from "../assets/parallax-3.png";
// import palmtrees from "../assets/parallax-2.png";
// import lady from "../assets/parallax-1.jpg";

import {
	parallax1,
	parallax2,
	parallax3,
	parallax4,
	parallax5,
	parallax6,
	parallax7,
	parallaxBg,
	woman,
} from "../assets/parallax";

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
		[0, -screenSize.width / 1.5],
		{ ease: cubicBezier(0.17, 0.57, 0.83, 0.57) }
		// { ease: circOut }
	);
	const translateRight = useTransform(
		scrollYProgress,
		[0, 1],
		[0, screenSize.width / 1.5],
		{ ease: cubicBezier(0.17, 0.57, 0.83, 0.57) }
		// { ease: circOut }
	);

	// PARALLAX
	const parallaxSlideIn1 = useTransform(
		scrollYProgress,
		[0, 0.15],
		[(screenSize.height * 75) / 100, 0],
		{ ease: circOut }
	);
	const parallaxSlideIn2 = useTransform(
		scrollYProgress,
		[0, 0.25],
		[(screenSize.height * 75) / 100, 0],
		{ ease: circOut }
	);
	const parallaxSlideIn3 = useTransform(
		scrollYProgress,
		[0, 0.35],
		[(screenSize.height * 75) / 100, 0],
		{ ease: circOut }
	);
	const parallaxSlideIn4 = useTransform(
		scrollYProgress,
		[0, 0.25],
		[(screenSize.height * 75) / 100, 0],
		{ ease: circOut }
	);
	const parallaxSlideIn5 = useTransform(
		scrollYProgress,
		[0, 0.45],
		[(screenSize.height * 75) / 100, 0],
		{ ease: circOut }
	);
	const parallaxSlideIn6 = useTransform(
		scrollYProgress,
		[0, 0.55],
		[(screenSize.height * 75) / 100, 0],
		{ ease: circOut }
	);
	const parallaxSlideIn7 = useTransform(
		scrollYProgress,
		[0, 0.65],
		[(screenSize.height * 75) / 100, 0],
		{ ease: circOut }
	);
	// const parallaxSlideInBg = useTransform(
	// 	scrollYProgress,
	// 	[0, 0.85],
	// 	[(screenSize.height * 75) / 100, 0]
	// );

	const scaleLR = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

	const scaleText = useTransform(scrollYProgress, [0, 0.8], [0.5, 1]);
	const textOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

	// PARALLAX
	const z = useTransform(scrollYProgress, [0, 0.8], [1, 120]);
	const zMobile = useTransform(scrollYProgress, [0, 0.8], [1, 150]);
	const bgOpacity = useTransform(scrollYProgress, [0, 0.65, 0.85], [0, 0, 1]);

	const opacity1 = useTransform(scrollYProgress, [0, 0, 0.15], [0, 0, 1], {
		ease: circOut,
	});
	const opacity2 = useTransform(scrollYProgress, [0, 0.1, 0.25], [0, 0, 1], {
		ease: circOut,
	});
	const opacity3 = useTransform(scrollYProgress, [0, 0.2, 0.35], [0, 0, 1], {
		ease: circOut,
	});
	const opacity4 = useTransform(scrollYProgress, [0, 0.1, 0.25], [0, 0, 1], {
		ease: circOut,
	});
	const opacity5 = useTransform(scrollYProgress, [0, 0.3, 0.45], [0, 0, 1], {
		ease: circOut,
	});
	const opacity6 = useTransform(scrollYProgress, [0, 0.4, 0.55], [0, 0, 1], {
		ease: circOut,
	});
	const opacity7 = useTransform(scrollYProgress, [0, 0.5, 0.65], [0, 0, 1], {
		ease: circOut,
	});

	const parallax = [
		// {
		// 	img: parallaxBg,
		// 	translateZ: z,
		// 	translateZMobile: zMobile,
		// 	parallaxSlideIn: parallaxSlideInBg,
		// },
		{
			img: parallax7,
			translateZ: z,
			translateZMobile: zMobile,
			parallaxSlideIn: parallaxSlideIn7,
			opacity: opacity7,
		},
		{
			img: parallax6,
			translateZ: z,
			translateZMobile: zMobile,
			parallaxSlideIn: parallaxSlideIn6,
			opacity: opacity6,
		},
		{
			img: parallax5,
			translateZ: z,
			translateZMobile: zMobile,
			parallaxSlideIn: parallaxSlideIn5,
			opacity: opacity5,
		},
		{
			img: parallax4,
			translateZ: z,
			translateZMobile: zMobile,
			parallaxSlideIn: parallaxSlideIn4,
			opacity: opacity4,
		},
		{
			img: parallax3,
			translateZ: z,
			translateZMobile: zMobile,
			parallaxSlideIn: parallaxSlideIn3,
			opacity: opacity3,
		},
		{
			img: parallax2,
			translateZ: z,
			translateZMobile: zMobile,
			parallaxSlideIn: parallaxSlideIn2,
			opacity: opacity2,
		},
		{
			img: parallax1,
			translateZ: z,
			translateZMobile: zMobile,
			parallaxSlideIn: parallaxSlideIn1,
			opacity: opacity1,
		},
	];

	return (
		<div ref={container} className="relative h-[300vh] lg:h-[300vh]">
			<div className="h-[100vh] w-full bg-gray-100 sticky top-0 overflow-hidden">
				<div
					className="relative w-full h-full"
					style={{ perspective: "550px", transformStyle: "preserve-3d" }}
				>
					<div className="w-full h-full">
						<img
							src={sky}
							alt="hero"
							className="h-screen w-full object-cover object-top"
						/>
					</div>
					<motion.div
						layout
						style={{
							opacity: bgOpacity,
							translateZ: screenSize.width > 740 ? z : zMobile,
						}}
						className="absolute bottom-[10vh] lg:bottom-[25vh] w-full h-[90vh] lg:h-[75vh]"
					>
						<div className="h-full w-full">
							<img
								src={parallaxBg}
								alt="hero"
								className="h-full w-full object-cover object-top"
							/>
						</div>
					</motion.div>
					{parallax.map(
						(
							{ img, translateZ, translateZMobile, parallaxSlideIn, opacity },
							i
						) => (
							<motion.div
								layout
								key={i}
								style={{
									translateZ:
										screenSize.width > 740 ? translateZ : translateZMobile,
									// opacity,
									translateY: parallaxSlideIn,
								}}
								className="absolute bottom-[10vh] lg:bottom-[25vh] w-full h-[90vh] lg:h-[75vh]"
							>
								<img
									src={img}
									alt="hero"
									className="h-full w-full object-cover object-top"
								/>
							</motion.div>
						)
					)}

					<motion.div
						layout
						style={{
							translateZ: screenSize.width > 740 ? z : zMobile,
						}}
						className="absolute bottom-0 w-full h-[55vh] lg:h-[55vh] scale-95"
					>
						<div className="h-full w-full">
							<img
								src={woman}
								alt="hero"
								className="h-full w-full object-cover object-top"
							/>
						</div>
					</motion.div>
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
