import { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
// import { useScroll } from "@react-three/drei";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion-3d";

import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function Earth({ container }) {
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

	return (
		<Canvas ref={scene}>
			<ambientLight intensity={0.1} />

			<directionalLight intensity={3.5} position={[1, 0, -0.25]} />

			<motion.mesh scale={2.5} rotation-y={scrollYProgress}>
				<sphereGeometry args={[1, 64, 64]} />

				<meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
			</motion.mesh>
		</Canvas>
	);
}
