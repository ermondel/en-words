import React, { Component } from 'react';
import dataVocabulary       from './dataVocabulary';
import WordCard             from './WordCard';
import WordNotFound         from './WordNotFound';
import EndOfWords           from './EndOfWords';
import './App.css';

export default class App extends Component {
    state = {
        currentWordID: dataVocabulary.length - 1,
        incorrectTranslation: false,
        value: ""
    }

    onSubmitWordCardHandler = event => {
        event.preventDefault();

        const {currentWordID} = this.state;
        const nextWord      = currentWordID - 1;
        const wordByEnglish = dataVocabulary[currentWordID].eng;
        const wordEntered   = event.target.translation.value;
        
        if (wordEntered === wordByEnglish) {
            this.setState({ 
                incorrectTranslation: false,
                currentWordID: nextWord,
                value: ""
            });
        } else {
            this.setState({ 
                incorrectTranslation: true,
                value: wordEntered,
            });
        }
    }

    restart = () => {
        this.setState({
            currentWordID: dataVocabulary.length - 1
        });
    }

    changed = event => {
        this.setState({ 
            value: event.target.value,
            incorrectTranslation: false
        })
    }

    render() {
        const { currentWordID } = this.state
        let content = null;
        
        if (dataVocabulary[currentWordID]) {
            content = <WordCard 
                ukr       = {dataVocabulary[currentWordID].ukr}
                eng       = {dataVocabulary[currentWordID].eng}
                type      = {dataVocabulary[currentWordID].type}
                pos       = {dataVocabulary.length - currentWordID}
                total     = {dataVocabulary.length}
                onSubmit  = {this.onSubmitWordCardHandler}
                incorrect = {this.state.incorrectTranslation}
                value     = {this.state.value}
                changed   = {this.changed}
            />
        } else if (currentWordID < 0) {
            content = <EndOfWords restart={this.restart} />
        } else {
            content = <WordNotFound />
        }

        return (
            <div className="App">{content}</div>
        )
    }
}
