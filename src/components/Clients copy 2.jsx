import React from "react";

import BallCanvas from "./canvas/BallCanvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { LOGOS } from "../utils/constants";

const Clients = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{LOGOS.map((logo, index) => (
				<div
					className="w-[6rem] h-[6rem] md:w-[6.5rem] md:h-[6.5rem]"
					key={index}
				>
					<BallCanvas icon={logo} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Clients, "clients");
