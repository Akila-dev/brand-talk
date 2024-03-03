import { useState, useEffect, useRef } from "react";
import {
	Navbar,
	Hero,
	WhoWeAre,
	Services,
	Clients,
	OurWorks,
	Footer,
} from "./components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { textVariant } from "./utils/motion";

function App() {
	const [section1Ref, section1InView] = useInView({ threshold: 0.1 });
	const [section2Ref, section2InView] = useInView({ threshold: 0.1 });
	const [section3Ref, section3InView] = useInView({ threshold: 0.1 });
	const [section4Ref, section4InView] = useInView({ threshold: 0.1 });
	const [section5Ref, section5InView] = useInView({ threshold: 0.1 });
	const [section6Ref, section6InView] = useInView({ threshold: 0.1 });

	const [activeNav, setActiveNav] = useState(9);

	const logoContainerRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			section1InView
				? setActiveNav(0)
				: section2InView
				? setActiveNav(1)
				: section3InView
				? setActiveNav(2)
				: section4InView
				? setActiveNav(3)
				: section5InView
				? setActiveNav(4)
				: section6InView
				? setActiveNav(5)
				: setActiveNav(9);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [
		section1InView,
		section2InView,
		section3InView,
		section4InView,
		section5InView,
		section6InView,
	]);
	return (
		<div className="bg-gray-50">
			<div className="fixed top-0 left-0 h-[70px] md:h-[80px] w-full z-[1000000000000]">
				<Navbar activeProp={activeNav} />
			</div>
			<div>
				<Hero />
			</div>
			<div ref={section1Ref}>
				<WhoWeAre />
			</div>
			<div ref={section2Ref}>
				<Services />
			</div>
			{/* <div className="relative h-[400vh] p-0" ref={section3Ref}>
				<div className="sticky top-0 w-full h-[100vh]">
					<Clients />
				</div>
			</div> */}
			<div ref={section4Ref}>
				<OurWorks />
			</div>
			{/* <div ref={section5Ref}>Partners</div> */}
			<div ref={section6Ref}>
				<Footer />
			</div>
		</div>
	);
}

export default App;
