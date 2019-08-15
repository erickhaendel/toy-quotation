import React from 'react';

// import { Container } from './styles';

import './Card.css';

export default function Card({ children }) {
    return (
        <div className="container-card">
            {children}
        </div>
    );
}
