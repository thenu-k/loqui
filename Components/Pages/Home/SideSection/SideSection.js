import { useRouter } from 'next/router';
import * as S from './SideSection.styled'

const SideSection = () => {
    const router = useRouter()
    const createPostRedirect = (e) => {
        e.preventDefault()
        router.push('/createpost')
    }
    return (
        <S.SideSectionContainer id='sideSection'>
            <div className="inner sideMenu">
                <div className="bannerImage center">
                    <div className="profileImage"></div>
                </div>
                <div className="intro center">
                    <p className='center'>
                        Do Not Go Gentle Into That Good Night
                    </p>
                    {/* <span>Thenu Kaluarahchi © 2022  </span> */}
                </div>
            </div>
            <div className="createPost outer">
                <button onClick={createPostRedirect}>
                    <span>Create Post</span>
                </button>
            </div>
        </S.SideSectionContainer>
    );
}

export default SideSection;