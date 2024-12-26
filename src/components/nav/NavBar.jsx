import React from 'react';
import './NavBar.css';
import { CartWidget } from './CartWidget';

export const NavBar = ({ itemCount }) => {
    return (
        <nav className="navbar">
            <h1>Grupo Ferreira</h1>
            <CartWidget itemCount={itemCount} />
        </nav>
    );
};
