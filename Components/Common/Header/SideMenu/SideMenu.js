import * as S from './SideMenu.styled'
import SideSection from '../../../Pages/Home/SideSection/SideSection'

const SideMenu = () => {
    return (
        <S.SideMenuContainer className='center' id='sideMenu'>
            <div className="clearSection" onClick={() => {document.querySelector('#sideMenu').classList.toggle('visible')}}>
            </div>
            <div className="contentSection">
                <div className="buttonContainer">
                    <button onClick={() => {document.querySelector('#sideMenu').classList.toggle('visible')}}>
                        <img src="/closeIcon.png" alt="" />
                    </button>
                </div>
                <SideSection/>
            </div>
        </S.SideMenuContainer>
    );
}

export default SideMenu;