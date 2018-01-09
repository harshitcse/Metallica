import React, { Component } from 'react';
export default class TradeDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            editMode:false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSave = this.handleSave.bind(this);
        
    }
    handleClick() {
    this.setState({
      editMode: true
    });
    }
    handleSave() {
    this.setState({
      editMode: false
    });
    }
    render(){
        var details = null;
        var tableStyle ={width:'100%',        
        };
        var inputStyle ={width:'80px',        
        };
        if(!this.state.editMode){
            details = <tbody><tr><td>Trade Date:</td><td>{this.props.trade.tradeDate} </td></tr>
                        <tr><td>Commodity:</td><td>{this.props.trade.commodity}</td></tr>
                        <tr><td>Side:</td><td>{this.props.trade.side}</td></tr>
                        <tr><td>Counterpart:</td><td>{this.props.trade.counterpart}</td></tr>
                        <tr><td>Quantity:</td><td>{this.props.trade.quantity}</td></tr>
                        <tr><td>Price:</td><td>{this.props.trade.price}</td></tr></tbody>; 
        }else{
            details = <tbody><tr><td>Trade Date:</td><td><input style={inputStyle} value={this.props.trade.tradeDate}></input> </td></tr>
                        <tr><td>Commodity:</td><td><input style={inputStyle} value={this.props.trade.commodity}></input></td></tr>
                        <tr><td>Side:</td><td><input style={inputStyle} value={this.props.trade.side}></input></td></tr>
                        <tr><td>Counterpart:</td><td><input style={inputStyle} value={this.props.trade.counterpart}></input></td></tr>
                        <tr><td>Quantity:</td><td><input style={inputStyle} value={this.props.trade.quantity}></input></td></tr>
                        <tr><td>Price:</td><td><input style={inputStyle} value={this.props.trade.price}></input></td></tr></tbody>; 
            
        }
        return(<div className="tradedetails"><table style={tableStyle}>
                    <thead>
                    <tr ><th colSpan="2">TradeID:{this.props.trade.id}</th><th><button disabled={this.state.editMode} onClick={this.handleClick} value="Edit">Edit</button></th>
                    <th><button disabled={!this.state.editMode} onClick={this.handleSave} value="Save">Save</button></th></tr>
                    </thead>
                    
                    {details}
                    
                    </table>
                </div>
        
        );
    }
}