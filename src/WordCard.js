import React from 'react'
import './WordCard.css';

const WordCard = (props) => (
    <div className="WordCard">
        <div>{props.ukr}</div>
        <div>{props.eng}</div>
        <div>{props.type}</div>
    </div>
)

export default WordCard