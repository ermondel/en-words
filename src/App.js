import React, { Component } from 'react';
import WordToTranslate from './components/WordToTranslate';
import UserInput from './components/UserInput';
import Toolbar from './components/Toolbar';
import words from './tests/fixtures/words';

class App extends Component {
    state = {
        wordsList: [],
        wordСorrectly: false,
        wordID: 0
    }

    render() {
        return(
            <div>
                <WordToTranslate />
                <UserInput />
                <Toolbar />
            </div>
        );
    }
}

export default App;
