import styled from "styled-components";

export const PostPageContainer = styled.section`
    width: 100%; min-height: calc( 100vh - 60px);
    background-color: #F5F5F5;
    flex-direction: column;
    justify-content: flex-start;
    & .postPage.inner{
        width: 80%;
        max-width: 1500px;
        margin-top: 40px;
    }
`