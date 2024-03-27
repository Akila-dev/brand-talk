import { useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import ServiceTitle from "./ServiceTitle";
import ServiceDescription from "./ServiceDescription";
import SmoothScroll from "../hoc/SmoothScroll";

import { SERVICES } from "../utils/constants";
import Earth from "./models/Earth";
import { Laptop } from "../components";

const Services = ({ container }) => {
	const [selectedProject, setSelectedProject] = useState(null);
	return (
		<div className="service-main">
			<Laptop container={container} />
		</div>
	);
};

export default SectionWrapper(Services, "services");
