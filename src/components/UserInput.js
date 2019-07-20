import React from 'react';

const UserInput = props => {
    const styles = {
        soft:    { color: 'grey' },
        light:   { color: 'green' },
        default: { color: 'black' }
    };
    let style = 
        props.showAnswer ? styles.soft 
            : 
                props.wordСorrectly ? styles.light 
                : 
                    styles.default;
    
    return (
        <div className="UserInput">
            <textarea 
                value={ props.showAnswer ? props.answer : props.word } 
                onChange={ props.onChange } 
                onFocus={ props.onFocus } 
                style={ style }
                ref={ props.refUserInput }
                tabIndex={0}
                autoFocus
            ></textarea>
        </div>
    );
};

export default UserInput;
