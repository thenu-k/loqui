import * as S from './SideSection.styled'

const SideSection = () => {
    return (
        <S.SideSectionContainer>
            <div className="inner sideMenu">
                <div className="bannerImage"></div>
                <div className="intro center">
                    <p className='center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error saepe distinctio ea illo adipisci quas odit maxime cumque, ducimus alias sapiente laudantium quia ab iusto, quo, esse officia voluptatum architecto.
                    </p>
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