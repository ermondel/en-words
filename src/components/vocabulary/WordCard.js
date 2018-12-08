import React from 'react';
import './style/WordCard.css';

/**
 * WordCard
 * @param {*} props 
 * ukr, type, eng, 
 * incorrect, value, pos, total, 
 * changed, onSubmit
 */
const WordCard = (props) => (
    <div className="WordCard">
        <div className="pos">{props.pos} / {props.total}</div>
        <div className="ukr">{props.ukr}</div>
        <div className="type">{props.type}</div>
        { props.incorrect ? <div className="eng">{props.eng}</div> : null }
        <form onSubmit={props.onSubmit}>
            <input 
                type="text" 
                name="translation" 
                className={props.incorrect ? "translation incorrect" : "translation"}
                value={props.value}
                onChange={props.changed}
            />
            <button className="btn-check">Check</button>
        </form>
    </div>
)

export default WordCard
