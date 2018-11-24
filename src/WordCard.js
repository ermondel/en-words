import React from 'react'

const WordCard = (props) => (
    <div>
        <div>{props.ukr}</div>
        <div>{props.eng}</div>
        <div>{props.type}</div>
    </div>
)

export default WordCard