import React, { Component } from 'react';
import Records from './component/Records';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'jimmy',
            father: 'jimmmmmy!!!',
            mountHeader: true
        }
    }

    render() {
        return ( 
            <div className = "App">
                <Records/>
            </div>
        );
    }
}

export default App;
