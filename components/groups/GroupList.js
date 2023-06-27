import React from 'react';
import GroupListItem from './GroupListItem';

const GroupList = ({ groups }) => {

    return (
        <div className="group__list">
            {
                groups && (
                    groups.map(group => (
                        <GroupListItem
                            key={group._id}
                            title={group.title}
                            images={group.images}
                            id={group._id}
                        />
                    ))
                )
            }
        </div>

    )
}

export default GroupList;
