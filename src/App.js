import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Vocabulary from './components/vocabulary/Vocabulary';
import Sentence   from './components/sentence/Sentence';
import Home       from './components/home/Home';

const App = () => (
    <Router>
        <div className="App">
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">home</Link> | </li>
                        <li><Link to="/vocabulary/">vocabulary</Link> | </li>
                        <li><Link to="/sentence/">sentence</Link></li>
                    </ul>
                </nav>
            </header>

            <Route path="/" exact component={Home} />
            <Route path="/vocabulary/" component={Vocabulary} />
            <Route path="/sentence/" component={Sentence} />
        </div>
    </Router>
);

export default App;
