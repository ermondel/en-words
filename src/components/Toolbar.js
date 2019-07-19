import React from 'react';

const Toolbar = props => (
    <div>
        <div>
            <div>{ props.currentPosition }/{ props.totalWords }</div>
            <div>
                <button 
                    onClick={ props.onShowAnswerClick } 
                    disabled={ props.wordСorrectly }
                >answer</button>
            </div>
        </div>
        <div>
            <p>
                <button 
                    disabled={ !(props.wordСorrectly) } 
                    onClick={ props.onButtonNextClick }
                >Next word</button>
            </p>
        </div>
    </div>
);

export default Toolbar;
