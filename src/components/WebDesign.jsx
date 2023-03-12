import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Web from "./Web";

const WebDesign = () => {
	return (
		<Canvas camera={{ fov: 80, position: [8, 2, -3] }}>
			<Stage environment="night" intensity={0.32}>
				<Web />
			</Stage>
			<OrbitControls />
		</Canvas>
	);
};

export default WebDesign;
