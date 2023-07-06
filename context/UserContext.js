import { createContext, useState, useEffect } from "react"
import api from "@/utils/api"

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        !currentUser && checkUserSession();
    }, [])

    useEffect(() => {
        error && setTimeout(() => {
            setError(null);
        }, 3000)
    }, [error])

    /** Check user session and get current user */
    const checkUserSession = async () => {
        try {
            const user = await api.get('/user');
            setCurrentUser(user);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false)
        }
    }

    /** @param payload: { email, password } */
    const register = async (payload) => {

    }

    /** @param payload: { email, password } */
    const login = async (payload) => {

    }

    const resetPassword = async (email) => {

    }

    /** Logout */
    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('token');
    }

    const value = {
        login,
        logout,
        register,
        loading,
        error,
        setError,
        currentUser,
        setCurrentUser,
        checkUserSession,
        resetPassword
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;
