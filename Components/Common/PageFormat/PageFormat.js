import Header from '../Header/Header';
import * as S from './PageFormat.styled'

const PageFornat = ({children}) => {
    return (
        <S.PageFormatContainer>
            <Header/>
            {children}
        </S.PageFormatContainer>
    );
}

export default PageFornat;