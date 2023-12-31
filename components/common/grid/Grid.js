import React, { useState, useEffect } from 'react'
import GridItem from './GridItem'
import GridEmpty from './GridEmpty'
import GridModal from './GridModal'
import { Trash2 } from 'react-feather'

const Grid = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(null);
    const [selected, setSelected] = useState([]);

    // useEffect(() => {
    //     const unsubscribe = document.addEventListener('keydown', function (e) {
    //         if (e.key === 'Escape') {
    //             endSelection();
    //             setSelected([])
    //         }
    //     })

    //     return unsubscribe;
    // }, []) /* eslint-disable-line */


    const openGridModal = (image, index) => {
        document.querySelector('body').classList.add('no-scroll');
        setCurrentIndex(index)
    }

    const closeGridModal = () => {
        document.querySelector('body').classList.remove('no-scroll');
        setCurrentIndex(null);
    }

    // const toggleSelectedImage = (id) => {
    //     const result = [...selected];

    //     if (selected.includes(id)) {
    //         const index = selected.indexOf(id);
    //         result.splice(index, 1)
    //         setSelected(result)
    //     } else {
    //         result.push(id)
    //         setSelected(result);
    //     }
    // }


    const imageGrid = (
        <>
            <div className='grid__body'>

                {   // Image grid
                    images.map((image, i) => (
                        <GridItem
                            isSelected={selected.includes(image._id)}
                            // toggleSelectedImage={toggleSelectedImage}
                            // startSelection={startSelection}
                            // selection={selection}
                            key={image._id}
                            openGridModal={openGridModal}
                            imageURL={`${process.env.IMAGE_URL}/${image.url}`}
                            imageId={image._id}
                            i={i}
                        />
                    ))
                }
            </div>

            {/* {selection && (
                <div className="grid__edit">
                    <Trash2 size="20px" onClick={() => deleteImages(selected)} />
                </div>
            )} */}




            {   // Full screen image
                currentIndex !== null && (
                    <GridModal
                        images={images}
                        closeGridModal={closeGridModal}
                        currentImageIndex={currentIndex}
                    />
                )
            }

        </>
    )

    return (
        images.length === 0 ? <GridEmpty /> : imageGrid
    )
}

export default Grid;
