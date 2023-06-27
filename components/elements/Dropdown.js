import React from 'react';

/* ===================================
   Dropdown
=================================== */
export const Dropdown = ( { children, hideOnMobile, dropdown, className, distance }) => {

    // Get the button and items from children
    const rchildren = React.Children.toArray(children);
    const dropdownButton = rchildren[0];
    const dropdownItems = rchildren.filter((child, i) => i !== 0);

    return (
        <div className={`dropdown ${className} ${hideOnMobile ? 'hide-mobile' : ''}`}>

            { dropdownButton }
            
            <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`} style={{ top: distance }}>

                { dropdownItems }

            </ul>
        </div>
    )
}


/* ===================================
   DropdownButton
=================================== */
export const DropdownButton = ({ children }) => {
    return children; 
}

/* ===================================
   DropdownItem
=================================== */
export const DropdownItem = ({ children, onClick }) => {
    return <li><button className="dropdown-item" href="#" onClick={onClick}>{ children }</button></li> 
}

Dropdown.defaultProps = {
    distance: '100%'
}

