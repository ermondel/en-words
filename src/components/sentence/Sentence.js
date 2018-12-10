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

    onRestart = event => {
        this.setState({
            index: data.length - 1
        })
    }

    onSubmitHandler = event => {
        event.preventDefault();

        let { index } = this.state;
        let nextIndex = index - 1;
        let sentenceByEnglish = data[index].eng;
        let sentenceEntered = event.target.translation.value;

        if (sentenceEntered === sentenceByEnglish) {
            this.setState({
                incorrect: false,
                index: nextIndex,
                value: ""
            });
        } else {
            this.setState({
                incorrect: true,
                value: sentenceEntered
            });
        }
    }

    onChangeHandler = event => {
        this.setState({
            value: event.target.value,
            incorrect: false
        })
    }

    render() {
        let { index } = this.state;

        if (data[index]) {
            this.forRender = <SentenceCard
                ukr       = {data[index].ukr}
                eng       = {data[index].eng}
                type      = {data[index].type}
                pos       = {data.length - index}
                total     = {data.length}
                onSubmit  = {this.onSubmitHandler}
                incorrect = {this.state.incorrect}
                value     = {this.state.value}
                changed   = {this.onChangeHandler}
            />
        } else if (index < 0) {
            this.forRender = <EndOfSentences restart={this.onRestart} />
        } else {
            this.forRender = <SentenceNotFound />
        }

        return (<div className="Sentence">{this.forRender}</div>)
    }
}

const EndOfSentences = (props) => (
    <div className="message">
        <h3>Task completed</h3>
        <button onClick={props.restart}>Restart</button>
    </div>
)
const SentenceNotFound = () => (
    <div className="message">
        <h3>Sentence not found</h3>
    </div>
)

export default Sentence;