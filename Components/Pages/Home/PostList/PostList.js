import { useState } from 'react';
import Loading from './Loading/Loading';
import * as S from './PostList.styled'
import PostTemplate from './PostTemplate/PostTemplate';

const PostList = ({postData}) => {
    const data = [
        {
            imageURL: '/landing10.jpg',
            title: 'Breakthrough in Nuclear Fusion', 
            userName: 'Anonymous', 
            about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, quam!',
            postID: '205'
        },
        {
            imageURL: '/landing.jpg',
            title: 'Breakthrough in Nuclear Fusion', 
            userName: 'Anonymous', 
            about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, quam!',
            postID: '206'
        },
    ]
    const [isLoading, setIsLoading] = useState(true)
    var Output;
    if (isLoading){
        Output = <LoadingElement/>
    }else{
        Output = postData.map(dataElement => <div className="postOuter center"><PostTemplate data={dataElement}/></div>)
    }
    // Delay simulator
    const changeState = () => {
        setIsLoading(false)
    }
    setTimeout(changeState, 500);
    return (
        <S.PostListContainer>
            {Output}
        </S.PostListContainer>
    );
}

const LoadingElement = () => {
    return(
        <>
            <div className="postOuter center loading">
                <Loading/>
            </div>
            <div className="postOuter center loading">
                <Loading/>
            </div>
            <div className="postOuter center loading">
                <Loading/>
            </div>
        </>
    )
}

export default PostList;