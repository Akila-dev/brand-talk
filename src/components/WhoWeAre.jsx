import { useRef } from "react";
import {
	motion,
	useScroll,
	useTransform,
	cubicBezier,
	circOut,
} from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant, slideIn, fadeIn } from "../utils/motion";

const WhoWeAre = () => {
	const container = useRef();
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});
	return (
		<div
			ref={container}
			style={{ perspective: "550px", transformStyle: "preserve-3d" }}
			className="container flex md:justify-center md:text-center section-pt"
		>
			<motion.div
				// variants={slideIn("top", "tween", 0.2, 1)}
				className="flex md:px-[3rem]"
			>
				<motion.div
					// variants={textVariant()}
					className="flex flex-col md:items-center"
				>
					<p className="section-subtext">About us</p>
					<h1 className="section-header">Who we are</h1>
					<motion.p
						// variants={fadeIn("", "", 0.1, 1)}
						className="mt-4 text-[15.5px] max-w-3xl leading-[27px] text-justify md:text-center"
					>
						Brandtalk Media is a boutique agency, specializing in public
						relations, social media and marketing located in Toronto, Canada.{" "}
						{/* <br /> */}
						<b className="inline-bloc py-2">
							Content is at the core of everything we create.
						</b>{" "}
						{/* <br /> */}
						We develop strategicand innovative campaigns that elevate brand
						visibility, engage target audiences, and drive measurable results
						while building brand reputations. With our client-centric approach,
						we collaborate closely to understand a brands unique needs,
						tailoring solutions to deliver maximum impact. We create innovative
						and unconventional concepts that disrupt industry standards and get
						people talking.
					</motion.p>
				</motion.div>
			</motion.div>

			{/* <motion.div
				// variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-screen xl:max-h-[680px] md:h-[550px] h-[300px] overflow-visible"
			>
				Hello
			</motion.div> */}
		</div>
	);
};

export default SectionWrapper(WhoWeAre, "about");
