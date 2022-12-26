import * as S from './Header.styled'

const Header = () => {
    return (
        <S.HeaderContainer className='center'>
            <nav>
                <h2 className='center'>LOQUI</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Github</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </S.HeaderContainer>
    );
}

export default Header;