import React, { useState } from 'react';
import { Styleh2, Styleh3, Stylediv, StyleRemove, StylehCheckout, Stylep } from './Panier.style';

const GameItem = ({ game, onRemove }) => {
    return (
        <div className="game-item">
            <img src={game.cover} alt={game.title} />
            <div>
                <Styleh2>{game.title}</Styleh2>
                <Stylep>Price: ${game.price}</Stylep>
                <StyleRemove onClick={() => onRemove(game)}>Remove</StyleRemove>
            </div>
        </div>
    );
};

const ShoppingCart = ({ cartGames, onRemoveGame }) => {
    return (
        <div className="shopping-cart">
            <Styleh3>Shopping Cart</Styleh3>
            {cartGames.map((game) => (
                <GameItem key={game.id} game={game} onRemove={onRemoveGame} />
            ))}
        </div>
    );
};

const Panier = () => {
    const [cartGames, setCartGames] = useState([
        { id: 1, title: 'Game 1', price: 40, cover: 'game1.jpg' },
        { id: 2, title: 'Game 2', price: 50, cover: 'game2.jpg' },

    ]);

    const handleRemoveGame = (gameToRemove) => {
        const updatedCart = cartGames.filter((game) => game.id !== gameToRemove.id);
        setCartGames(updatedCart);
    };

    const calculateTotal = () => {
        return cartGames.reduce((total, game) => total + game.price, 0);
    };

    return (
        <Stylediv>
            <ShoppingCart cartGames={cartGames} onRemoveGame={handleRemoveGame} />
            <div className="cart-summary">
                <Styleh3>Summary</Styleh3>
                <Stylep>Total: ${calculateTotal()}</Stylep>
                <StylehCheckout>Checkout</StylehCheckout>
            </div>
        </Stylediv>
    );
};

export default Panier;
