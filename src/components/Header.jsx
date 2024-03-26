import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Header = ({ heading, subheading }) => {
	return (
		<motion.div
			variants={textVariant()}
			className=" flex flex-col items-center text-center w-full"
		>
			<p className="section-subtext">{subheading}</p>
			<motion.h1 className="section-header capitalize">{heading}</motion.h1>
		</motion.div>
	);
};

export default Header;
