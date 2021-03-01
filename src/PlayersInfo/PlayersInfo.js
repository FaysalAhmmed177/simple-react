import React from 'react';
import { useEffect, useState } from 'react';
import playerData from '../data/data.json'
import Player from '../Player/Player'
import Cart from '../Cart/Cart'
import './PlayersInfo.css'

const PlayersInfo = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setPlayers(playerData);
        //console.log(playerData)
    }, [])

    const handleAddPlayer = (player) => {
        console.log('Add Player');
        const newCart = [...cart, player];
        setCart(newCart);
    }

    return (
        <div className="players-container">
            <div className="player-details">
                {
                    players.map(player => <Player player={player} key={player.id}  handleAddPlayer={handleAddPlayer}></Player>)
                }    
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default PlayersInfo;