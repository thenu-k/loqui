import * as S from './HomePage.styled'
import Landing from './Landing/Landing';
import PostList from './PostList/PostList';
import SideSection from './SideSection/SideSection';

const Home = () => {
    return (
        <S.HomeContainer>
            <div className="inner homePage">
                <PostList/>
                <SideSection/>
            </div>
        </S.HomeContainer>
    );
}

export default Home;