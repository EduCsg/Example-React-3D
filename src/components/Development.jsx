import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ReactLogo from "./React";

const Development = () => {
	return (
		<Canvas camera={{ fov: 95, position: [3, 0, 5] }}>
			<Stage environment="city" intensity={0}>
				<ReactLogo />
			</Stage>
			<OrbitControls />
		</Canvas>
	);
};

export default Development;
