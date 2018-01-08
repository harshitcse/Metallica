import React, { Component } from 'react';
export default class TradeDetails extends Component{
    render(){
        return(<div className="tradedetails"><table>
                    <thead>
                    <tr ><th colSpan="2">TradeID:{this.props.trade.id}</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Trade Date:</td><td>{this.props.trade.tradeDate}</td></tr>
                        <tr><td>Commodity:</td><td>{this.props.trade.commodity}</td></tr>
                        <tr><td>Side:</td><td>{this.props.trade.side}</td></tr>
                        <tr><td>Counterpart:</td><td>{this.props.trade.counterpart}</td></tr>
                        <tr><td>Quantity:</td><td>{this.props.trade.quantity}</td></tr>
                        <tr><td>Price:</td><td>{this.props.trade.price}</td></tr>
                    </tbody>
                    </table>
                </div>
        
        );
    }
}