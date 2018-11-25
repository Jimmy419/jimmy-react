import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as RecordsAPI from '../util/RecordAPI';

export default class RecordForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            date:"",
            title:"",
            amount:""
        }
        console.log(this.props)
    }

    handleChange(event){
        let name,obj;
        name = event.target.name;
        this.setState((
            obj = {},
            obj[name] = event.target.value,
            obj
        ))
        // obj = {};
        // obj[name] = event.target.value;
        // this.setState(obj)
    }

    handleSubmit(){
        console.log('haddle submit')
        let data = {
            date: Number.parseInt(this.state.date),
            title:this.state.title,
            amount: Number.parseInt(this.state.amount)
        }
        RecordsAPI.addRecord(data).then(
            response=>this.props.setRecord(response.data)
        ).catch(
            error => console.log(error)
        )
    }

    handleDisabled(){
        return this.state.date && this.state.title && this.state.amount;
    }

    render(){
        return(
            <div className="d-flex">
                <input className="form-control m-2" value={this.state.date} onChange={this.handleChange.bind(this)} placeholder="Date" name="date"/>
                <input className="form-control m-2" value={this.state.title} onChange={this.handleChange.bind(this)} placeholder="Title" name="title"/>
                <input className="form-control m-2" value={this.state.amount} onChange={this.handleChange.bind(this)} placeholder="Amount" name="amount"/>
                <button className="btn btn-primary m-2" disabled={!this.handleDisabled()} onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
        )
    }
}

RecordForm.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    // children: PropTypes.element.isRequired
}