import * as S from './Header.styled'
import Link from 'next/link'
import SideMenu from './SideMenu/SideMenu';
import { useEffect } from 'react';

const Header = () => {
    return (
        <S.HeaderContainer className='center'>
            <nav>
                <Link href='/' className='logo center'>LOQUI</Link>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#">Github</Link></li>
                    <li><Link href="#">Contact</Link></li>
                    <li className='menuIcon center'>
                        <button className='center' onClick={() => {document.querySelector('#sideMenu').classList.toggle('visible')}}>
                            <img src="/menuIcon.png" alt="" />
                        </button>
                    </li>
                </ul>
            </nav>
            <SideMenu/>
        </S.HeaderContainer>
    );
}

export default Header;