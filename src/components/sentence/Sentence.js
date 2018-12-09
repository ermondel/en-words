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

    forRender = null

    render() {
        let { index } = this.state;

        if (data[index]) {
            this.forRender = <SentenceCard
                ukr       = {data[index].ukr}
                eng       = {data[index].eng}
                type      = {data[index].type}
                pos       = {data.length - index}
                total     = {data.length}
                onSubmit  = {null}
                incorrect = {this.state.incorrect}
                value     = {this.state.value}
                changed   = {null}
            />
        } else if (index < 0) {
            console.log('End of sentences');
        } else {
            console.log('Sentence not found');
        }

        return (<div className="Sentence">{this.forRender}</div>)
    }
}

export default Sentence;