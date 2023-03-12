import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Social from "./Social";

const SocialMedia = () => {
	return (
		<Canvas camera={{ fov: 100, position: [2.5, 0.5, 5] }}>
			<Stage environment="night" intensity={0.2}>
				<Social />
			</Stage>
			<OrbitControls />
		</Canvas>
	);
};

export default SocialMedia;
