import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Record from './Record';
import RecordForm from './RecordForm';
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

    render(){
        const {error, isLoaded, recordsList} = this.state;
        if(error){
            return <div>Error:{error.message}</div>
        }else if(!isLoaded){
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                    <RecordForm setRecord={this.appendRecord.bind(this)}/>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Title</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recordsList.map((message) => <Record key={message.id} {...message} />)}    
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