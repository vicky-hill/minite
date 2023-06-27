import React, { useState, useEffect } from 'react';
import { DropdownButton, DropdownItem, Dropdown } from 'components/elements/Dropdown';
import { EllipsisHorizontal } from 'react-ionicons'
import GroupToggle from './GroupToggle';
import Modal from 'components/elements/Modal';
import LeaveGroup from './LeaveGroup';


const GroupDetailHeader = ({ showAllImages, isPrivate, title, deleteGroup, members }) => {
    const [dropdown, setDropdown] = useState(false);
    const [modal, setModal] = useState('');

    const openConfirmation = () => {
        isPrivate ? setModal('Delete Group') : setModal('Leave Group')
    }

    useEffect(() => {
        const unsubscribe = document.addEventListener('click', (e) => {
            if (e.target.tagName !== 'svg') {
                setDropdown(false);
            }
        })

        return unsubscribe;
    }, [])

    const toggleDropdown = (e) => {
        setDropdown(!dropdown);
    }

    const handleDelete = () => {
        deleteGroup();
        setModal(false);
        window.location.href = window.location.origin + '/groups';
    }
 
    const MoreOptionsDropdown = ({ mobile, isPrivate }) => {
        const classNames = ['grid__header-dots'];
        !isPrivate && classNames.push('ml-6');
        !mobile && classNames.push('top-10');

        const className = classNames.join(' ').trim();

        return (
            <Dropdown distance="50%" className={className} dropdown={dropdown} >
                <DropdownButton>
                    <button onClick={toggleDropdown}>
                        <EllipsisHorizontal color="#dbdbdb" />
                    </button>

                </DropdownButton>
                <DropdownItem>Add Photos</DropdownItem>
                <DropdownItem>Add Members</DropdownItem>
                <DropdownItem onClick={openConfirmation}>{isPrivate ? 'Delete' : 'Leave'}</DropdownItem>
            </Dropdown>
        )
    }


    return (
        <div className='grid__header'>

            <div className='grid__header-info--mobile'>
                <h1 className='grid__header-title'>{ title }</h1>
                <MoreOptionsDropdown mobile={true} isPrivate={isPrivate} />
            </div>


            <div className='grid__header-info'>

                <h1 className="hide-mobile">{ title }</h1>

                {!isPrivate && (
                    <>
                        <p>{members.length} Members</p>
                        <GroupToggle showAll={showAllImages} resource='photo' className={`${!isPrivate ? 'ml-auto' : ''}`} />
                    </>
                )}

                {window.innerWidth > 480 && <MoreOptionsDropdown mobile={false} isPrivate={isPrivate} />}

            </div>

            <Modal
                modal={modal}
                setModal={setModal}
                title={modal}
                width="30%"
            >
                {
                    isPrivate ? (
                        <LeaveGroup
                            message='Do you want to delete the group only, or delete the group and all photos in it?'
                            buttonLightTitle='Delete group only'
                            buttonDangerTitle='Delete group and all images'
                            deleteGroup={handleDelete}
                        />
                    ) : (
                        <LeaveGroup
                            message='Do you want to leave and delete the group, or keep it with your images only?'
                            buttonLightTitle='Keep group'
                            buttonDangerTitle='Delete group'
                            deleteGroup={handleDelete}
                        />
                    )
                }

            </Modal>
        </div>
    )
}

export default GroupDetailHeader;
