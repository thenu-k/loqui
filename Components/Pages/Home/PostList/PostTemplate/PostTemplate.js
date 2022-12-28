import * as S from './PostTemplate.styled'
import Hyphenated from 'react-hyphen';
import de from 'hyphenated-de';

const PostTemplate = ({data}) => {
    //Redirection logic
    const redirect = (postID) => {
        window.location.replace(`/post/${postID}`)
    }
    return (
        <S.PostTemplateContainer onClick={(e)=>{redirect(data.postID)}}>
            {
                (data.imageURL!=null)
                    ? (
                        // The .png is needed for imgur hosting
                        <div className="imageOuter center" style={{backgroundImage: `url(${data.imageURL}.png)`}}>
                        </div>
                    )
                    : null
            }
            <div className="textSection">
                    <h3>{data.title}</h3>
                    <h4>{data.userName}</h4>
                    {/* Lang de for word break */}
                    <Hyphenated lang={de}>
                        <p lang='de'>{data.about}</p>
                    </Hyphenated>
            </div>
        </S.PostTemplateContainer>
    );
}

export default PostTemplate;