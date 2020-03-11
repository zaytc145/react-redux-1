import './style.css'
import React from 'react';
import Translator from './Translator';
import History from './History';
import Describer from './Describer';

const App = () => {
    return (
        <div className='ui container'>
                <Translator/>
                <div className="ui two column grid">
                    <div className="seven wide left floated column">
                        <History/>
                    </div>
                    <div className="seven wide column">
                        <Describer/>
                    </div>
                </div>
            </div>
    )
}

export default App;