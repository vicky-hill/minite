import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import Searchbar from './Searchbar'
import logoPng from '@/public/images/logo.png'
import { Dropdown, DropdownItem, DropdownButton } from '@/components/elements/Dropdown'
import UserContext from '@/context/UserContext'


function Navbar({ logout }) {
    const [currentURL, setCurrentURL] = useState('register');
    const [dropdown, setDropdown] = useState(false);

    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        const unsubscribe = document.addEventListener('click', (e) => {
            if(!e.target.classList.contains("fas")) {
                setDropdown(false);
            }
        })

        return unsubscribe;
    }, [])

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }

    // Toggle between Sign in and sign up
    function changeURL() {
        setCurrentURL(window.location.href);
    }

    // Logo image and text
    const logo = (
        <Link href="/">
            <div className='header__logo'>
                <img src={logoPng.src} alt="logo" />
                <h1>Minite</h1>
            </div>
        </Link>
    )

    // Logged in navbar
    const loggedInNav = (
        <div className="nav nav--login">

            {logo}

            <Searchbar hideOnMobile />

            <Dropdown dropdown={dropdown} setDropdown={setDropdown} hideOnMobile >
                <DropdownButton>
                    <button className="btn btn-primary btn-dropdown" onClick={toggleDropdown}>
                        Profile
                        <i className="fas fa-chevron-down" />
                    </button>
                </DropdownButton>

                <DropdownItem onClick={logout}>Log out</DropdownItem>
            </Dropdown>
        </div>
    )

    // Logged out navbar
    const loggedOutNav = (
        <div className="nav nav--logout">
            {logo}

            {
                currentURL.includes('login') ?
                    <Link href="login" className="nav__link" onClick={changeURL} >Sign in <i className="fas fa-sign-in-alt"> </i></Link> :
                    <Link href="register" className="nav__link" onClick={changeURL}>Sign up <i className="fas fa-user-plus"> </i></Link>
            }
        </div>
    )

    return (
        <div className='header'>

            {/* Desktop Menu */}
            {currentUser ? loggedInNav : loggedOutNav}

        </div>
    )
}

export default Navbar;
