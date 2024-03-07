import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn, fadeIn, textVariant } from "../utils/motion";

import { SiMaildotru, SiInstagram } from "react-icons/si";
import { BsTwitterX, BsFacebook } from "react-icons/bs";
import { FaFacebookF, FaArrowRight } from "react-icons/fa6";
import { TbMapPin } from "react-icons/tb";
import { SlGlobe } from "react-icons/sl";
// import { navLinks } from "../constants";

import logo from "../assets/brandtalk-white.png";

const Footer = () => {
	const [active, setActive] = useState("");

	return (
		<div className="w-full flex items-center px-4 md:px-[3rem] pb-4 md:py-4">
			<motion.div
				variants={slideIn("up", "tween", 0.2, 1)}
				className="w-full container py-10 md:py-[50px] rounded-2xl bg-primary text-white-100 grid grid-cols-1 lg:grid-cols-8 shadow-card text-sm gap-10 md:gap-10"
			>
				<div className="flex flex-col gap-5 text-white-100 font-regular lg:col-span-3">
					<div>
						<img
							src={logo}
							alt="brand talk media"
							className="h-[35px] object-cover"
						/>
					</div>
					<p className=" gap-1 items-top text-white-100">
						{/* <TbMapPin className="text-brand text-xl  w-[20px] inline-block" />{" "} */}
						Cultivating the art of storytelling to build brands
					</p>
					<h2 className="pb-2">
						Work with us{" "}
						<FaArrowRight className="text-brand  w-[20px] inline-block" />{" "}
					</h2>
				</div>
				<div className="flex lg:justify-center lg:items-center lg:col-span-3">
					<div className="flex flex-col gap-3 text-white-100 font-regular">
						<p className=" gap-1 items-center text-white-100">
							<TbMapPin className="text-brand text-xl  w-[20px] inline-block" />{" "}
							18 King St East 14th Floor, Toronto Ontario, M5H 1A1
						</p>
						<a
							className="gap-2  font-regular"
							href="mailto=info@brandtalkmedia.com"
						>
							<SiMaildotru className="text-brand text-lg  w-[20px] inline-block" />{" "}
							info@brandtalkmedia.com
						</a>
						<a className="gap-2  font-regular" href="brandtalkmedia.com">
							<SlGlobe className="text-brand text-lg  w-[20px] inline-block" />{" "}
							brandtalkmedia.com
						</a>
					</div>
				</div>
				<div className="flex lg:justify-end lg:col-span-2 lg:items-center">
					<div className="flex flex-col gap-4">
						<h2 className="textxl pb-2">SOCIAL MEDIA</h2>
						<div className="flex items-center lg:justify-end gap-3">
							<a
								href="https://www.instagram.com/brandtalkmedia"
								target="_blank"
								className="rounded-md bg-white-100 text-black-100 w-[50px] h-[50px] flex items-center justify-center hover:bg-brand hover:text-white-100"
							>
								<SiInstagram className="text-xl" />
							</a>
							<a
								href="https://www.facebook.com/brandtalkmedia"
								target="_blank"
								className="rounded-md bg-white-100 text-black-100 w-[50px] h-[50px] flex items-center justify-center hover:bg-brand hover:text-white-100"
							>
								<FaFacebookF className="text-xl" />
							</a>
							<a
								href="https://x.com/brandtalkmedia"
								target="_blank"
								className="rounded-md bg-white-100 text-black-100 w-[50px] h-[50px] flex items-center justify-center hover:bg-brand hover:text-white-100"
							>
								<BsTwitterX className="text-xl" />
							</a>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Footer, "contact");
