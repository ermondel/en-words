import React, { Component } from 'react';
import dataVocabulary       from './dataVocabulary';
import WordCard             from './WordCard';
import WordNotFound         from './WordNotFound';

export default class App extends Component {
    state = {
        currentWord: dataVocabulary.length - 1,
        incorrectTranslation: false
    }

    onSubmitWordCardHandler = event => {
        event.preventDefault();

        const {currentWord} = this.state;
        const nextWord      = currentWord - 1;
        const wordByEnglish = dataVocabulary[currentWord].eng;
        const wordEntered   = event.target.translation.value;
        
        if (wordEntered === wordByEnglish) {
            this.setState({ 
                currentWord: nextWord
            });
        } else {
            this.setState({ 
                incorrectTranslation: true 
            });
        }
    }

    render() {
        const { currentWord } = this.state
        let content = null;
        
        if (dataVocabulary[currentWord]) {
            content = <WordCard 
                ukr={dataVocabulary[currentWord].ukr} 
                eng={dataVocabulary[currentWord].eng}
                type={dataVocabulary[currentWord].type} 
                onSubmit={this.onSubmitWordCardHandler}
                incorrect={this.state.incorrectTranslation}
            />
        } else {
            content = <WordNotFound />
        }

        return (
            <div className="App">{content}</div>
        )
    }
}
