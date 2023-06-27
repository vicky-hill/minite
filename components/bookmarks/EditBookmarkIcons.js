import React from 'react';
import { CreateOutline, TrashOutline } from 'react-ionicons';

const EditBookmarkIcons = ({ showEdits, onEdit, onDelete }) => {

    return (
        <div className={`bookmarks__item-edits ${showEdits ? 'show' : ''}`}>
            <CreateOutline onClick={onEdit} color={'darkgrey'} />
            <TrashOutline onClick={onDelete} color={'#ED4857'}  />
        </div>
    )
}

export default EditBookmarkIcons ;
