import React from 'react';
import { Add } from 'react-ionicons';

const AddButton = ({ onClick, title, className }) => {
    const classNames = ['modal-form__add-btn', className].join(' ').trim();

    return (
        <button className={classNames} onClick={onClick}>
            <Add color="grey" />
            <p>{ title } </p>
        </button>
    )
}

AddButton.defaultProps = {
    className: ''
}

export default AddButton;