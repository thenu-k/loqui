import * as S from './SideSection.styled'

const SideSection = () => {
    return (
        <S.SideSectionContainer>
            <div className="inner sideMenu">
                <div className="bannerImage center">
                    <div className="profileImage"></div>
                </div>
                <div className="intro center">
                    <p className='center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius fugit sint id laborum quibusdam.
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