import React, { useState, useEffect, useRef } from 'react';
import { darkIcons, icons } from '../../utils/icons';
import { Close } from 'react-ionicons'
import { connect } from 'react-redux'
import { updateBookmark, saveBookmark } from 'actions/bookmarks'
import Input from '../elements/Input';

const BookmarkForm = ({ closeForm, editData, showForm, updateBookmark, saveBookmark }) => {

    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');

    const input = useRef();

    const startEdit = (name, icon) => {
        setName(name);
        setIcon(icon);
    }

    useEffect(() => {
        if (editData || showForm) input.current.focus();
        editData && startEdit(editData.name, editData.icon);

    }, [editData, showForm])

    const getRandomIcon = () => {
        const index = Math.floor(Math.random() * darkIcons.length - 1);
        return darkIcons[index]
    }

    const addBookmark = () => {
        let data = { 
            name,
            icon: icon || getRandomIcon()
        }
 
        saveBookmark(data);
    }

    const editBookmark = () => {
        updateBookmark(editData._id, { name, icon })
    }


    const onSubmit = () => {
        if(!name) return console.log('Name is required');

        !editData ? addBookmark() : editBookmark();
        
        closeForm();
    }

    return (
        <>
            <div className='modal-form'>
                <Close className='modal-form__close' onClick={closeForm} />
                <Input className='modal-form__input modal-form__input--bookmarks' ref={input} value={name} setValue={setName} placeholder="Bookmark name" />
                <button onClick={onSubmit} className="modal-form__button">Save</button>

            </div>

            <div className="modal-form__icons">
                {
                    icons.map((item, i) => (
                        <div key={i} onClick={() => setIcon(item.name)}>
                            {icon === item.name ? item.primaryIcon : item.greyIcon}
                        </div>

                    ))
                }
            </div>
        </>
    )
}


const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { updateBookmark, saveBookmark })(BookmarkForm);

