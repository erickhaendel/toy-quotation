import React from 'react';

// import { Container } from './styles';

import './Container.css';

export default function Container({ children }) {
    return (
        <div className="container">
            {children}
        </div>
    );
}
