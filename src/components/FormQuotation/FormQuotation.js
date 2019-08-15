import React from 'react';

// import { Container } from './styles';

import './FormQuotation.css';
import Button from '../Button/Button';

export default function FormQuotation() {
    return (
        <form>

            <label htmlFor="mar">Marca</label>
            <input type="text" placeholder="Marca" />

            <label htmlFor="mar">Marca</label>
            <input type="text" placeholder="Marca" />

            <label htmlFor="mar">Marca</label>
            <input type="text" placeholder="Marca" />

            <label htmlFor="mar">Marca</label>
            <input type="text" placeholder="Marca" />

            <label htmlFor="mar">Marca</label>
            <input type="text" placeholder="Marca" />

            <label htmlFor="mar">Marca</label>
            <input type="text" placeholder="Marca" />

            <label htmlFor="mar">Marca</label>
            <input type="text" placeholder="Marca" />

            <Button text={"Salvar"} onClick={() => alert("OI")} />

        </form>
    );
}
