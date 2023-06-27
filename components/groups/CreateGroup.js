import React, { useState, useEffect } from 'react';
import Input from '../elements/Input';
import AddButton from 'components/common/modelForm/AddButton';
import AddMembers from './AddMembers';
import Members from './Members';

const CreateGroup = ({ addMemberInput, setAddMemberInput, createGroup, getAllUsers, allUsers, saveGroup, closeModal }) => {
    const [name, setName] = useState('');
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        if (createGroup) {
            setName('');
            setSelected([]);
            setAddMemberInput(false);
        }

        getAllUsers();
    }, [createGroup]) // eslint-disable-line

    const handleSubmit = () => {
        const memberIds = selected.map(member => member._id);
        saveGroup(name, memberIds);
        setName('');
        setSelected([]);
        closeModal();
    }   

    return (
        <div className='group__create'>
            <div className="group__create-image">Add cover photo</div>
            <Input data={allUsers} onClick={() => setAddMemberInput(false)} value={name} setValue={setName} placeholder="Group name" />
            {

                addMemberInput ? <AddMembers selected={selected} setSelected={setSelected} closeAddMemberForm={() => setAddMemberInput(false)} />
                    : <AddButton title="Add members" onClick={() => setAddMemberInput(true)} />
            }
            <Members selected={selected} setSelected={setSelected} />

            <div className='group__create-submit regular-btn' onClick={handleSubmit}>
                <p>Save Group</p>
            </div>
        </div>
    )
}




export default CreateGroup

