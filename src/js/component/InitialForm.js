import React from "react";
import "../../styles/initialForm.css";

const InitialForm = ({ startGame, props }) => {
	return (
		<div className="container">
			<div className="container" id="boardgame">
				<div className="row mt-3">
					<div className="col-md-12 text-center font-weight-bold">
						<p id="titulo">
							Write your nicknames and start the battle
						</p>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-10 col-md-6 mb-2">
						<input
							type="text"
							name="player1"
							id="player1"
							placeholder="Player X"
						/>
					</div>
					<div className="col-10 col-md-6">
						<input
							type="text"
							name="player2"
							id="player2"
							placeholder="Player O"
						/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-6 col-md-6 text-right d-flex justify-content-end ">
						<button
							className="textX "
							id="Xbuttom"
							onClick={() => startGame(true)}>
							X
						</button>
					</div>
					<div className="col-6 col-md-6 text-left">
						<button
							className="textO "
							id="Obuttom"
							onClick={() => startGame(false)}>
							O
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InitialForm;
