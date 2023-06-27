import React from 'react';
import { Add } from 'react-ionicons'
import GroupToggle from './GroupToggle';


const GroupHeader = ({ openCreateGroup, showAllGroups }) => {

    return (
        <div className="group__header">
            <h1 className="group__title"> Groups</h1>
            <button onClick={openCreateGroup} className="regular-btn flex"> <Add height="17px" color="#fff" />Add Group</button>
            <div className="group__search">
                <input className='group__search-input' type="text" placeholder='Search groups' />
                <GroupToggle showAll={showAllGroups} resource="group" />
            </div>
        </div>
    )
}


export default GroupHeader;

