import React, { Component } from 'react';
import WordCard from './WordCard';
import data     from './data';
import './style/Vocabulary.css';

class Vocabulary extends Component {
    state = {
        index: data.length - 1,
        incorrect: false,
        value: ""
    }

    forRender = null

    onRestart = () => {
        this.setState({
            index: data.length - 1
        });
    }

    onSubmitHandler = event => {
        event.preventDefault();

        let { index } = this.state;
        let nextindex = index - 1;
        let wordByEnglish = data[index].eng;
        let wordEntered   = event.target.translation.value;
        
        if (wordEntered === wordByEnglish) {
            this.setState({ 
                incorrect: false,
                index: nextindex,
                value: "" 
            });
        } else {
            this.setState({ 
                incorrect: true,
                value: wordEntered,
            });
        }
    }

    onChangeTextHandler = event => {
        this.setState({ 
            value: event.target.value,
            incorrect: false
        })
    }

    render() {
        let { index } = this.state
        
        if (data[index]) {
            this.forRender = <WordCard 
                ukr       = {data[index].ukr}
                eng       = {data[index].eng}
                type      = {data[index].type}
                pos       = {data.length - index}
                total     = {data.length}
                onSubmit  = {this.onSubmitHandler}
                incorrect = {this.state.incorrect}
                value     = {this.state.value}
                changed   = {this.onChangeTextHandler}
            />
        } else if (index < 0) {
            this.forRender = <EndOfWords restart={this.onRestart} />
        } else {
            this.forRender = <WordNotFound />
        }

        return (<div className="Vocabulary">{this.forRender}</div>)
    }
}

const EndOfWords = (props) => (
    <div className="message">
        <h3>Task completed</h3>
        <button onClick={props.restart}>Restart</button>
    </div>
)
const WordNotFound = () => (
    <div className="message">
        <h3>Word not found</h3>
    </div>
)

export default Vocabulary;