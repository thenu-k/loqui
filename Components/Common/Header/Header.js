import * as S from './Header.styled'
import Link from 'next/link'

const Header = () => {
    return (
        <S.HeaderContainer className='center'>
            <nav>
                <h2 className='center'>LOQUI</h2>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#">Github</Link></li>
                    <li><Link href="#">Contact</Link></li>
                    <li className='menuIcon center'>
                        <button className='center'>
                            <img src="/menuIcon.png" alt="" />
                        </button>
                    </li>
                </ul>
            </nav>
        </S.HeaderContainer>
    );
}

export default Header;