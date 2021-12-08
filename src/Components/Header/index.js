import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import Image from 'next/image'

import NetflixImage from '../../assets/netflix.png'
import { BsBellFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

function Header() {
    const [scroll, setScroll] = useState(false);

    function togleHeader (){
        if(window.scrollY >= 80){
            setScroll(true)
        }
        else{
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', togleHeader);
      }, []);

    return (
        <header className={scroll ? 'header active' : 'header'} >
            <nav>
                <div><Image src={NetflixImage} alt="Netflix Logo" width={80} height={25} /></div>
                <Link href="/"><a>Início</a></Link>
                <Link href="/"><a>Séries</a></Link>
                <Link href="/"><a>Filmes</a></Link>
                <Link href="/"><a>Bombando</a></Link>
                <Link href="/"><a>Minha Lista</a></Link>
            </nav>
            <nav className='nav_user'>
                <ul>
                    <li><FaSearch /></li>
                    <li>Infantil</li>
                    <li><BsBellFill /></li>
                    <li><BsPersonFill /></li>
                </ul>

            </nav>
        </header>
    );
}

export default Header;