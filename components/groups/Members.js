import React from 'react';
import { Close } from 'react-ionicons';

const Members = ({ selected, setSelected }) => {
    
    const handleRemove = (member) => {
        setSelected(selected.filter(mem => mem !== member));
    }

    return (
        <div className='group__create-members'>
            <ul>
                {
                    selected.map(member => (
                        <li onClick={() => handleRemove(member)} key={member}>{ member.name } <Close color="grey" /></li>
                    ))
                }
            </ul>
        </div>
    )
}


export default Members

