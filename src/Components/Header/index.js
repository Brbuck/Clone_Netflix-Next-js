import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'

import NetflixImage from '../../assets/netflix.png'
import Avatar from '../../assets/avatar.jpg'

import { BsBellFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

function Header() {
    const [scroll, setScroll] = useState(false);

    function togleHeader() {
        if (window.scrollY >= 80) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', togleHeader);
    }, []);

    const [click, setClick] = useState(false)

    function togleMenu(){
        setClick(!click)
    }

    return (
        <header className={scroll ? 'header active' : 'header'} >
            <div className='nav_menu'>
                <div><Image className='image' src={NetflixImage} alt="Netflix Logo"  width={93} height={25} /></div>
               <span onClick={togleMenu} onMouseOver={togleMenu} >Navegar &#9660;</span>
                <nav onMouseLeave={togleMenu} className={ click ? 'menu active' : 'menu'} >
                    <Link href="/"><a>Início</a></Link>
                    <Link href="/"><a>Séries</a></Link>
                    <Link href="/"><a>Filmes</a></Link>
                    <Link href="/"><a>Bombando</a></Link>
                    <Link href="/"><a>Minha Lista</a></Link>
                </nav>
            </div>
            <nav className='nav_user'>
                <ul>
                    <li><FaSearch /></li>
                    <li>Infantil</li>
                    <li><BsBellFill /></li>
                    <li><Image src={Avatar} alt="Netflix Logo" width={35} height={35} /></li>
                </ul>

            </nav>
        </header>
    );
}

export default Header;