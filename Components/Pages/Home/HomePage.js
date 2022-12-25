import * as S from './HomePage.styled'
import Landing from './Landing/Landing';
import PostList from './PostList/PostList';

const Home = () => {
    return (
        <S.HomeContainer>
            <div className="inner">
                <PostList/>
            </div>
        </S.HomeContainer>
    );
}

export default Home;