import React, { useState } from 'react';

// import { Container } from './styles';

import './FormQuotation.css';
import Button from '../Button/Button';

import { firebaseDatabase } from '../../services/firebase';

export default function FormQuotation() {

    const [branch, setBranch] = useState('');
    const [scale, setScale] = useState('');
    const [character, setCharacter] = useState('');
    const [priceEua, setPriceEua] = useState('');
    const [priceBr, setPriceBr] = useState('');
    const [ship, setShip] = useState('');

    function handleSubmitForm(e) {
        e.preventDefault();
        // Salvar
        firebaseDatabase.ref('cotacoes/').push({
            marca: branch,
            escala: scale,
            personagem: character,
            precoEua: priceEua,
            precoBrasil: priceBr,
            ship: ship,
            id: new Date().getTime()
        });
    }

    return (
        <form>

            <label forHtml="marca">Marca</label>
            <input type="text" id="marca" placeholder="Marca" name="Marca" onChange={(e) => setBranch(e.target.value)} />

            <label forHtml="personagem">Personagem</label>
            <input type="text" class="form-control" id="personagem" placeholder="personagem"
                name="personagem"
                onChange={(e) => setCharacter(e.target.value)} />


            <label forHtml="escala">Escala</label>
            <input type="text" class="form-control" id="escala" placeholder="escala"
                onChange={(e) => setScale(e.target.value)}
                name="escala" />


            <label forHtml="preco-eua">Preco EUA</label>
            <input type="text"
                class="form-control" id="preco-eua" placeholder="Valor em USD"
                onChange={(e) => setPriceEua(e.target.value)}
                name="precoEua" />


            <label forHtml="ship">Ship</label>
            <input type="text" class="form-control" id="ship"
                onChange={(e) => setShip(e.target.value)}
                placeholder="Valor frete USD" name="ship" />


            <label forHtml="preco-brasil">Preco Brasil</label>
            <input type="text" class="form-control" id="preco-brasil"
                onChange={(e) => setPriceBr(e.target.value)}
                placeholder="Preco no Brasil"
                name="precoBrasil" />


            <Button text={"Salvar"} onClick={handleSubmitForm} />

        </form>
    );
}
