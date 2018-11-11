import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Body extends Component{
    constructor(props){
        super(props);
        this.age = this.props.age;
        this.state = {
            age: props.initialAge
        }
    }

    onMakeOlder(){
        // this.age += 3;
        this.setState({
            age: this.state.age + 3
        })
    }

    parseDataToParent(){
        this.props.greet(this.state.age)
    }

    render(){
        let content = "";
        console.log(this.props);
        if(true){
            content = 'new!!!'
        }
        return(
            <div className="a-body">
                <button className="btn btn-primary" onClick={() => {this.onMakeOlder()}}>Button</button>
                This is body
                {content}
                {2+2}
                {true?"hello":'shit'}
                <br/>
                My name is {this.props.name}, I'm {this.state.age} years old;
                <ul>
                    {this.props.user.hobbies.map((hoby, i) => 
                        <li key={i}>{hoby}</li>
                    )}
                </ul>
                <div>
                    {this.props.children}
                </div>
                <button className="btn btn-primary" onClick={this.parseDataToParent.bind(this)}>Trgger greet</button>
            </div>
        )
    }
}

Body.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
}