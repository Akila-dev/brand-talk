import { useRef, useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
// import { useScroll } from "@react-three/drei";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";

import { TextureLoader } from "three/src/loaders/TextureLoader";

const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

export default function Earth({ container }) {
	const [screenSize, setScreenSize] = useState(getWindowsDimension());
	useEffect(() => {
		const handleResize = () => {
			setScreenSize(getWindowsDimension());
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const scene = useRef();

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const [color, normal, aoMap] = useLoader(TextureLoader, [
		"/models/earth/color.png",
		"/models/earth/normal.png",
		"/models/earth/occlusion.png",
	]);

	const scale = useTransform(scrollYProgress, [0, 0.3], [0, 2.75]);
	const scaleLG = useTransform(scrollYProgress, [0, 0.5], [1, 3]);

	return (
		<Canvas ref={scene}>
			<ambientLight intensity={0.1} />

			<directionalLight intensity={3.5} position={[1, 0, -0.25]} />

			<motion.mesh
				scale={screenSize.height > screenSize.width ? scale : scaleLG}
				rotation-y={scrollYProgress}
			>
				<sphereGeometry args={[1, 64, 64]} />

				<meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
			</motion.mesh>
		</Canvas>
	);
}
