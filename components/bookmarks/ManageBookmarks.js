import React from 'react';
import { CloseOutline, CreateOutline } from 'react-ionicons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import AddButton from '../common/modelForm/AddButton';
import BookmarkForm from './BookmarkForm';
import ManageBookmarksItem from './ManageBookmarksItem';

const ManageBookmarks = ({ setActive, activeBookmark, bookmarks, closeBookmarksModal, showForm, showEdits, setShowForm, setShowEdits, editBookmark, setEditBookmark, sortBookmarks }) => {

    // Open add bookmark form
    const openForm = () => {
        if(bookmarks.length >= 5) {
            return alert('Cannot have more than 5 bookmarks');
        }

        setShowForm(true);
        closeEdits();
    }

    // Close add bookmark form
    const closeForm = () => {
        setShowForm(false);
        setEditBookmark(null);
    }

    // Open edit form
    const openEdit = (index) => {
        setEditBookmark(index);
        closeEdits();
    }

    // Toggle edit icons
    const openEdits = () => setShowEdits(true);
    const closeEdits = () => setShowEdits(false);

    // Update bookmarks after drag and dropping
    const dragEnd = (param) => {
        const sourceIndex = param.source.index;
        const destinationIndex = param.destination?.index;

        if (destinationIndex >= 0) {
            bookmarks.splice(destinationIndex, 0, bookmarks.splice(sourceIndex, 1)[0]);
        }

        // Update sort number after d
        const updatedSort = bookmarks.map((item, i) => {
            return { ...item, sort: i }
        });

        sortBookmarks(updatedSort);
        setActive(activeBookmark);
    }

    return (
        <div className='bookmarks'>
            <div className="bookmarks__title">
                <h1>Manage Bookmarks</h1>
                {
                    showForm || editBookmark !== null ? null :
                        showEdits ? <CloseOutline color='darkgrey' onClick={closeEdits} /> :
                            <CreateOutline color='darkgrey' onClick={openEdits} />
                }
            </div>

            <DragDropContext onDragStart={closeEdits} onDragEnd={(param) => dragEnd(param)}>

                {/* Draggable list */}
                <Droppable droppableId='droppable-1'>
                    {
                        (provided, snapshot) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {
                                    bookmarks.map((item, i) => (

                                        // Draggable bookmark item
                                        <Draggable key={i} draggableId={`draggable-${i}`} index={i}>
                                            {
                                                (provided, snapshot) => {
                                                    return editBookmark === i ? <BookmarkForm editData={item} closeForm={closeForm} /> : (
                                                        <ManageBookmarksItem
                                                            showEdits={showEdits}
                                                            item={item}
                                                            provided={provided}
                                                            openEdit={openEdit}
                                                            index={i}
                                                            setActive={setActive}
                                                        />
                                                    )
                                                }
                                            }

                                        </Draggable>
                                    ))
                                }

                                {
                                    provided.placeholder
                                }
                            </div>
                        )
                    }

                </Droppable>
            </DragDropContext>

            {editBookmark !== null ? null : showForm ? <BookmarkForm showForm={showForm} closeForm={closeForm} /> : <AddButton title="Add bookmark" onClick={openForm} />}

            {
                !showForm && editBookmark === null && (
                    <div className='bookmarks__btn regular-btn' onClick={closeBookmarksModal}>
                        <p>Done</p>
                    </div>
                )}

        </div>
    )
}

export default ManageBookmarks;
