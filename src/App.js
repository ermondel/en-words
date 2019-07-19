import React, { Component } from 'react';
import WordToTranslate from './components/WordToTranslate';
import UserInput from './components/UserInput';
import Toolbar from './components/Toolbar';
import words from './tests/fixtures/words';

class App extends Component {
    state = {
        wordsList: words,
        wordСorrectly: false,
        wordIndex: 0,
        wordInput: '',
        wordAnswer: '',
        showAnswer: false,
        wordsCounter: 0
    }

    get currentWord() {
        const currentWord = this.state.wordsList[this.state.wordIndex];
        return currentWord ? currentWord.ru : '';
    }

    onUserInputChange = (event) => {
        console.log('onUserInputChange');
    }

    onUserInputFocus = (event) => {
        console.log('onUserInputFocus');
    }

    onShowAnswerClick = () => {
        console.log('onShowAnswerClick');
    }

    render() {
        return(
            <div>
                <WordToTranslate
                    word={ this.currentWord }
                    highlight={ this.wordСorrectly } 
                />
                <UserInput
                    word={ this.state.wordInput }
                    answer={ this.state.wordAnswer }
                    showAnswer={ this.state.showAnswer }
                    onChange= { this.onUserInputChange }
                    onFocus={ this.onUserInputFocus }
                />
                <Toolbar
                    wordСorrectly={ this.state.wordСorrectly } 
                    onShowAnswerClick={ this.onShowAnswerClick }
                    totalWords={ this.state.wordsList.length }
                    currentPosition={ this.state.wordIndex + 1 }
                />
            </div>
        );
    }
}

export default App;
