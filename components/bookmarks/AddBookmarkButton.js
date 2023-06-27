import React from 'react';
import { Add } from 'react-ionicons';

const AddBookmarkButton = ({ onClick }) => {

    return (
        <button className='bookmarks__add-btn' onClick={onClick}>
            <Add color="grey" />
            <p>Add bookmark</p>
        </button>
    )
}

export default AddBookmarkButton;
