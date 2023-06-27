import React from 'react';

function Searchbar({ hideOnMobile }) {

    return (
        <div className={`searchbar ${hideOnMobile ? 'hide-mobile' : ''}`}>
            <i className="fas fa-search searchbar__icon" />
            <input className="searchbar__input" type="text" placeholder="Search" /> 
            <i className="fas fa-times searchbar__close" />
        </div>
    )
}



export default Searchbar;

