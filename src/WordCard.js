import React from 'react'
import './WordCard.css';

const WordCard = (props) => (
    <div className="WordCard">
        <div className="pos">{props.pos} / {props.total}</div>
        <div className="ukr">{props.ukr}</div>
        <div className="type">{props.type}</div>
        <div className="eng">{props.eng}</div>
        <form onSubmit={props.onSubmit}>
            <input type="text" name="translation" className="translation" />
            <button className="btn-check">Check</button>
        </form>
    </div>
)

export default WordCard