import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Keyboard from "./Keyboard";

const ProductDesign = () => {
	return (
		<Canvas camera={{ fov: 80, position: [5, 4, 6] }}>
			<Stage environment="night" intensity={0.22}>
				<Keyboard />
			</Stage>
			<OrbitControls />
		</Canvas>
	);
};

export default ProductDesign;
