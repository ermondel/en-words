import React, { Component } from 'react';
import dataVocabulary       from './dataVocabulary';
import WordCard             from './WordCard';
import WordNotFound         from './WordNotFound';
import EndOfWords           from './EndOfWords';
import './App.css';

export default class App extends Component {
    state = {
        currentWord: dataVocabulary.length - 1,
        incorrectTranslation: false,
        value: ""
    }

    onSubmitWordCardHandler = event => {
        event.preventDefault();

        const {currentWord} = this.state;
        const nextWord      = currentWord - 1;
        const wordByEnglish = dataVocabulary[currentWord].eng;
        const wordEntered   = event.target.translation.value;
        
        if (wordEntered === wordByEnglish) {
            this.setState({ 
                incorrectTranslation: false,
                currentWord: nextWord,
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
            currentWord: dataVocabulary.length - 1
        });
    }

    changed = event => {
        this.setState({ value: event.target.value })
    }

    render() {
        const { currentWord } = this.state
        let content = null;
        
        if (dataVocabulary[currentWord]) {
            content = <WordCard 
                ukr       = {dataVocabulary[currentWord].ukr}
                eng       = {dataVocabulary[currentWord].eng}
                type      = {dataVocabulary[currentWord].type}
                pos       = {dataVocabulary.length - currentWord}
                total     = {dataVocabulary.length}
                onSubmit  = {this.onSubmitWordCardHandler}
                incorrect = {this.state.incorrectTranslation}
                value     = {this.state.value}
                changed   = {this.changed}
            />
        } else if (currentWord < 0) {
            content = <EndOfWords restart={this.restart} />
        } else {
            content = <WordNotFound />
        }

        return (
            <div className="App">{content}</div>
        )
    }
}
