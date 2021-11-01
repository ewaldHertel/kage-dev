import React, { useState } from 'react'
import Link from "next/link";
import Image from 'next/image';
import Logo from '../assets/image/Logo_Light.png';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [menuBtn, setMenuBtn] = useState('')
    const [menu, setMenu] = useState('')
    const [menuNav, setMenuNav] = useState('')
    const [NavItem, setNavItem] = useState('')

    const openMenu = () => {
        setMenuBtn('close')
        setMenu('show')
        setMenuNav('show')
        setNavItem('show')
        setShowMenu(true)
    }

    const closeMenu = () => {
        setMenuBtn('')
        setMenu('')
        setMenuNav('')
        setNavItem('')
        setShowMenu(false)
    }

    const toggleMenu = () => {
        if (!showMenu) {
            openMenu()
        } else {
            closeMenu()
        }
    }
    // @ts-ignore
    // @ts-ignore
    return (
        <header>
            <div className="brand">
                <Link href="/">
                    <a>
                        <Image
                            alt="Logo"
                            src={Logo}
                            layout={"fill"}
                        />
                    </a>
                </Link>
            </div>
            <div className={'menu-btn ' + menuBtn} onClick={toggleMenu}>
                <div className="btn-line"/>
                <div className="btn-line"/>
                <div className="btn-line"/>
            </div>

            <nav className={'menu ' + menu}>
                <ul className={'menu-nav ' + menuNav}>
                    <li className={'nav-item ' + NavItem}>
                        <Link href="/">
                            <a className="nav-link" onClick={toggleMenu}>Start</a>
                        </Link>
                    </li>
                    <li className={'nav-item ' + NavItem}>
                        <Link href="/contact">
                            <a className="nav-link" onClick={toggleMenu}>Contact</a>
                        </Link>
                    </li>
                    <li className={'nav-item ' + NavItem}>
                        <Link href="/aboutme">
                            <a className="nav-link" onClick={toggleMenu}>About Me</a>
                        </Link>
                    </li>
                    <li className={'nav-item ' + NavItem}>
                        <Link href="/webdev">
                            <a className="nav-link" onClick={toggleMenu}>Web-Entwicklung</a>
                        </Link>
                    </li>
                    <li className={'nav-item ' + NavItem}>
                        <Link href="/backenddev">
                            <a className="nav-link" onClick={toggleMenu}>Backend-Entwicklung</a>
                        </Link>
                    </li>

                    <li className={'nav-item ' + NavItem}>
                        <Link href="/databasedev">
                            <a className="nav-link" onClick={toggleMenu}>Datenbank-Entwicklung</a>
                        </Link>
                    </li>


                </ul>
            </nav>
        </header>
    )
}

export default Header
