import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Player.css';

const Player = (props) => {
    const { name, image, salary } = props.player;
    return (
        <div className="playerInfo-container">
            <div className="player">
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h1 className="player-name">{name}</h1>
                    <p>Salary: {salary}</p>
                    <button  className="btn btn-primary" onClick={() => props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlus} />Add Player</button>
                </div>
            </div>
        </div>

    );
};

export default Player;