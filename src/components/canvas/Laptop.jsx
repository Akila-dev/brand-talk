import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF, ContactShadows, Sky } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import { a as web } from "@react-spring/web";
import { useScroll, useTransform } from "framer-motion";
import { motion, MotionCanvas } from "framer-motion-3d";

import { CanvasLoader } from "../../components";

const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

function Model({
	open,
	hinge,
	rotateX,
	rotateY,
	rotateZ,
	positionY,
	...props
}) {
	const group = useRef();
	// Load model
	const { nodes, materials } = useGLTF("/macbook.glb");
	// Take care of cursor state on hover
	const [hovered, setHovered] = useState(false);
	useEffect(
		() => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
		[hovered]
	);

	return (
		<motion.group
			ref={group}
			rotation-x={rotateX}
			rotation-y={rotateY}
			rotation-z={rotateZ}
			position-y={positionY}
			{...props}
			onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
			onPointerOut={(e) => setHovered(false)}
			dispose={null}
		>
			<motion.group rotation-x={hinge} position={[0, -0.04, -2.95]}>
				<group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
					<mesh
						material={materials.aluminium}
						geometry={nodes["Cube008"].geometry}
					/>
					<mesh
						material={materials["matte.001"]}
						geometry={nodes["Cube008_1"].geometry}
					/>
					<mesh
						material={materials["screen.001"]}
						geometry={nodes["Cube008_2"].geometry}
					/>
				</group>
			</motion.group>
			<mesh
				material={materials.keys}
				geometry={nodes.keyboard.geometry}
				position={[1.79, 0, 0]}
			/>
			<group position={[0, -0.1, 0]}>
				<mesh
					material={materials.aluminium}
					geometry={nodes["Cube002"].geometry}
				/>
				<mesh
					material={materials.trackpad}
					geometry={nodes["Cube002_1"].geometry}
				/>
			</group>
			<mesh
				material={materials.touchbar}
				geometry={nodes.touchbar.geometry}
				position={[0, -0.03, 1.2]}
			/>
		</motion.group>
	);
}

const Laptop = ({ container }) => {
	const [screenSize, setScreenSize] = useState(getWindowsDimension());
	useEffect(() => {
		const handleResize = () => {
			setScreenSize(getWindowsDimension());
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// This flag controls open state, alternates between true & false
	const [open, setOpen] = useState(false);
	// We turn this into a spring animation that interpolates between 0 and 1
	const props = useSpring({ open: Number(open) });

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end end"],
	});

	const rotate = useTransform(
		scrollYProgress,
		[0, 0.35, screenSize.width > 700 ? 0.5 : 0.5],
		[1, -1, -3]
	);
	const scale = useTransform(
		scrollYProgress,
		[0, 1],
		[screenSize.width > 700 ? 1 : 0.5, screenSize.width > 700 ? 2 : 1.5]
	);

	// const open = useTransform(
	// 	scrollYProgress,
	// 	[0, 1],
	// 	[0.5, screenSize.width > 700 ? 2 : 1]
	// );
	const hinge = useTransform(
		scrollYProgress,
		[
			0,
			screenSize.width > 700 ? 0.35 : 0.3,
			screenSize.width > 700 ? 0.4 : 0.45,
			screenSize.width > 700 ? 0.45 : 0.65,
			1,
		],
		[1.57, 1.57, 0, -0.425, -0.425]
	);
	const rotateX = useTransform(
		scrollYProgress,
		[0, 1],
		[Math.cos(10) / 1.5, 1.3]
	);
	const rotateY = useTransform(scrollYProgress, [0, 1], [0, Math.sin(10) / 4]);
	const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 0.03]);
	const positionY = useTransform(
		scrollYProgress,
		[0, 1],
		[0, screenSize.width > 700 ? -4.5 : -5]
	);
	const sunZ = useTransform(scrollYProgress, [0, 1], [0, 10]);
	const sunX = useTransform(scrollYProgress, [0, 1], [0, 2]);

	return (
		<div className="w-full h-screen translate-y-[-24px]">
			<Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
				<three.pointLight
					position={[10, 10, 10]}
					intensity={1.5}
					color={props.open.to([0, 1], ["#f0f0f0", "#429A7D"])}
				/>
				<Suspense fallback={<CanvasLoader />}>
					<motion.group
						rotation={[0, rotate, 0]}
						onClick={(e) => (e.stopPropagation(), setOpen(!open))}
						scale={scale}
					>
						<spotLight position={[0, 10, -5]} intensity={500} />
						<Model
							rotateX={rotateX}
							rotateY={rotateY}
							rotateZ={rotateZ}
							positionY={positionY}
							hinge={hinge}
						/>
					</motion.group>
					<ambientLight intensity={5} />
					<Sky scale={1000} sunPosition={[0, 0.4, 0]} />
					{/* <Environment file={environment} /> */}
				</Suspense>
				<ContactShadows
					position={[0, -4.5, 0]}
					opacity={0.4}
					scale={40}
					blur={1.75}
					far={4.5}
				/>
			</Canvas>
		</div>
	);
};

export default Laptop;

useGLTF.preload("/macbook.glb");
