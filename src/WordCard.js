import React from 'react'
import './WordCard.css';

const WordCard = (props) => (
    <div className="WordCard">
        <div>{props.pos} / {props.total}</div>
        <div>{props.ukr}</div>
        <div>{props.eng}</div>
        <div>{props.type}</div>
        <form onSubmit={props.onSubmit}>
            <input type="text" name="translation" />
            <button>Check</button>
        </form>
    </div>
)

export default WordCard