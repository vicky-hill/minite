import { createContext, useState, useEffect } from "react"
import api from "@/utils/api"

const ImageContext = createContext()

export const ImageProvider = ({ children }) => {
    const [images, setImages] = useState(null);
    const [groups, setGroups] = useState(null);
    const [bookmarks, setBookmarks] = useState(null);
    const [activeBookmark, setActiveBookmark] = useState(0);

    useEffect(() => {
        !groups && getGroups();
        !bookmarks && getBookmarks();

        bookmarks && getImages(bookmarks[0]._id);
    }, [bookmarks]);

    /** Get images */
    const getImages = async (activeBookmarkID) => {
        try {
            const images = await api.get('/image/' + activeBookmarkID);
            setImages(images);
        } catch (err) {
          console.log(err);
        }
    }

    /** Get groups */
    const getGroups = async () => {
        try {
            const groups = await api.get('/group');
            setGroups(groups);
        } catch (err) {
          console.log(err);
        }
    }

    /** Get bookmarks */
    const getBookmarks = async () => {
        try {
            const bookmarks = await api.get('/bookmark');
            setBookmarks(bookmarks);
        } catch (err) {
          console.log(err);
        }
    }

    const value = {
        images,
        groups,
        bookmarks,
        activeBookmark,
        setActiveBookmark
    }

    return (
        <ImageContext.Provider value={value}>
            {children}
        </ImageContext.Provider>
    )
}

export default ImageContext;
