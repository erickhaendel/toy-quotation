import React from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleShowModal } from '../../store/actions';
// import { Container } from './styles';
import './SubHeader.css';

function SubHeader({ toggleShowModal }) {
    return (
        <div className="container-subheader">
            <Container>
                <Button text={"Adicionar Cotação"} onClick={() => toggleShowModal(true)} />
            </Container>
        </div>
    );
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ toggleShowModal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);