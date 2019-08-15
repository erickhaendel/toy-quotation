import React, { useState, useEffect } from 'react';

// import { Container } from './styles';

import './Modal.css';

export default function Modal({ title, children, showModalProp }) {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(showModalProp)
    }, [showModalProp]);

    function handleCloseModal() {

    }

    return (
        <div>
            {
                showModalProp &&
                (
                    <div className="container-modal" onClick={handleCloseModal}>
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
