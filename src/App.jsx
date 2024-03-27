import { useState, useEffect, useRef } from "react";
import {
	Navbar,
	Hero,
	WhoWeAre,
	Services,
	Clients,
	OurWorks,
	Footer,
	PreviousWorksDetails,
	Header,
} from "./components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { textVariant } from "./utils/motion";

import ServiceTitle from "./components//ServiceTitle";
import ServiceDescription from "./components//ServiceDescription";
import SmoothScroll from "./hoc/SmoothScroll";
import { SERVICES } from "./utils/constants";

import Lenis from "@studio-freight/lenis";

function App() {
	const [section1Ref, section1InView] = useInView({ threshold: 0.1 });
	const [section2Ref, section2InView] = useInView({ threshold: 0.1 });
	const [section3Ref, section3InView] = useInView({ threshold: 0.1 });
	const [section4Ref, section4InView] = useInView({ threshold: 0.1 });
	const [section5Ref, section5InView] = useInView({ threshold: 0.1 });
	const [section6Ref, section6InView] = useInView({ threshold: 0.1 });

	const [activeNav, setActiveNav] = useState(9);

	const logoContainerRef = useRef(null);
	const servicesContainerRef = useRef(null);

	useEffect(() => {
		const lenis = new Lenis();
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

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
				: setActiveNav(null);
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

	// SERVICES
	const [selectedService, setSelectedService] = useState(null);

	return (
		<div className="bg-gray-100">
			<div className="fixed top-0 left-0 h-[70px] md:h-[80px] w-full z-[1000]">
				<Navbar activeProp={activeNav} setActiveProp={setActiveNav} />
			</div>
			<Hero />
			<div ref={section1Ref}>
				<WhoWeAre />
			</div>

			{/* SERVICES */}
			<div>
				{/* <SmoothScroll> */}
				<div
					ref={section2Ref}
					className="h-[300vh] relative bg-gray-200 !p-0 !m-0 top-0 left-0 w-full"
				>
					<div className="h-screen w-full top-0 left-0 sticky overflow-hidden object-cover py-0 !m-0">
						<Services container={servicesContainerRef} />
					</div>
					<motion.div className="section-pt w-full absolute top-0 ">
						<Header heading="Services" subheading="What we do" />
					</motion.div>

					<div className="h-[50vh] w-full"></div>

					<div className="h-screen w-full top-0 left-0 sticky overflow-hidden flex items-center">
						<div className="service-container">
							<ServiceTitle
								data={SERVICES}
								setSelectedService={setSelectedService}
							/>

							<ServiceDescription
								data={SERVICES}
								selectedService={selectedService}
							/>
						</div>
					</div>
				</div>
				{/* </SmoothScroll> */}
			</div>
			{/* <div className="relative h-[400vh] p-0" ref={section3Ref}>
				<div className="sticky top-0 w-full h-[100vh]">
					<Clients />
				</div>
			</div> */}
			<div className="relative p-0" ref={section3Ref}>
				<Clients />
			</div>
			<div ref={section4Ref}>
				<OurWorks />
				<div className="w-full overflow-hidden">
					<PreviousWorksDetails />
				</div>
			</div>

			{/* <div ref={section5Ref}>Partners</div> */}
			<div ref={section6Ref}>
				<Footer />
			</div>
		</div>
	);
}

export default App;
