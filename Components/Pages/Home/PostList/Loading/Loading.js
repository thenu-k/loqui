import * as S from './Loading.styled'

const Loading = () => {
    return (
        <S.LoadingContainer>
            <div className="bar large"></div>
            <div className="bar small"></div>
        </S.LoadingContainer>
    );
}

export default Loading;