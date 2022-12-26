import * as S from './HomePage.styled'
import Landing from './Landing/Landing';
import PostList from './PostList/PostList';
import SideSection from './SideSection/SideSection';

const Home = ({postData}) => {
    return (
        <S.HomeContainer>
            <div className="inner homePage">
                <PostList postData={postData}/>
                <SideSection/>
            </div>
        </S.HomeContainer>
    );
}

export default Home;