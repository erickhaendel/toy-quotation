import React from 'react';

import './Header.css';

export default function Header({ title }) {
    return (
        <header className="container-header">
            <h1>{title}</h1>
        </header>
    );
}
