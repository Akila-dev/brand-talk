import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant, slideIn, fadeIn } from "../utils/motion";
import { PORTFOLIO } from "../utils/constants";

import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const WorkDetail = ({
	company,
	content,
	subheading,
	results,
	images,
	videos,
	index,
}) => (
	<div className="container">
		{/* Hello */}
		<div
			className={`gap-8 md:gap-[50px] lg:gap-[70px] overflow-hidde grid grid-cols-1 lg:grid-cols-2`}
		>
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className={`${
					index % 2 ? "lg:order-1" : "lg:order-2"
				} col-span-1 h-[250px] lg:h-[80vh] max-h-[650px]`}
			>
				<img
					src={images[0]}
					alt={company}
					className="w-full h-full object-cover rounded-xl shadow-card"
				/>
				{/* <Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					loop={true}
					slidesPerView={"auto"}
					coverflowEffect={{
						rotate: 0,
						stretch: 1,
						depth: 100,
						modifier: 2.5,
					}}
					pagination={{ el: ".swiper-pagination", clickable: true }}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
						clickable: true,
					}}
					modules={[EffectCoverflow, Pagination, Navigation]}
					className="h-[250px] lg:h-[90vh] max-h-[700px]"
				>
					{images.map((img, index) => (
						<SwiperSlide key={index}>
							{({ isActive }) => (
								<img
									src={img}
									alt={"our works"}
									className="!w-[300px] md:!w-[450px] !h-[250px] lg:!h-[80vh] !max-h-[650px] object-cover rounded-xl shadow-card"
								/>
							)}
						</SwiperSlide>
					))}

					<div className="slider-controler flex justify-center items-center">
						<button className="swiper-button-prev slider-arrow shadow-card">
							<IoArrowBackOutline className="bg-white shadow-card p-[10px] rounded-full" />
						</button>
						<div className="swiper-pagination"></div>
						<button className="swiper-button-next slider-arrow shadow-card">
							<IoArrowForward className="bg-white shadow-card p-[10px] rounded-full" />
						</button>
					</div>
				</Swiper> */}
			</motion.div>

			<motion.div
				variants={slideIn("top", "tween", 0.2, 1)}
				className={`${
					index % 2 ? "lg:order-2" : "lg:order-1"
				} col-span-1 flex items-center`}
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

const PreviousWorksDetails = () => {
	return (
		<div className="flex flex-col gap-10 md:gap-[50px] lg:gap-[70px] py-8 md:py-[50px]">
			{PORTFOLIO.map(
				({ company, content, subheading, results, images, videos }, i) => (
					<WorkDetail
						key={i}
						company={company}
						content={content}
						subheading={subheading}
						results={results}
						images={images}
						videos={videos}
						index={i}
					/>
				)
			)}
		</div>
	);
};

export default PreviousWorksDetails;
