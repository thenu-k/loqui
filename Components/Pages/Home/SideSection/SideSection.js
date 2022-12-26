import * as S from './SideSection.styled'

const SideSection = () => {
    return (
        <S.SideSectionContainer id='sideSection'>
            <div className="inner sideMenu">
                <div className="bannerImage center">
                    <div className="profileImage"></div>
                </div>
                <div className="intro center">
                    <p className='center'>
                        Do not go gentle into that good night.<br/>
                        Rage, rage against the dying of light. 
                    </p>
                    <span>Thenu Kaluarahchi © 2022  </span>
                </div>
            </div>
            <div className="createPost outer">
                <button>
                    <span>Create Post</span>
                </button>
            </div>
        </S.SideSectionContainer>
    );
}

export default SideSection;