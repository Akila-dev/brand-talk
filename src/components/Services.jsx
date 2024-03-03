import { useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import ServiceTitle from "./ServiceTitle";
import ServiceDescription from "./ServiceDescription";
import SmoothScroll from "../hoc/SmoothScroll";

import { SERVICES } from "../utils/constants";
import Earth from "./models/Earth";

const Services = () => {
	const [selectedProject, setSelectedProject] = useState(null);
	return (
		<div className="container section-py">
			<SmoothScroll>
				<main className="service-main">
					<Earth />
					<div className="service-container">
						<ServiceTitle
							data={SERVICES}
							setSelectedProject={setSelectedProject}
						/>

						<ServiceDescription
							data={SERVICES}
							selectedProject={selectedProject}
						/>
					</div>
				</main>
			</SmoothScroll>
		</div>
	);
};

export default SectionWrapper(Services, "services");
