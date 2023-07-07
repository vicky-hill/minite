import React, { useState, useContext } from 'react'
import ImageContext from '@/context/ImageContext'
import GroupHeader from '@/components/groups/GroupHeader'
import GroupList from '@/components/groups/GroupList'
import Container from '@/components/layout/Container'
import Modal from '@/components/elements/Modal'
// import CreateGroup from '@/components/groups/CreateGroup'

const Groups = ({  }) => {
    const [createGroup, setCreateGroup] = useState(false);

    const { groups } = useContext(ImageContext);

    const openCreateGroup = () => setCreateGroup(true);
    const closeCreateGroup = () => setCreateGroup(false);

    return (
        <Container>
            <div className="group">
                <GroupHeader openCreateGroup={openCreateGroup} />
                <GroupList groups={groups} />
            </div>

            <Modal
                modal={createGroup}
                setModal={setCreateGroup}
                title="Create Group"
                width="30%"
            >
                Create Group to come soon
                {/* <CreateGroup closeModal={closeCreateGroup} saveGroup={saveGroup} getAllUsers={getAllUsers} allUsers={allUsers} createGroup={createGroup} addMemberInput={addMemberInput} setAddMemberInput={setAddMemberInput} /> */}
            </Modal>
        </Container >
    )
}

export default Groups;

