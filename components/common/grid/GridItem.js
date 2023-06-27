import React, { useEffect } from 'react';
import useLongPress from 'hooks/useLongPress';


const GridItem = ({ openGridModal, imageId, imageURL, i, startSelection, selection, isSelected, toggleSelectedImage }) => {

    const onLongPress = () => {
        startSelection();
        toggleSelectedImage(imageId)
    };

    const onClick = () => {
        if(selection) {
            toggleSelectedImage(imageId)
        } else {
            openGridModal(imageURL, i)
        }
    }

    const defaultOptions = {
        shouldPreventDefault: true,
        delay: 200,
    };

    const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

    return (
        <div 
            {...longPressEvent}
            className={`grid__body-item ${isSelected && 'grid__body-item--selected'}`}
            style={{ backgroundImage: `url(${imageURL})`}}
        >
        
        </div>
    )
}

export default GridItem;

