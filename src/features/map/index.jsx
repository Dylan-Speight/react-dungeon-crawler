import React from 'react';

function MapTile(props) {
	return <div></div>;
}

function MapRow(props) {
	return props.tiles.map(tile => <MapTile value={tile} />);
}

export default function Map(props) {
	return (
		<div
			style={{
				position: 'relative',
				top: '0px',
				left: '0px',
				width: '800px',
				height: '400px',
				backgroundColor: 'green',
				border: '4px solid white',
			}}>
			{props.tiles.map(row => (
				<MapRow tiles={row} />
			))}
		</div>
	);
}
