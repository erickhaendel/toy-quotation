import React, { useState } from 'react';

// import { Container } from './styles';

import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Table from '../../components/Table/Table';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Modal from '../../components/Modal/Modal';
import FormQuotation from '../../components/FormQuotation/FormQuotation';

export default function Main() {

    const [showModal, setShowModal] = useState(false);

    function handleClickShowModal() {
        setShowModal(true);
    }

    return (
        <div>
            <Header title="Toy Quotation" />

            <Container>
                <Button text={"Adicionar Cotação"} onClick={handleClickShowModal} />

                <Card>
                    <Table></Table>
                </Card>
            </Container>


            <Modal title="Nova cotação" showModal={showModal}>
                <FormQuotation />
            </Modal>

        </div>
    );
}
