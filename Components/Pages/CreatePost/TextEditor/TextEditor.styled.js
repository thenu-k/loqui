import styled from "styled-components";

export const TextEditorContainer = styled.div`
    width: 100%;
    display: flex; flex-direction: column; align-items: center;
    &>*{width: 100%; box-sizing: border-box; padding: 10px 20px;}
    /* Basic editor styles */
    & .menuBar{
        display: flex; flex-direction: row; flex-wrap: wrap;
        border-bottom: 2px solid #d7d7d7;
        & button{
            padding: 5px 10px; margin-right: 5px; margin-bottom: 5px;
            border-radius: 3px;
            :hover{
                cursor: pointer;
            }
        }
    }
    .ProseMirror {
        &:focus{
            outline: none;
        }
        min-height: 200px;
        *{
            font-size: 1.2em;
        }

        > * + * {
        margin-top: 0.75em;
        }
        p{
            font-size: 1.2em;
            line-height: 1.8;
        }
        ul,
        ol {
        padding: 0 1rem;
        }
    
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
        line-height: 1.1;
        }

        h3{
            font-size: 1.5em;
            line-height: 1.3;
            padding: 10px 0;
        }
    
        code {
        background-color: rgba(#616161, 0.1);
        color: #616161;
        }
    
        pre {
        background: #0D0D0D;
        color: #FFF;
        font-family: 'JetBrainsMono', monospace;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
    
        code {
            color: inherit;
            padding: 0;
            background: none;
            font-size: 0.8rem;
        }
        }
    
        img {
        max-width: 100%;
        height: auto;
        }
    
        blockquote {
        padding-left: 1rem;
        border-left: 2px solid rgba(#0D0D0D, 0.1);
        }
    
        hr {
        border: none;
        border-top: 2px solid rgba(#0D0D0D, 0.1);
        margin: 2rem 0;
        }
        strong {
            font-weight: 500;
        }
        ul{
            list-style-type: circle;
        }

        @media all and (max-width: 500px){
            & h3{
                font-size: 1.3em;
            }
            & p{
                font-size: 1em;
            }
        }
    }
`