import * as S from './Landing.styled'

const Landing = () => {
    return (
        <S.LandingContainer className='center'>
            <div className="intro center">
                <h1>
                <span>Do not</span> go gentle into that <span>good night.</span>
                </h1>
            </div>
            <div className="image center">
                <div className="inner">
                </div>
            </div>
        </S.LandingContainer>
    );
}

export default Landing;