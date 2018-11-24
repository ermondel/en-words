import React, { Component } from 'react';
import dataVocabulary from './dataVocabulary';
import WordCard from './WordCard';

export default class App extends Component {
    state = {
        currentWord: 142
    }

    render() {
        const { currentWord } = this.state
        let content = null;
        // if (dataVocabulary) content = dataVocabulary.map(word => <p key={word.id}>{word.ukr + ' / '+ word.eng}</p>);
        
        if (dataVocabulary[currentWord]) {
            console.log(dataVocabulary[currentWord])
        } else {
            console.log('FAIL :-(');
        }

        content = <WordCard ukr={'ukr'} eng={'eng'} type={'type'} />

        return (
            <div className="App">{content}</div>
        )
    }
}
