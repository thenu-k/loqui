import styled from "styled-components";

export const PostTemplateContainer = styled.div`
    width: 90%; padding: 20px 0;

    & .imageOuter{
        margin: 20px 0;
        overflow: hidden;
        width: 100%; height: clamp(300px, 30vw, 500px);
        border-radius: 5px;
        background-size: cover; 
        background-position: center; background-repeat: no-repeat;
    }
    & .textSection{
        & > *{margin: 10px 0; width: 100%;}
        display: flex; flex-direction: column; 

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