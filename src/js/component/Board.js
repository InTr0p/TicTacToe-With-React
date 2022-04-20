import React from "react";
import Grid from "./Grid";

const Board = ({ squares, onClick }) => (
	<div className="board">
		{squares.map((square, i) => (
			<Grid key={i} value={square} onClick={() => onClick(i)} />
		))}
	</div>
);

export default Board;
