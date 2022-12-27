import Content from './Content/Content';
import * as S from './PostPage.styled'

const PostPage = ({postData}) => {
    const data = postData[0]
    return (
        <S.PostPageContainer className='center'>
            <div className="postPage inner">
                <Content data={data}/>
            </div>
        </S.PostPageContainer>
    );
}

export default PostPage;