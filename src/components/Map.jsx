import {
	ComposableMap,
	Geographies,
	Geography,
	Annotation,
} from "react-simple-maps";

const Map = () => {
	return (
		<ComposableMap
			projection="geoMercator"
			projectionConfig={{
				center: [-75, 0],
				scale: 450,
			}}
			style={{ width: "100%", height: "100%" }}
		>
			<Geographies
				geography="/features.json"
				fill="#2C065D"
				stroke="#FFFFFF"
				strokeWidth={0.5}
			>
				{({ geographies }) =>
					geographies.map((geo) => (
						<Geography
							key={geo.rsmKey}
							geography={geo}
							style={{
								hover: {
									fill: "#450a92",
								},
								pressed: {
									fill: "#520eaa",
								},
							}}
						/>
					))
				}
			</Geographies>
			<Annotation
				subject={[-45, -20]}
				dx={80}
				dy={-22}
				connectorProps={{
					stroke: "#FFFFFF",
					strokeWidth: 2,
					strokeLinecap: "round",
				}}
			>
				<text
					x="6"
					fontSize={18}
					fontWeight="bold"
					textAnchor="start"
					alignmentBaseline="start"
					fill="#FFFFFF"
				>
					{"Brazil"}
				</text>
			</Annotation>
		</ComposableMap>
	);
};

export default Map;
