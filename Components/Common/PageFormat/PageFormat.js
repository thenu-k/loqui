import * as S from './PageFormat.styled'

const PageFornat = ({children}) => {
    return (
        <S.PageFormatContainer>
            {children}
        </S.PageFormatContainer>
    );
}

export default PageFornat;