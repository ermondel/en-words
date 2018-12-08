import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Vocabulary from './components/vocabulary/Vocabulary'
import Sentence from './components/sentence/Sentence';

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

            <Route path="/" exact component={Index} />
            <Route path="/vocabulary/" component={Vocabulary} />
            <Route path="/sentence/" component={Sentence} />
        </div>
    </Router>
);

const Index = () => <h2>Home</h2>;

export default App;
