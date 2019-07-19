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
        showAnswer: false,
        wordsCounter: 0
    }

    get currentWord() {
        const currentWord = this.state.wordsList[this.state.wordIndex];
        return currentWord ? currentWord.ru : '';
    }

    get wordAnswer() {
        const currentWord = this.state.wordsList[this.state.wordIndex];
        return currentWord ? currentWord.en : '';
    }

    onUserInputChange = event => {
        const currentWord   = this.state.wordsList[this.state.wordIndex];
        const wordInput     = event.target.value;
        const wordСorrectly = currentWord && currentWord.en && currentWord.en === wordInput;

        this.setState(() => ({ wordInput, wordСorrectly }));
    }

    onUserInputFocus = () => {
        this.setState(() => ({ showAnswer: false }));
    }

    onShowAnswerClick = () => {
        console.log('onShowAnswerClick');
    }

    render() {
        return(
            <div>
                <WordToTranslate
                    word={ this.currentWord }
                    highlight={ this.state.wordСorrectly } 
                />
                <UserInput
                    word={ this.state.wordInput }
                    answer={ this.wordAnswer }
                    showAnswer={ this.state.showAnswer }
                    onChange= { this.onUserInputChange }
                    onFocus={ this.onUserInputFocus }
                    wordСorrectly={ this.state.wordСorrectly } 
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
