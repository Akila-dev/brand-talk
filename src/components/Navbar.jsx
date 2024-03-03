import { useState, useEffect, useRef } from "react";
import { NAVIGATION } from "../utils/constants";

import { CgMenuLeftAlt, CgClose } from "react-icons/cg";

// import logo from "../assets/logo-icon.png";
import logo from "../assets/brandtalk.png";

const Navbar = ({ activeProp }) => {
	const [active, setActive] = useState("about");
	const [toggled, setToggled] = useState(false);
	// const [scrolled, setScrolled] = useState(false);
	const popupRef = useRef();

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const scrollTop = window.scrollY;
	// 		if (scrollTop > 30) {
	// 			setScrolled(true);
	// 		} else {
	// 			setScrolled(false);
	// 		}
	// 	};

	// 	window.addEventListener("scroll", handleScroll);

	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, []);

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (popupRef.current && !popupRef.current.contains(e.target)) {
				setToggled(false);
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	return (
		<div
			// className={`w-full h-full flex items-center rounded-b-lg ${
			// 	scrolled && "bg-white shadow-card"
			// }`}
			className={`w-full h-full flex items-center p-3 md:p-[3rem]`}
		>
			{/* Desktop */}
			<div className="hidden w-full px-3 md:px-5 rounded-[3rem] bg-white lg:grid grid-cols-5 shadow-card h-[65px] text-sm">
				<div className="col-span-2 flex justify-end items-center nav-container">
					{NAVIGATION.slice(0, 3).map(({ name, url }, index) => (
						<a
							className={`${
								activeProp === index ? "active-nav-link" : "nav-link"
							}`}
							href={"#" + url}
							key={index}
							// onClick={}
						>
							{name}
						</a>
					))}
				</div>
				<div className="col-span-1 flex justify-center items-center">
					{/* Logo */}
					<div className="h-[25px] rounded-full">
						<img src={logo} alt="logo" className="w-full h-full object-cover" />
					</div>
				</div>
				<div className="col-span-2 flex justify-start items-center nav-container">
					{NAVIGATION.slice(3, 6).map(({ name, url }, index) => (
						<a
							className={`${
								activeProp === index + 3 ? "active-nav-link" : "nav-link"
							}`}
							href={"#" + url}
							key={index}
						>
							{name}
						</a>
					))}
				</div>
			</div>

			{/* Mobile */}
			<div className="rounded-[3rem] bg-white shadow-card h-[55px] container lg:hidden flex gap-5 justify-between items-center relative text-sm">
				<div className="flex justify-center items-center">
					{/* Logo */}
					<div className="w-auto h-[20px] rounded-full">
						<img src={logo} alt="logo" className="w-full h-full object-cover" />
					</div>
				</div>
				<div className="text-2xl bg-bran p-1 rounded-[1rem] text-white">
					{toggled ? (
						<CgClose className="text-whit" onClick={() => setToggled(false)} />
					) : (
						<CgMenuLeftAlt
							className="text-whit"
							onClick={() => setToggled(true)}
						/>
					)}
				</div>
				{toggled && (
					<div
						ref={popupRef}
						className="fixed top-[75px] min-w-[165px] right-4 flex flex-col rounded-lg overflow-hidden shadow-sm bg-white space-y-1 border-gray-100 p-3"
					>
						{NAVIGATION.map(({ name, url }, index) => (
							<a
								className={`nav-link ${
									activeProp === index ? "active-nav-link" : "nav-link"
								}`}
								href={"#" + url}
								key={index}
							>
								{name}
							</a>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
