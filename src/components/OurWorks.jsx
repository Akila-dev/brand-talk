import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { PreviousWorksDetails, Header } from "../components";
import { PORTFOLIO } from "../utils/constants";
import { textVariant } from "../utils/motion";

import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";

import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import {
	Autoplay,
	EffectCoverflow,
	Pagination,
	FreeMode,
	Navigation,
	Thumbs,
} from "swiper/modules";
import { p11, p21, p31, p12, p22 } from "../assets/portfolio";

const OurWorks = () => {
	const swiperSlide = useSwiperSlide();
	const [companyNameSlider, setCompanyNameSlider] = useState();
	return (
		<div>
			<div className="pt-5 container">
				<Header heading="Our Works" subheading="Portfolio" />

				<div className="relative">
					{/* <motion.div className="bg-primary w-[250px] sm:w-[300px] h-[45px] md:h-[50px] rounded-[2rem] absolute top-7 left-[50%] translate-x-[-50%]"></motion.div> */}

					<Swiper
						direction={"vertical"}
						onSwiper={setCompanyNameSlider}
						className="bg-primary w-[250px] sm:w-[300px] h-[45px] md:h-[50px] rounded-[2rem] mt-5 mb-3"
					>
						{PORTFOLIO.map((data, index) => (
							<SwiperSlide key={index} className="p-0 m-0 h-auto">
								<a href={"#portfolio" + index}>
									<div className="flex items-center justify-center">
										<div
											className={`p-4 text-xs lg:text-sm w-full max-w-[350px]`}
										>
											<h2 className="w-full text-gray-100 text-center">
												{data.company}
											</h2>
										</div>
									</div>
								</a>
							</SwiperSlide>
						))}
						{/* {PORTFOLIO.map((data, index) => (
							<SwiperSlide key={index} className="p-0 m-0 h-auto">
								<a href={"#portfolio" + index}>
									<div className="flex items-center justify-center">
										<div
											className={`p-4 text-xs lg:text-sm w-full max-w-[350px]`}
										>
											<h2 className="w-full text-gray-100 text-center">
												{data.company}
											</h2>
										</div>
									</div>
								</a>
							</SwiperSlide>
						))} */}
					</Swiper>

					<Swiper
						effect={"coverflow"}
						grabCursor={false}
						centeredSlides={true}
						loop={true}
						slidesPerView={"auto"}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
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
						thumbs={{ swiper: companyNameSlider }}
						modules={[
							Autoplay,
							EffectCoverflow,
							Pagination,
							FreeMode,
							Navigation,
							Thumbs,
						]}
						className="swiper_container"
					>
						{PORTFOLIO.map((data, index) => (
							<SwiperSlide key={index}>
								{({ isActive }) => (
									<a href={"#portfolio" + index}>
										<img
											src={data.images[0] || p11}
											alt="slide_image"
											className="shadow-card"
										/>
									</a>
								)}
							</SwiperSlide>
						))}
						{/* {PORTFOLIO.map((data, index) => (
							<SwiperSlide key={index}>
								{({ isActive }) => (
									<a href={"#portfolio" + index}>
										<img
											src={data.images[0] || p11}
											alt="slide_image"
											className="shadow-card"
										/>
									</a>
								)}
							</SwiperSlide>
						))} */}

						<div className="slider-controler flex justify-center items-center">
							<div className="swiper-pagination"></div>
							<button className="swiper-button-prev slider-arrow shadow-card">
								<IoArrowBackOutline className="bg-white shadow-card p-[10px] rounded-full text-brand" />
							</button>
							<button className="swiper-button-next slider-arrow shadow-card">
								<IoArrowForward className="bg-white shadow-card p-[10px] rounded-full text-brand" />
							</button>
						</div>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default SectionWrapper(OurWorks, "portfolio");
