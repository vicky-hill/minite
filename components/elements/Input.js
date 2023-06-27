import React, { useState, useEffect } from 'react';

const Input = React.forwardRef(({ onClick, selected, setSelected, dropdown, value, setValue, data=[], placeholder='', className='' }, ref) => {

    const classNames = ['input__container', className, dropdown ? 'input__container--dropdown' : ''].join(' ').trim();

    return (
        <div className={classNames}>
            <input
                onClick={onClick}
                ref={ref}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type='text'
                placeholder={placeholder}
            />

           { dropdown &&  <InputDropdown data={data} selected={selected} setSelected={setSelected} searchPhrase={value} setSearchPhrase={setValue} /> }
        </div>
    )
})


/* ===================================
   Input Dropdown
=================================== */
export const InputDropdown = ({ searchPhrase, setSearchPhrase, selected, setSelected, data }) => {
    const users = [{ name: 'vicky', _id: '621259f788353f9b409d9cbf'}, { name: 'charlie', _id: '62477747ea4aa080468c989f'}];
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        filterResults();
    }, [searchPhrase, selected]) // eslint-disable-line

    const filterResults = () => {
        const result = [];
        const search = searchPhrase.toLowerCase();
        users.forEach(user => {
            if(user.name.indexOf(search) > -1 && !selected.name?.includes(user.name)) {
                result.push(user);
            }
        })
        
        setSuggestions(result);
    }

    const onSelect = (user) => {
        setSelected([...selected, user]);
        setSearchPhrase('');
        document.querySelector('.modal-form__input input').focus();
    }

    return (
        <div className={`input__dropdown ${suggestions.length && 'show'}`}>
            <ul className='input__dropdown-list'>
                {
                    suggestions.map(user => (
                        <li onClick={() => onSelect(user)} key={user} className='input__dropdown-item'>{ user.name }</li>
                    ))
                }
            </ul>
        </div>
    )
}


export default Input;


