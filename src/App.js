import React, { Component } from 'react';
import dataVocabulary       from './dataVocabulary';
import WordCard             from './WordCard';
import WordNotFound         from './WordNotFound';

export default class App extends Component {
    state = {
        currentWord: 150
    }

    render() {
        const { currentWord } = this.state
        let content = null;
        // if (dataVocabulary) content = dataVocabulary.map(word => <p key={word.id}>{word.ukr + ' / '+ word.eng}</p>);
        
        if (dataVocabulary[currentWord]) {
            content = <WordCard ukr={'ukr'} eng={'eng'} type={'type'} />
        } else {
            content = <WordNotFound />
        }

        return (
            <div className="App">{content}</div>
        )
    }
}
