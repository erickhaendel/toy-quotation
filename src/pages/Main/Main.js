import React, { useState, useEffect } from 'react';
// import { Container } from './styles';

import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Table from '../../components/Table/Table';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Modal from '../../components/Modal/Modal';
import FormQuotation from '../../components/FormQuotation/FormQuotation';
import SubHeader from '../../components/SubHeader/SubHeader';

import { firebaseDatabase } from '../../services/firebase';


function Main() {

    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState([])

    useEffect(() => {
        fetchQuotations();
    }, [items])

    async function fetchQuotations() {
        const quotationsDB = firebaseDatabase.ref('cotacoes');
        const snap = await quotationsDB.once('value');
        const quotations = snap.val();

        var result = Object
            .keys(quotations)
            .map(function (key) {
                return quotations[key];
            });

        setItems(result);
    }

    function handleClickShowModal() {
        setShowModal(true);
    }

    return (
        <div>
            <Header />

            <SubHeader />

            <Container>
                <Table items={items}></Table>
            </Container>


            <Modal title="Nova cotação" showModal={showModal}>
                <FormQuotation />
            </Modal>

        </div>
    );
}


export default Main;