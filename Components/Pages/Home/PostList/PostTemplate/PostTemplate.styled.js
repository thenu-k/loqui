import styled from "styled-components";

export const PostTemplateContainer = styled.div`
    width: 90%; padding: 20px 0;

    & .imageOuter{
        margin: 20px 0;
        overflow: hidden;
        width: 100%; height: 10vw;
        border-radius: 5px;
        background-image: ${props => props.about};
        background-size: cover;
        background-position: center; background-repeat: no-repeat;
        /* & img{
            width: 100%; height: auto;
        } */
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