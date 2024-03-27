import { useEffect, useRef } from "react";

import BallCanvas from "./canvas/BallCanvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { LOGOS } from "../utils/constants";
import Header from "./Header";
import {
	animate,
	motion,
	useMotionValue,
	useScroll,
	useTransform,
} from "framer-motion";
import useMeasure from "react-use-measure";

// import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import {
// 	Autoplay,
// 	EffectCoverflow,
// 	Pagination,
// 	Navigation,
// } from "swiper/modules";

const Clients = () => {
	// const swiperSlide = useSwiperSlide();
	let [ref, { width }] = useMeasure();
	const container = useRef();

	// const xTranslation = useMotionValue(0);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const xTranslation = useTransform(
		scrollYProgress,
		[0, 1],
		[0, -width / 4 - 8]
	);
	// console.log(scrollYProgress);

	// useEffect(() => {
	// 	let controls;
	// 	let finalPosition = -width / 2 - 8;

	// 	controls = useTransform((scrollYProgress, [0, 1], [0, finalPosition]));

	// 	// controls = animate(xTranslation, [0, finalPosition], {
	// 	// 	ease: "linear",
	// 	// 	duration: 25,
	// 	// 	repeat: Infinity,
	// 	// 	repeatType: "loop",
	// 	// 	repeatDelay: 0,
	// 	// });

	// 	return controls.stop;
	// }, [xTranslation, width, scrollYProgress]);

	return (
		<div className="container section-py-min relative">
			<div ref={container} className="absolute top-0 w-full h-screen"></div>
			<div className="green-orange-gradien p-[1px] rounded-2xl overflow-x-hidde h-[200px] md:h-[250px]">
				<div className="w-full py-5 md:py-[25px] rounded-2xl bg- text-white-100 space-y-5 md:space-y-10">
					<Header heading="Clients" subheading="Our clients" />

					<div className="w-full relative">
						<motion.div
							ref={ref}
							style={{ translateX: xTranslation }}
							className="flex gap-2 pointer-events-none absolute top-0 left-0"
						>
							{[...LOGOS, ...LOGOS].map((logo, index) => (
								<motion.div
									className="min-w-[100px] w-[100px] h-[100px] px-3 pointer-events-none"
									key={index}
								>
									{/* <BallCanvas icon={logo} /> */}
									<img
										src={logo}
										className="object-contain w-full h-full pointer-events-none"
									/>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionWrapper(Clients, "clients");
