import * as S from './PostTemplate.styled'

const PostTemplate = ({data}) => {
    console.log(data.imageURL)
    return (
        <S.PostTemplateContainer>
            {
                (data.imageURL!=null)
                    ? (
                        <div className="imageOuter center" style={{backgroundImage: `url(${data.imageURL})`}}>
                        </div>
                    )
                    : null
            }
            <div className="textSection">
                    <h3>{data.title}</h3>
                    <h4>{data.userName}</h4>
                    <p>{data.about}</p>
            </div>
        </S.PostTemplateContainer>
    );
}

export default PostTemplate;