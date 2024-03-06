import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant, slideIn, fadeIn } from "../utils/motion";
import { PORTFOLIO } from "../utils/constants";

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
