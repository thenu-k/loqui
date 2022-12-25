import * as S from './PostList.styled'
import PostTemplate from './PostTemplate/PostTemplate';

const PostList = () => {
    const data = [
        {
            imageURL: '/landing.jpg', title: 'Breakthrough in Nuclear Fusion', userName: 'Anonymous', about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, quam!'
        },
        {
            url: null, title: 'Title', userName: 'userName', about: 'About'
        },
        {
            url: null, title: 'Title', userName: 'userName', about: 'About'
        }
    ]
    return (
        <S.PostListContainer>
            {
                data.map( dataElement => {
                    return(
                        <div className="postOuter center">
                            <PostTemplate data={dataElement}/>
                        </div>
                    )
                })
            }
        </S.PostListContainer>
    );
}

export default PostList;