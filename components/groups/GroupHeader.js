import { Plus } from 'react-feather'


const GroupHeader = ({ openCreateGroup }) => {

    return (
        <div className="group__header">
            <h1 className="group__title"> Groups</h1>
            <button onClick={openCreateGroup} className="regular-btn flex items-center content-center"> <Plus className='mr-2' size={18} color="#fff" />Add Group</button>
            <div className="group__search">
                <input className='group__search-input' type="text" placeholder='Search groups' />
            </div>
        </div>
    )
}


export default GroupHeader;

