import React, { Component } from 'react';
import dataVocabulary       from './dataVocabulary';
import WordCard             from './WordCard';
import WordNotFound         from './WordNotFound';

export default class App extends Component {
    state = {
        currentWord: 0
    }

    translationChangedHandler = event => {
        console.log(event.target.value);
    }

    render() {
        const { currentWord } = this.state
        let content = null;
        
        if (dataVocabulary[currentWord]) {
            content = <WordCard 
                ukr={dataVocabulary[currentWord].ukr} 
                eng={dataVocabulary[currentWord].eng}
                type={dataVocabulary[currentWord].type} 
                changed={this.translationChangedHandler}
            />
        } else {
            content = <WordNotFound />
        }

        return (
            <div className="App">{content}</div>
        )
    }
}
