import React,{ Component } from 'react';

class FalconComponent extends Component{
    render(){
        return(
            <div className="card mt-2">
                <div className="card-body custom-body">
                    <h6 className="text-success">{this.props.title}</h6>
                    <h6>Flight No: {" "+this.props.flight_number}</h6>
                    <div className="detail-section">
                    {this.props.detail}
                    </div>
                </div>
            </div>
        )
    }
}
export default FalconComponent;