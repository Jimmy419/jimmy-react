import React, { Component } from 'react';
import Header from './component/Header';
import Body from './component/Body';
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

    changeName(name){
        this.setState({
            name: name
        })
    }

    changeFather(name){
        this.setState({
            father: name
        })
    }

    onGreet(vars){
        alert(vars)
    }

    mountHeader(){
        this.setState({
            mountHeader: !this.state.mountHeader
        })
    }

    render() {
        const user = {
            name:'Andy',
            hobbies:['Sports', 'Reading']
        }
        let homCmp = "";
        if(this.state.mountHeader){
            homCmp = <Header name={this.state.name} father={this.state.father}/>
        }
        return ( 
            <div className = "App">
                <button onClick={this.mountHeader.bind(this)}>Mount Header</button>
                <div>
                    {homCmp}
                </div>
                <div>
                    <Body 
                        name={'jimmy'} 
                        initialAge={12} 
                        user={user} 
                        father={this.state.father} 
                        greet={this.onGreet} 
                        changeName={this.changeName.bind(this)} 
                        changeFather={this.changeFather.bind(this)}
                    >
                        <p>This is body's content</p>
                    </Body>
                </div>
            </div>
        );
    }
}

export default App;
