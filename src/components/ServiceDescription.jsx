import React from "react";

const ServiceDescription = ({ data, selectedService }) => {
	const crop = (string, maxLength) => {
		return string.substring(0, maxLength);
	};

	return (
		<div className={`service-descriptions hidden lg:block`}>
			{data.map((service, i) => {
				const { title, list } = service;

				return (
					<div
						key={i}
						className={`service-description container`}
						style={{
							clipPath:
								selectedService === i ? "inset(0 0 0)" : "inset(50% 0 50%)",
						}}
					>
						<p>{crop(title, 9)}...</p>
						{/* <p>{title}</p> */}

						<ul>
							{list.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default ServiceDescription;
