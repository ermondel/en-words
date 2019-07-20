import React from 'react';

const Toolbar = props => (
    <div>
        <div>
            <div>{ props.currentPosition }/{ props.totalWords }</div>
            <div>
                <button 
                    onClick={ props.onShowAnswerClick } 
                    disabled={ props.wordСorrectly }
                    tabIndex={0}
                >answer</button>
            </div>
        </div>
        <div>
            <p>
                <button 
                    disabled={ !(props.wordСorrectly) } 
                    onClick={ props.onButtonNextClick }
                    ref={ props.refButtonNext }
                    tabIndex={0}
                >Next word</button>
            </p>
        </div>
    </div>
);

export default Toolbar;
