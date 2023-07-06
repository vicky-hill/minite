import { useState, useEffect } from 'react'
import { Home, Grid, Pricetag, Add, HomeOutline, GridOutline, PricetagOutline } from 'react-ionicons'
import Modal from '@/components/elements/Modal'

const BottomNav = ({ groups }) => {

    const navLinks = [
        { icon: <HomeOutline height="1.8rem" />, iconActive: <Home height="18px" />, text: 'Photos', link: '/' },
        { icon: <GridOutline height="18px" />, iconActive: <Grid height="18px" />, text: 'Groups', link: '/groups' },
        { icon: <PricetagOutline height="18px" />, iconActive: <Pricetag height="18px" />, text: 'Tags', link: '/' },
        { icon: <Add height="18px" />, iconActive: <Add height="18px" />, text: 'Upload' }
    ]



    useEffect(() => {
        if (window) {
            const url = window.location.origin;
            const path = window.location.pathname;

            if (path === '/') {
                setActive(0);
            } else if (path.includes('groups')) {
                setActive(1)
            }
        }

    })

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

    const activateTab = (e, i) => {
        e.preventDefault();
        if (i !== 3) {
            setActive(i);
            window.location.href = url + navLinks[i].link
        }
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
        // uploadImages(uploadFiles, groups[uploadGroup]);
        resetUploadModal();
    }

    return (
        <nav className="bottom-nav">

            {
                navLinks.map((link, i) => (
                    <button
                        key={i}
                        href=""
                        className={`bottom-nav-link ${active === i && 'bottom-nav-link--active'}`}
                        onClick={(e) => activateTab(e, i)}
                    >
                        {active === i ? link.iconActive : link.icon}

                        {i !== 3 ? <span className='bottom-nav-text'>{link.text}</span> : (
                            <span className='bottom-nav-text' onClick={realFileClick}>
                                <input type="file" name="" id="real-file" hidden="hidden" multiple onChange={selectFiles} />
                                Upload

                            </span>
                        )}

                    </button>
                ))
            }

        </nav>
    )
}



export default BottomNav;
