import React, { Component } from 'react';
import dataVocabulary from './dataVocabulary';
import WordCard from './WordCard'

export default class App extends Component {
    render() {
        let content = null;
        // if (dataVocabulary) content = dataVocabulary.map(word => <p key={word.id}>{word.ukr + ' / '+ word.eng}</p>);
        
        content = <WordCard ukr={'ukr'} eng={'eng'} type={'type'} />

        return (
            <div className="App">{content}</div>
        )
    }
}
