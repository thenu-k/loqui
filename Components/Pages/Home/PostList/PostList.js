import { useEffect, useState } from 'react';
import Loading from './Loading/Loading';
import * as S from './PostList.styled'
import PostTemplate from './PostTemplate/PostTemplate';
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../../../../firebase/firebase'
import { query, orderBy } from "firebase/firestore";  

const PostList = () => {
    const [postData, setPostData] = useState(null)
    const getPostData = async() => {
        try{
            console.log('Retrieving Data')
            const q = query(collection(db, "postData"), orderBy('created', 'desc'));
            const rawPostData = await getDocs(q)
            const postData = rawPostData.docs.map(doc => ({
                postID: doc.id,
                imageURL: doc.data().imageURL,
                title: doc.data().title,
                about: doc.data().about,
                userName: doc.data().userName
              })) 
              setPostData(postData)
        }catch{
            console.log('Error Retrieving Data')
        }
    }
    useEffect(()=>{
        getPostData()
    },[])
    var Output;
    if (postData===null){
        Output = <LoadingElement/>
    }else{
        Output = postData.map(dataElement => <div className="postOuter center"><PostTemplate data={dataElement}/></div>)
    }
    // // Delay simulator
    // const changeState = () => {
    //     setIsLoading(false)
    // }
    // setTimeout(changeState, 500);
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