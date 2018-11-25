import React from 'react'

const EndOfWords = (props) => (
    <div>
        You have reached the end of the word list. <button onClick={props.restart}>Restart</button>
    </div>
)

export default EndOfWords