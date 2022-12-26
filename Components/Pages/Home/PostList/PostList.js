import * as S from './PostList.styled'
import PostTemplate from './PostTemplate/PostTemplate';

const PostList = () => {
    const data = [
        {
            imageURL: '/landing10.jpg',
            title: 'Breakthrough in Nuclear Fusion', 
            userName: 'Anonymous', 
            about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, quam!'
        },
        {
            imageURL: '/landing.jpg',
            title: 'Breakthrough in Nuclear Fusion', 
            userName: 'Anonymous', 
            about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, quam!'
        },
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