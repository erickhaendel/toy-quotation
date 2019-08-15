import React from 'react';
import MaterialIcon, { colorPalette } from 'material-icons-react';
// import { Container } from './styles';
import './Button.css';

export default function Button({ text, ...attributes }) {
    return (
        <button href="#" className="btn" {...attributes}>
            <MaterialIcon icon="add_circle" color="#fff" size={16} />
            {text}
        </button>
    );
}
