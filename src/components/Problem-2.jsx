import React, { useState } from 'react';
import ModalA from './ModalA';
import ModalB from './ModalB';
// import ModalC from './ModalC';

const Problem2 = () => {
    const [currentModal, setCurrentModal] = useState(null);

    const openModalA = () => {
        setCurrentModal('ModalA');
    };

    const openModalB = () => {
        setCurrentModal('ModalB');
    };

    const closeModal = () => {
        setCurrentModal(null);
    };

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
            </div>

            <div className="row justify-content-center">
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={openModalA}>
                        All Contacts
                    </button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={openModalB}>
                        US Contacts
                    </button>
                </div>
            </div>

            {/* Render the appropriate modal based on the currentModal state */}
            {currentModal === 'ModalA' && <ModalA closeModal={closeModal} />}
            {currentModal === 'ModalB' && <ModalB closeModal={closeModal} />}
            {currentModal === 'ModalC' && <ModalC closeModal={closeModal} />}
        </div>
    );
};

export default Problem2;