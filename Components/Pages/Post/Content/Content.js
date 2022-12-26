import * as S from './Content.styled'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Content = () => {
    const [value, setValue] = useState('');
    const genHTML = () => {
        return {
            __html: `${value}`
        }
    }
    return (
        <S.ContentContainer>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
            <div className="test">
                {value}
            </div>
        </S.ContentContainer>
    );
}

export default Content;