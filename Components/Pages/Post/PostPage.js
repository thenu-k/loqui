import Content from './Content/Content';
import * as S from './PostPage.styled'

const PostPage = () => {
    return (
        <S.PostPageContainer className='center'>
            <div className="postPage inner">
                <Content/>
            </div>
        </S.PostPageContainer>
    );
}

export default PostPage;