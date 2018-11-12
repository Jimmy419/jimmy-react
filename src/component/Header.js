import React, {Component} from 'react';


export default class Header extends Component{
    constructor(props){
        super(props);
        console.log('constructor')
    }
    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    componentWillReceiveProps(props){
        console.log('componentWillReceiveProps:')
        console.log(props)
    }

    shouldComponentUpdate(props,states){
        console.log('shouldComponentUpdate:');
        console.log(props);
        console.log(states)
        return true;
    }

    componentWillUpdate(props,states){
        console.log('componentWillUpdate:')
        console.log(props);
        console.log(states)
    }

    componentDidUpdate(props,states){
        console.log('componentDidUpdate:')
        console.log(props);
        console.log(states)
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    onChangeHomeMounted(){
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }

    render(){
        console.log("render");
        return(
            <div className="a-header">
                This is header <b>{this.props.name}</b>
                Header's father is {this.props.father}
            </div>
        )
    }
}