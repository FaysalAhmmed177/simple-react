import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    const playersCart = props.cart;

    let totalCost = 0;
    for (let i = 0; i < playersCart.length; i++) {
        const player = playersCart[i];
        totalCost = totalCost + player.salary;
        console.log(totalCost);
    }

    return (
        <div>
            <h1>Player Summary</h1>
            <p>Total Players Added: {playersCart.length}</p>
            <p>Players Name:  {
                playersCart.map(player => <li>{player.name}<br></br>Salary:{player.salary}</li>)
                
            }
            </p>
            <p>Total Players Cost: {totalCost}</p>
        </div>
    );
};

export default Cart;