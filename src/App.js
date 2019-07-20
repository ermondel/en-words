import React, { Component } from 'react';
import WordToTranslate from './components/WordToTranslate';
import UserInput from './components/UserInput';
import Toolbar from './components/Toolbar';
import DeadEnd from './components/DeadEnd';
import './styles/styles.scss';
import words from './dictionaries/base';

class App extends Component {
    constructor(props) {
        super(props);

        this.refButtonNext = React.createRef();
        this.refUserInput = React.createRef();
    }

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

        if (wordСorrectly) {
            const buttonNext = this.refButtonNext.current;
            setTimeout(() => buttonNext.focus(), 1);
        }

        this.setState(() => ({ wordInput, wordСorrectly }));
    }

    onUserInputFocus = () => {
        this.setState(() => ({ showAnswer: false }));
    }

    onShowAnswerClick = () => {
        this.setState(() => ({ showAnswer: true }));
    }

    onButtonNextClick = () => {
        this.setState(prevState => ({ 
            wordСorrectly: false, 
            wordIndex: prevState.wordIndex + 1,
            wordInput: '',
            showAnswer: false,
            wordsCounter: prevState.wordsCounter + 1
        }));
        this.refUserInput.current.focus();
    }

    onReloadClick = () => {
        this.setState(() => ({
            wordСorrectly: false,
            wordIndex: 0,
            wordInput: '',
            showAnswer: false,
            wordsCounter: 0
        }));
    }

    render() {
        return (
            <div className="App">
            {
                this.state.wordsCounter < this.state.wordsList.length ? (
                    <div className="workspace">
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
                            refUserInput={ this.refUserInput }
                        />
                        <Toolbar
                            wordСorrectly={ this.state.wordСorrectly } 
                            onShowAnswerClick={ this.onShowAnswerClick }
                            totalWords={ this.state.wordsList.length }
                            currentPosition={ this.state.wordsCounter + 1 }
                            onButtonNextClick={ this.onButtonNextClick }
                            refButtonNext={ this.refButtonNext }
                        />
                    </div>
                ) : <DeadEnd 
                    wordsListLength = { this.state.wordsList.length } 
                    onReloadClick = { this.onReloadClick }
                />
            }
            </div>
        );
    }
};

export default App;
