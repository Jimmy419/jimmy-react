import React, {Component} from 'react';
import PropTypes from 'prop-types';

import * as RecordsAPI from '../util/RecordAPI';

export default class Record extends Component{
    constructor(props){
        super(props);
        this.state = {
            edit:false
        }
    }

    startEdit(){
        this.setState({
            edit:!this.state.edit
        })
    }

    updateRecord(){
        let data = {
            date: Number.parseInt(this.refs.date.value),
            title:this.refs.title.value,
            amount: Number.parseInt(this.refs.amount.value)
        }
        RecordsAPI.updateRecord(this.props.record.id, data).then(
            response=>{
                this.props.changeRecord(this.props.record,response.data);
                this.startEdit()
            }
        ).catch(
            error => {
                console.log(error);
                this.startEdit()
            }
        )
    }

    deleteRecord(){
        RecordsAPI.deleteRecord(this.props.record.id).then(
            response=>{
                this.props.deleteRecord(this.props.record);
            }
        ).catch(
            error => {
                console.log(error);
            }
        )        
    }

    render(){
        if(this.state.edit){
            return(
                <tr>
                    <td><input ref="date" defaultValue={this.props.record.date}/></td>
                    <td><input ref="title" defaultValue={this.props.record.title}/></td>
                    <td><input ref="amount" defaultValue={this.props.record.amount}/></td>
                    <td>
                        <button className="btn btn-info m-1" onClick={this.updateRecord.bind(this)}>Update</button>
                        <button className="btn btn-warning m-1" onClick={this.startEdit.bind(this)}>Cancel</button>
                    </td>
                </tr>
            )
        }else{
            return(
                <tr>
                    <td>{this.props.record.date}</td>
                    <td>{this.props.record.title}</td>
                    <td>{this.props.record.amount}</td>
                    <td>
                        <button className="btn btn-info m-1" onClick={this.startEdit.bind(this)}>Edit</button>
                        <button className="btn btn-danger m-1" onClick={this.deleteRecord.bind(this)}>Delete</button>
                    </td>
                </tr>
            )
        }
    }
}

Record.propTypes = {
    // id: PropTypes.number,
    // date: PropTypes.number,
    amount: PropTypes.number,
    // children: PropTypes.element.isRequired
}