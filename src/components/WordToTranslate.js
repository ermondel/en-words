import React from 'react';

const defaultStyle = { color: 'black' };
const highlightStyle = { color: 'green' };

const WordToTranslate = props => (
    <div style={ props.highlight ? highlightStyle : defaultStyle }>
        { props.word }
    </div>
);

export default WordToTranslate;
