import React, { Component } from 'react';
import Header from './component/Header';
import Body from './component/Body';
import './App.css';

class App extends Component {
    onGreet(vars){
        alert(vars)
    }

    render() {
        const user = {
            name:'Andy',
            hobbies:['Sports', 'Reading']
        }
        return ( 
            <div className = "App">
                <div>
                    <Header/>
                </div>
                <div>
                    <Body name={'jimmy'} initialAge={12} user={user} greet={this.onGreet}>
                        <p>This is body's content</p>
                    </Body>
                </div>
            </div>
        );
    }
}

export default App;
