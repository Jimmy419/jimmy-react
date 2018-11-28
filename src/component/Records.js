import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Record from './Record';
import RecordForm from './RecordForm';
import AmountBox from './AmountBox'
// import {getJSON} from 'jquery';

import * as RecordsAPI from '../util/RecordAPI';

export default class Records extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded:false,
            error:null,
            recordsList:[{
                id: 1,
                income: 200,
                date:2323232
            },{
                id: 2,
                income: 200,
                date:2323232
            }]
        }
        console.log('first commit');
        console.log('second commit');
        console.log('third commit');
    }

    componentDidMount(){
        // getJSON("https://5bf919ddc480680013bc7ddd.mockapi.io/api/v1/records").then(
        //     response=>this.setState({
        //         recordsList:response,
        //         isLoaded: true
        //     }),
        //     error => this.setState({
        //         isLoaded: true,
        //         error
        //     })
        // )

        RecordsAPI.getAll.then(
            response=>this.setState({
                recordsList:response.data,
                isLoaded: true
            })
        ).catch(
            error => this.setState({
                isLoaded: true,
                error
            })
        )
    }

    appendRecord(data){
        this.setState({
            recordsList:[
                ...this.state.recordsList,
                data
            ]
        })
    }

    updateRecord(oldData, newData){
        const dataIndex = this.state.recordsList.indexOf(oldData);
        const newList = this.state.recordsList.map((item, index) => {
            if(index !== dataIndex){
                return item;
            }else{
                return {
                    ...item,
                    ...newData
                }
            }
        })
        this.setState({
            recordsList:newList
        })
    }

    handleDelete(data){
        const dataIndex = this.state.recordsList.indexOf(data);
        const newRecords = this.state.recordsList.filter((item,index) => index !== dataIndex);
        this.setState({
            recordsList: newRecords
        })
    }

    getIncome(){
        let newRecords = this.state.recordsList.filter((item) => {
            return item.amount > 0
        });
        const income = newRecords.reduce((prev, curr) => {
            return prev + Number.parseInt(curr.amount, 0)
        },0)
        return income;
    }

    getOutcome(){
        let newRecords = this.state.recordsList.filter((item) => {
            return item.amount < 0
        });
        const outcome = newRecords.reduce((prev, curr) => {
            return prev + Number.parseInt(curr.amount, 0)
        },0)
        return outcome;
    }

    getBalance(){
        return this.getIncome() +  this.getOutcome();
    }

    render(){
        const {error, isLoaded, recordsList} = this.state;
        if(error){
            return <div>Error:{error.message}</div>
        }else if(!isLoaded){
            return <div>Loading ...</div>
        }else{
            return(
                <div className="p-3">
                    <div className="d-flex">
                        <AmountBox text="Income" type="success" amount={this.getIncome()}/>
                        <AmountBox text="Outcome" type="danger" amount={this.getOutcome()}/>
                        <AmountBox text="Balance" type="warning" amount={this.getBalance()}/>
                    </div>
                    <RecordForm setRecord={this.appendRecord.bind(this)}/>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Title</th>
                                <th>Amount</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recordsList.map((message) => <Record 
                            key={message.id} 
                            record={message} 
                            changeRecord={this.updateRecord.bind(this)} 
                            deleteRecord={this.handleDelete.bind(this)}
                            />)}    
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

Records.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    // children: PropTypes.element.isRequired
}