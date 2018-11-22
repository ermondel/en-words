import React, { Component } from 'react';
import dataVocabulary from './dataVocabulary'

export default class App extends Component {
    render() {
        let content = null;
        if (dataVocabulary) {
            content = dataVocabulary.map(word => <p key={word.id}>{word.ukr + ' / '+ word.eng}</p>);
        }

        return (
            <div className="App">{content}</div>
        )
    }
}
