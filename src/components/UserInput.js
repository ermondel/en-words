import React from 'react';

const UserInput = props => (
    <div>
        <textarea 
            value={ props.showAnswer ? props.answer : props.word } 
            onChange={ props.onChange } 
            onFocus={ props.onFocus }
        ></textarea>
    </div>
);

export default UserInput;
