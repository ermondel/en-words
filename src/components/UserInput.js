import React from 'react';

const defaultStyle = { color: 'black' };
const highlightStyle = { color: 'green' };

const UserInput = props => (
    <div>
        <textarea 
            value={ props.showAnswer ? props.answer : props.word } 
            onChange={ props.onChange } 
            onFocus={ props.onFocus } 
            style={ props.wordСorrectly ? highlightStyle : defaultStyle }
        ></textarea>
    </div>
);

export default UserInput;
