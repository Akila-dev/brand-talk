import React from "react";

import BallCanvas from "./canvas/BallCanvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { LOGOS } from "../utils/constants";

import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
	Autoplay,
	EffectCoverflow,
	Pagination,
	Navigation,
} from "swiper/modules";

const Clients = () => {
	const swiperSlide = useSwiperSlide();

	return (
		<div className="container section-py-min">
			<div className="green-orange-gradien p-[1px] rounded-2xl">
				<div
					// variants={slideIn("up", "tween", 0.2, 1)}
					className="w-full containe py-5 md:py-[25px] rounded-2xl bg- text-white-100 space-y-5 md:space-y-10"
				>
					<div className="flex flex-col items-center text-center w-full overflow-hidden container">
						<p className="section-subtext">our clients</p>
						<h1 className="section-header">Clients</h1>
					</div>

					<Swiper
						grabCursor={false}
						centeredSlides={false}
						loop={true}
						slidesPerView={"auto"}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						modules={[Autoplay]}
						className="logo-swiper-container"
					>
						{LOGOS.map((logo, index) => (
							<SwiperSlide key={index}>
								<div className="w-full h-full px-3" key={index}>
									{/* <BallCanvas icon={logo} /> */}
									<img src={logo} className="object-contain w-full h-full" />
								</div>
							</SwiperSlide>
						))}

						{/* <div className="slider-controler flex justify-center items-center">
						<button className="swiper-button-prev slider-arrow shadow-card">
							<IoArrowBackOutline className="bg-white shadow-card p-[10px] rounded-full" />
						</button>
						<div className="swiper-pagination"></div>
						<button className="swiper-button-next slider-arrow shadow-card">
							<IoArrowForward className="bg-white shadow-card p-[10px] rounded-full" />
						</button>
					</div> */}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default SectionWrapper(Clients, "clients");
