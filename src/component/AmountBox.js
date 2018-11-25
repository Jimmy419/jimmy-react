import React from 'react'

const AmountBox = ({text, amount, type}) =>{
    return (
        <div className="col-4">
            <div className="card">
                <div className={`card-header bg-${type} text-white w-100`}>
                    {text}
                </div>
                <div className="card-body">
                    {amount}
                </div>
            </div>
        </div>
    )
}

export default AmountBox
