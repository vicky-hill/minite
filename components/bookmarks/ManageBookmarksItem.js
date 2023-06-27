import React from 'react';
import { ReorderTwoOutline } from 'react-ionicons';
import EditBookmarkIcons from './EditBookmarkIcons';
import { darkIcons } from '../../utils/icons';
import { connect } from 'react-redux'
import { deleteBookmark } from 'actions/bookmarks'

const ManageBookmarksItem = ({ activeBookmark, setActive, deleteBookmark, showEdits, openEdit, provided, item, index }) => {

    const onDelete = () => {
        if(window.confirm('Delete this bookmark?')) {
            deleteBookmark(item._id);
        }

        if(activeBookmark === index) {
            setActive(index - 1);
        }
    }

    const onEdit = () => {
        openEdit(index)
    }

    return (
        <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            className="bookmarks__item"
        >
            <div {...provided.dragHandleProps}>
                <ReorderTwoOutline className="bookmarks__reorder" color="silver" />
            </div>

            { darkIcons[item.icon] }
            <p className="bookmarks__item-name"> {item.name} </p>

            <EditBookmarkIcons onDelete={onDelete} onEdit={onEdit} showEdits={showEdits} />

        </div>
    )
}


const mapStateToProps = state => ({
    activeBookmark: state.bookmarks.activeBookmark
}) 

export default connect(mapStateToProps, { deleteBookmark })(ManageBookmarksItem);

