import styled from "styled-components";

export const PostTemplateContainer = styled.article`
    width: 100%; padding-bottom: 20px;
    display: flex; flex-direction: column; align-items: center;

    & .imageOuter{
        margin-bottom: 20px;
        overflow: hidden;
        width: 100%; height: clamp(300px, 30vw, 500px);
        border-radius: 5px 5px 0 0;
        background-size: cover; 
        background-position: center; background-repeat: no-repeat;
    }
    & .textSection{
        & > *{margin: 10px 0; width: 100%;}
        display: flex; flex-direction: column; 
        width: 90%;

        & h3{
            font-size: 2em; font-weight: 600;
        }

        & h4{
            width: fit-content;
            background-color: black; color: white;
            border-radius: 5px;
            padding: 5px 10px;
        }
    }
`