import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { PreviousWorksDetails } from "../components";
import { PORTFOLIO } from "../utils/constants";
import { textVariant } from "../utils/motion";

import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";

import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { p11, p21, p31, p12, p22 } from "../assets/portfolio";

const OurWorks = () => {
	const swiperSlide = useSwiperSlide();
	return (
		<div>
			<div className="py-5 container">
				<motion.div
					variants={textVariant()}
					className=" flex flex-col items-center text-center w-full"
				>
					<p className="section-subtext">portfolio</p>
					<motion.h1 className="section-header">Our Works</motion.h1>
				</motion.div>

				<div className="relative">
					<motion.div className="bg-primary w-[250px] sm:w-[300px] h-[45px] md:h-[50px] rounded-[2rem] absolute top-7 left-[50%] translate-x-[-50%]"></motion.div>

					<Swiper
						effect={"coverflow"}
						grabCursor={true}
						centeredSlides={true}
						loop={true}
						slidesPerView={"auto"}
						coverflowEffect={{
							rotate: 0,
							stretch: 0,
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
						className="swiper_container"
					>
						{PORTFOLIO.map((data, index) => (
							<SwiperSlide key={index}>
								{({ isActive }) => (
									<a href={"#portfolio" + index}>
										<motion.div className="mb-10 flex items-center justify-center">
											<div
												className={` ${
													isActive
														? "rounded-[2rem] text-white"
														: "text-primary"
												}  p-3 text-xs lg:text-sm w-full max-w-[350px]`}
											>
												<h2 className="w-full text-gray-100 text-center">
													{data.company}
												</h2>
											</div>
										</motion.div>

										<img
											src={data.images[0] || p11}
											alt="slide_image"
											className="shadow-card"
										/>
									</a>
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
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default SectionWrapper(OurWorks, "portfolio");
