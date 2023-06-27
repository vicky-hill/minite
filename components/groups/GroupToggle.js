import React from 'react';
import { People, Person } from 'react-ionicons'
import { connect } from 'react-redux'
import { toggleShowAll } from 'actions/groups'

const GroupToggle = ({ showAll, toggleShowAll, resource, className='' }) => {

    const classNames = ['group__toggle-btn', className].join(' ').trim();
    const buttonName = resource.split('')[0].toUpperCase() + resource.slice(1) + 's';

    const myBtn = <button onClick={() => toggleShowAll(resource)} className={classNames}> <Person height="17px" color="#333" />My {buttonName}</button>;
    const allBtn = <button onClick={() => toggleShowAll(resource)} className={classNames}> <People height="17px" color="#333" />All {buttonName}</button>;

    return showAll ? allBtn : myBtn
    
}

export default connect(null, { toggleShowAll })(GroupToggle);

