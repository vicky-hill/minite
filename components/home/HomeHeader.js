import React, { useState, useEffect } from 'react';
import { EllipsisHorizontal } from 'react-ionicons';
import { darkIcons } from '../../utils/icons';
import { Dropdown, DropdownItem, DropdownButton } from 'components/elements/Dropdown';

const HomeHeader = ({ bookmarks, active, setActive, openManageBookmarks }) => {
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        const unsubscribe = document.addEventListener('click', (e) => {
            if(e.target.tagName !== 'svg') {
                setDropdown(false);
            }
        })

        return unsubscribe;
    }, [])

    const toggleDropdown = (e) => {
        setDropdown(!dropdown);
    }
    
    return (
        <div className='grid__header'>

            <h1 className='grid__header-title hide-desktop'>All Photos</h1>

            <div className='grid__header-tabs'>
                {
                    bookmarks.map((bookmark, i) => (
                        <div
                            key={i}
                            className={`${i === active ? 'active' : ''}`}
                            onClick={() => setActive(i)}
                        >
                            { darkIcons[bookmark.icon] }
                            <p>{bookmark.name}</p>
                        </div>
                    ))
                }

                <Dropdown distance="50%" className="grid__header-dots" dropdown={dropdown} >
                    <DropdownButton>
                        <button onClick={toggleDropdown}>
                            <EllipsisHorizontal color="#dbdbdb" />
                        </button>
                        
                    </DropdownButton>
                    <DropdownItem onClick={openManageBookmarks}>Manage Bookmarks</DropdownItem>
                </Dropdown>

            </div>
        </div>
    )
}

export default HomeHeader;
