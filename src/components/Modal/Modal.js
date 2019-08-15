import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleShowModal } from '../../store/actions';

import './Modal.css';


function Modal({ title, children, showModal, toggleShowModal }) {
    return (
        <div>
            {
                showModal &&
                (
                    <div className="container-modal" >
                        <div className="modal-bg" onClick={() => toggleShowModal(false)}></div>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2>{title}</h2>
                            </div>

                            <div className="modal-body">
                                {children}
                            </div>

                            <div className="modal-footer">

                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

const mapStateToProps = store => ({
    showModal: store.addQuotationReducer.showModal
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ toggleShowModal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Modal);