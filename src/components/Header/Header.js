import React from 'react';
import MaterialIcon, { colorPalette } from 'material-icons-react';
import './Header.css';

import logo from '../../assets/logo.png';
import Container from '../Container/Container';

export default function Header({ title }) {
    return (
        <header className="container-header">
            <Container>
                <div className="header-content">
                    <img src={logo} alt="Logo Toy Quotation" />

                    <span className="information">
                        <span>erickhaendel@gmail.com</span>

                        <a href="#">
                            <MaterialIcon icon="settings" color="#FFF" />
                        </a>
                    </span>
                </div>
            </Container>
        </header>
    );
}
