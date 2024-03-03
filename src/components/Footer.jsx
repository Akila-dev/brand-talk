import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn, fadeIn, textVariant } from "../utils/motion";

import { SiMaildotru } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";

// import { navLinks } from "../constants";

const Footer = () => {
	const [active, setActive] = useState("");

	return (
		<div className="w-full h-full flex items-center px-3 md:px-[3rem] md:py-4">
			<motion.div
				variants={slideIn("up", "tween", 0.2, 1)}
				className="w-full p-3 md:p-5 rounded-2xl bg-primary text-white lg:grid grid-cols-5 shadow-card h-[65px] text-sm"
			>
				<div>hh</div>
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Footer, "contact");
