import * as S from './PageFormat.styled'

const PageFornat = ({children}) => {
    return (
        <S.PageFormatContainer>
            Nav
            {children}
        </S.PageFormatContainer>
    );
}

export default PageFornat;