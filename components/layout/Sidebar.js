import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { uploadImages } from 'actions/images'
import Modal from 'components/elements/Modal';

import { Home, HomeOutline, Grid, GridOutline, Pricetag, Add, PricetagOutline } from 'react-ionicons'

const Sidebar = ({ uploadImages, groups }) => {

    const path = window.location.pathname;

    const [active, setActive] = useState(0);
    const [uploadModal, setUploadModal] = useState(false);
    const [uploadNumber, setUploadNumber] = useState(0);
    const [uploadGroup, setUploadGroup] = useState(null);
    const [uploadFiles, setUploadFiles] = useState(null);

    const resetUploadModal = () => {
        setUploadModal(false);
        setUploadNumber(0);
        setUploadGroup(null);
        setUploadFiles(null);
    }


    useEffect(() => {
        if (path === '/') {
            setActive(0);
        } else if (path.includes('groups')) {
            setActive(1)
        }
    })

    const getClasses = (index) => {
        return index === active ? 'sidebar__link sidebar__link--active' : 'sidebar__link';
    }

    function realFileClick() {
        const realFileBtn = document.getElementById('real-file');
        realFileBtn.click();
    }


    const selectFiles = (e) => {
        setUploadModal(true);
        setUploadNumber(e.target.files.length);
        setUploadFiles(e.target.files);
    }

    const handleUpload = () => {
        uploadImages(uploadFiles, groups[uploadGroup]);
        resetUploadModal();
    }


    return (
        <>
            <ul className='sidebar'>
                <Link to="/">
                    <li className={getClasses(0)} >
                        {active === 0 ? <Home height="17px" /> : <HomeOutline height="17px" />}
                        <p>Photos</p>
                    </li>
                </Link>
                <Link to="/groups">
                    <li className={getClasses(1)} >
                        {active === 1 ? <Grid height="17px" /> : <GridOutline height="17px" />}
                        <p>Groups</p>
                    </li>
                </Link>
                <li className={getClasses(2)} >
                    {active === 2 ? <Pricetag height="17px" /> : <PricetagOutline height="17px" />}
                    <p>Tags</p>
                </li>
                <li className="sidebar__link">
                    <div className='sidebar__btn btn-round' onClick={realFileClick}>
                        <input type="file" name="" id="real-file" hidden="hidden" multiple onChange={selectFiles} />
                        <Add height="20px" />
                        <p>Upload</p>
                    </div>

                </li>
            </ul>

            {/* Upload Modal */}
            <Modal
                modal={uploadModal}
                setModal={setUploadModal}
                title="Upload Images"
                width="30%"
            >
                    <p>Images to be uploaded: {uploadNumber === 1 ? `${uploadNumber} photo` : `${uploadNumber} photos`}</p>

                    <br />
                    <p>Select a group (optional):</p>
                    <ul className='upload-list'>
                        {
                            groups && groups.map((group, i) => (
                                <li 
                                    key={group._id} 
                                    className={`upload-list-item ${ uploadGroup === i && 'active'}`}
                                    onClick={() => setUploadGroup(i)}
                                >
                                    { group.title }
                                </li>
                            ))
                        }
                    </ul>

                    <button className='regular-btn w-100 mb-4' onClick={handleUpload} >Upload Photos</button>

            </Modal>
        </>

    )
}

const mapStateToProps = state => ({
    groups: state.groups.groups
})


export default connect(mapStateToProps, { uploadImages })(Sidebar);


