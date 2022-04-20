import React, { useState } from "react";
import { calculateWinner } from "../Winner";
import Board from "./Board";
import "../../styles/Play.css";

const Game = ({ chooseX, props }) => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [turn, setTurn] = useState(chooseX);
	const winner = calculateWinner(board);

	const handleClick = (i) => {
		const boardCopy = [...board];
		if (winner || boardCopy[i]) return;
		boardCopy[i] = turn ? "X" : "O";
		setBoard(boardCopy);
		setTurn(!turn);
	};

	const refreshPage = () => {
		window.location.reload();
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-8 header">
						<h2>
							{winner
								? `${winner} Winner!`
								: ` ${turn ? "X" : "O"}`}
						</h2>
						<button
							className="btn btn-light border border-warning"
							onClick={refreshPage}>
							Start Over
						</button>
					</div>
				</div>
				<Board squares={board} onClick={handleClick} />
			</div>
		</>
	);
};

export default Game;
