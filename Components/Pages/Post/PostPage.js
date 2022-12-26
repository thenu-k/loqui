import Content from './Content/Content';
import * as S from './PostPage.styled'

const PostPage = ({postData}) => {
    return (
        <S.PostPageContainer className='center'>
            <div className="postPage inner">
                <Content postData={postData}/>
            </div>
        </S.PostPageContainer>
    );
}

export default PostPage;