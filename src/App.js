import React, { Component } from 'react';
import dataVocabulary       from './dataVocabulary';
import WordCard             from './WordCard';
import WordNotFound         from './WordNotFound';

export default class App extends Component {
    state = {
        currentWord: 0
    }

    onSubmitWordCardHandler = event => {
        event.preventDefault();
        
        const wordByEnglish = dataVocabulary[this.state.currentWord].eng;
        const wordEntered   = event.target.translation.value; 
        
        if (wordEntered === wordByEnglish) {
            console.log('OK');
        } else {
            console.log('WRONG !');
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
            />
        } else {
            content = <WordNotFound />
        }

        return (
            <div className="App">{content}</div>
        )
    }
}
