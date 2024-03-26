import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
// import { Contact } from "../components";

const SectionWrapper = (Component, idName) =>
	function HOC() {
		return (
			<motion.section
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.45 }}
				className={`overflow-hidden relative z-0`}
			>
				<span className="hash-span" id={idName}>
					&nbsp;
				</span>

				<Component />

				{/* <Contact /> */}
			</motion.section>
		);
	};

export default SectionWrapper;
