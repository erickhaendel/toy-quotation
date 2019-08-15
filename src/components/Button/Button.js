import React from 'react';

// import { Container } from './styles';
import './Button.css';

export default function Button({ text, ...attributes }) {
    return (
        <button href="#" className="btn" {...attributes}>{text}</button>
    );
}
