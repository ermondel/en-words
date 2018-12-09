import React, { Component } from 'react';
import SentenceCard from './SentenceCard';
import data from './data-fixture';
import './style/Sentence.css';

class Sentence extends Component {
    state = {
        index: data.length - 1,
        incorrect: false,
        value: ""
    }

    render() {
        return (<div className="Sentence"><h2>Sentence</h2></div>)
    }
}

export default Sentence;