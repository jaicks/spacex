import React,{ Component } from 'react';

class CustomerFalcon extends Component{
    render(){
        return(
            <div className="card mt-2">
                <div className="card-body custom-body">
                    <h6 className="text-success">{this.props.id}</h6>
                    <h6>Type: {" "+this.props.type}</h6>
                    <h6>Nationality: {" "+this.props.nationality}</h6>
                    <h6>Customer: {" " + this.props.customers&&this.props.customers[0]}</h6>

                </div>
            </div>
        )
    }
}
export default CustomerFalcon;