import { useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import ServiceTitle from "./ServiceTitle";
import ServiceDescription from "./ServiceDescription";

import { SERVICES } from "../utils/constants";
import Earth from "./models/Earth";

const Services = () => {
	const [selectedProject, setSelectedProject] = useState(null);
	return (
		<div className="container">
			<main className="service-main">
				<Earth />
			</main>
			{/* <div classNAme="service-container">
				<ServiceTitle data={SERVICES} setSelectedProject={setSelectedProject} />

				<ServiceDescription data={SERVICES} selectedProject={selectedProject} />
			</div> */}
		</div>
	);
};

export default SectionWrapper(Services, "services");
