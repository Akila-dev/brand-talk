import { useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import ServiceTitle from "./ServiceTitle";
import ServiceDescription from "./ServiceDescription";
import SmoothScroll from "../hoc/SmoothScroll";

import { SERVICES } from "../utils/constants";
import Earth from "./models/Earth";

const Services = ({ container }) => {
	const [selectedProject, setSelectedProject] = useState(null);
	return (
		<div className="sticky top-0 h-full max-h-[350px] md:max-h-[500px] lg:max-h-screen w-full flex items-center justify-center">
			<SmoothScroll>
				<main className="service-main">
					<Earth container={container} />
				</main>
			</SmoothScroll>
		</div>
	);
};

export default SectionWrapper(Services, "services");
