import React from 'react';

const Modal = ({ children, modal, setModal, title, width, reset }) => {

    // Close Modal
    const closeModal = (e) => {
        const modalContainer = e.target.classList.contains('modal')
        const closeModal = e.target.classList.contains('modal__header-close');

        if (modalContainer || closeModal) {
            setModal(false)
            reset && reset();
            document.querySelector('body').classList.remove('no-scroll');
        }
    }

    return (
        <>
            <div className={`modal ${modal ? 'show' : 'fade'}`}  onClick={closeModal}>
                <div style={{ width: `${width ? width :  '40%'}` }} className="modal__content">

                    {/* Header */}
                    <div className="modal__header">
                        <p className="modal__header-title">{title}</p>
                        <span className="modal__header-close">&times;</span>
                    </div>

                    {/* Body */}
                    <div className="modal__body">
                        { children }
                    </div>

                </div>
            </div>
        </>

    )
}

export default Modal;






