import React, { useState, useEffect } from 'react';

const GridModal = ({ images, currentImageIndex, closeGridModal }) => {

    const [controlls, setControlls] = useState(true);

    useEffect(() => {
        const unsubscribe = document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                closeGridModal();
            } 
        })

        return unsubscribe;
    }, []) /* eslint-disable-line */

    // Add first and last clones
    const lastImage = images[images.length - 1]
    const firstImage = images[0];
    images = [lastImage, ...images, firstImage];

    // Count for current slide
    const [currentSlide, setCurrentSlide] = useState(currentImageIndex + 1);
    const [transition, setTransition] = useState('');

    // Handle first and last slide
    const loopCarousel = () => {
        if (currentSlide === 0) {
            setTransition('none');
            setCurrentSlide(images.length - 2);
        }

        if (currentSlide === images.length - 1) {
            setTransition('none');
            setCurrentSlide(1);
        }
    }

    // Get image height, width style
    const getImageStyle = (orientation) => {
        if(window.innerWidth < 600) {
            return { width: '100%'}
        } 

        return orientation === 'landscape' ? { width: '100%'} :  { height: '100%'}
    }

    // Previous Button
    const previous = () => {
        if (currentSlide <= 0) return;
        setTransition('transform .3s ease-in-out');
        currentSlide === 0 ? setCurrentSlide(images.length - 1) : setCurrentSlide(currentSlide - 1);
    }

    // Next Button
    const next = () => {
        if (currentSlide >= images.length - 1) return;
        setTransition('transform .3s ease-in-out');
        currentSlide === images.length - 1 ? setCurrentSlide(1) : setCurrentSlide(currentSlide + 1);
    }

    // Toggle Controls
    const toggleControls = (e) => { 
        if(!e.target.classList.contains('fas')) {
            setControlls(!controlls)
        }
    }

    return (
        <div className='grid__modal' onClick={toggleControls}>
            <div className="grid__modal-carousel">

                {/* Slides */}
                {images.map((image, i) => (
                    <div
                        key={i}
                        className="grid__modal-slide"
                        style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: transition }}
                        onTransitionEnd={loopCarousel}
                        id={i}
                    >
                        {/* Slide Image */}
                        <img src={`https://minite-bucket.s3.us-west-1.amazonaws.com/${image.url}`} alt="" style={getImageStyle(image.orientation)} />
                    </div>
                ))}
            </div>

            {/* Previous button */}
            <button className={`grid__modal-btn grid__modal-btn--left ${ controlls ? '' : 'hidden'}`} onClick={previous}>
                <i className="fas fa-chevron-left"></i>
            </button>

            {/* Next button */}
            <button className={`grid__modal-btn grid__modal-btn--right ${ controlls ? '' : 'hidden'}`} onClick={next}>
                <i className="fas fa-chevron-right"></i>
            </button>

            {/* Close button */}
            <button className={`grid__modal-btn grid__modal-btn--close ${ controlls ? '' : 'hidden'}`} onClick={closeGridModal}>
                <i className="fas fa-times"></i>
            </button>


        </div>
    )
}

export default GridModal;
