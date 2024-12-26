import React from 'react';
import './CartWidget.css';

export const CartWidget = ({ onClick }) => {
    return (
        <button className="cart-widget" onClick={onClick} aria-label="Ir al carrito">
            🛒
        </button>
    );
};
