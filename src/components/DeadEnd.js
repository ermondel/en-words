import React from 'react';

const DeadEnd = props => (
    <div>
        {
            props.wordsListLength ? 
                <div>
                    <p>You have reached the end of the list.</p>
                    <p><button onClick={ props.onReloadClick }>Reload</button></p>
                </div>
                :
                <p>No dictionary found.</p>
        }
    </div>
);

export default DeadEnd;
