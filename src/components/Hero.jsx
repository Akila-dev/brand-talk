import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import leftCover from "../assets/left.png";
import rightCover from "../assets/right.png";

import logoLeft from "../assets/logo-w-l.png";
import logoRight from "../assets/logo-w-r.png";

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

	const scaleLR = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

	return (
		<div ref={container} className="relative h-[300vh]">
			<div className="h-[100vh] w-full bg-red-100 sticky top-0 overflow-hidden">
				{/* Cover */}
				<div className="absolute h-screen top-0 left-0 w-full flex z-[100000000000] gap-[70px]">
					<motion.div
						style={{ translateX: translateLeft, scale: scaleLR }}
						className="h-full w-full flex-1 relative"
					>
						<img
							src={leftCover}
							alt="hero cover"
							className="h-full w-full object-cover"
						/>
						<div className="absolute right-[70px] top-[50%] translate-y-[-50%] h-[125px]">
							<img
								src={logoLeft}
								alt="hero cover logo"
								className="object-cover h-full"
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
							className="h-full w-full object-cover"
						/>
						<div className="absolute left-[70px] top-[50%] translate-y-[-50%] h-[125px]">
							<img
								src={logoRight}
								alt="hero cover logo"
								className="object-cover h-full"
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
	return <Hero1 />;
};

export default Hero;
