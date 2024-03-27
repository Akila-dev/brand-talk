import { useState, useRef, useEffect } from "react";
import {
	motion,
	useScroll,
	useTransform,
	cubicBezier,
	circOut,
} from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant, slideIn, fadeIn } from "../utils/motion";
import { PORTFOLIO } from "../utils/constants";

// import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

const WorkDetail = ({
	company,
	content,
	subheading,
	results,
	images,
	videos,
	index,
	list,
	postContent,
}) => {
	const [thumbsSwiper, setThumbsSwiper] = useState();

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
		offset: ["start end", "end end"],
	});

	const leftTranslate = useTransform(
		scrollYProgress,
		[0, 0.5],
		[screenSize.width > 700 ? -200 : -50, 0],
		{ ease: circOut }
	);
	const rightTranslate = useTransform(
		scrollYProgress,
		[0, 0.5],
		[screenSize.width > 700 ? 200 : 50, 0],
		{ ease: circOut }
	);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1], {
		ease: circOut,
	});

	return (
		<div ref={container} id={`portfolio${index}`} className="container">
			<div
				className={`gap-5 md:gap-[50px] lg:gap-[70px] overflow-hidde grid grid-cols-1 lg:grid-cols-2`}
			>
				<motion.div
					layout
					className={`${index % 2 ? "lg:order-1" : "lg:order-2"} col-span-1`}
					style={{
						x:
							screenSize.width > 700
								? index % 2
									? leftTranslate
									: rightTranslate
								: leftTranslate,
						opacity: opacity,
						scale: opacity,
					}}
				>
					<Swiper
						style={{
							"--swiper-navigation-color": "#fff",
							"--swiper-pagination-color": "#fff",
						}}
						spaceBetween={10}
						navigation={true}
						thumbs={{ swiper: thumbsSwiper }}
						modules={[FreeMode, Navigation, Thumbs]}
						className="swiper_container_2"
					>
						{images.map((img, i) => (
							<SwiperSlide key={i}>
								<img
									src={img}
									alt={company}
									className="w-full h-full object-cover rounded-xl shadow-card"
								/>
							</SwiperSlide>
						))}
						{videos.map((video, i) => (
							<SwiperSlide key={i}>
								<video width="320" height="240" controls className="">
									<source src={video.video} type={video.type} />
								</video>
							</SwiperSlide>
						))}
					</Swiper>
					<Swiper
						onSwiper={setThumbsSwiper}
						spaceBetween={10}
						slidesPerView={4}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs]}
						className="swiperThumbnails"
					>
						{images.map((img, i) => (
							<SwiperSlide key={i}>
								<img
									src={img}
									alt={company}
									className="w-full h-full object-cover rounded-xl shadow-card"
								/>
							</SwiperSlide>
						))}
						{videos.map((video, i) => (
							<SwiperSlide key={i}>
								<img
									src={video.thumbnail}
									alt={company}
									className="w-full h-full object-cover rounded-xl shadow-card"
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</motion.div>

				<motion.div
					layout
					className={`${
						index % 2 ? "lg:order-2" : "lg:order-1"
					} col-span-1 flex items-center`}
					style={{
						x:
							screenSize.width > 700
								? index % 2
									? rightTranslate
									: leftTranslate
								: rightTranslate,
						opacity: opacity,
						scale: opacity,
					}}
				>
					<motion.div variants={textVariant()} className="flex flex-col">
						<p className="section-subtext">our works</p>
						<h1 className="section-subhead">{company}</h1>
						<motion.p
							variants={fadeIn("", "", 0.1, 1)}
							className="mt-4 md:text-[15.5px] max-w-3xl leading-[27px] text-justify"
						>
							{content}
						</motion.p>
						{list && (
							<div>
								<ul className="flex flex-col gap-1 list-disc list-inside py-5">
									{list.map((content, index) => (
										<li key={index}>
											<span className="font-medium">{content}</span>
										</li>
									))}
								</ul>
								<p className="md:text-[15.5px] max-w-3xl leading-[27px] text-justify">
									{postContent}
								</p>
							</div>
						)}
						{subheading && <h3 className="pt-3 font-bold">{subheading}</h3>}
						{results && (
							<ul className="flex flex-col gap-1 pt-3">
								{results.map(({ title, value }, index) => (
									<li key={index}>
										<b className="font-medium">{title}:</b>{" "}
										<span className="font-light">{value}</span>
									</li>
								))}
							</ul>
						)}
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

const PreviousWorksDetails = () => {
	return (
		<div className="flex flex-col gap-5 md:gap-[50px] lg:gap-[70px] py-8 md:py-[50px]">
			{PORTFOLIO.map(
				(
					{
						company,
						content,
						subheading,
						results,
						images,
						videos,
						list,
						postContent,
					},
					i
				) => (
					<WorkDetail
						key={i}
						company={company}
						content={content}
						subheading={subheading}
						results={results}
						images={images}
						videos={videos}
						list={list}
						postContent={postContent}
						index={i}
					/>
				)
			)}
		</div>
	);
};

export default PreviousWorksDetails;
