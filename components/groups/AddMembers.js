import React, { useState, useRef, useEffect } from 'react';
import { Close } from 'react-ionicons';
import Input from '../elements/Input';

const AddMembers = ({ ref, closeAddMemberForm, selected, setSelected }) => {
    const [name, setName] = useState('');

    const input = useRef();

    useEffect(() => {
        input.current.focus();
    }, [])

    return (
        <>
            <div className='modal-form'>
                <Close className='modal-form__close' onClick={closeAddMemberForm} />
                <Input 
                    selected={selected} 
                    setSelected={setSelected} 
                    dropdown={name} 
                    className="modal-form__input" 
                    ref={input} 
                    value={name} 
                    setValue={setName} 
                />
            </div>
        </>
    )
}


export default AddMembers;
