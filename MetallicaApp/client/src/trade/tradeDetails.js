import React, { Component } from 'react';
export default class TradeDetails extends Component{
    constructor(props){
        //console.log('');
        super(props)
        this.state = {
            editMode:false,
            date:this.props.trade.tradeDate,
            comm:this.props.trade.commodity,
            cparty:this.props.trade.counterpart,
            side:this.props.trade.side,
            qty:this.props.trade.quantity,
            price:this.props.trade.price
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        
    }
    
    componentWillReceiveProps(nextProps){
        
        if(nextProps.trade !== this.props.trade){
            //this.setState({date:nextProps.trade.tradeDate});
            this.constructor(nextProps);
        }
    }
    handleEdit() {
    this.setState({
      editMode: true
    });
    }
    handleSave() {
    this.setState({
      editMode: false
    });
    this.props.callback(this.state);
    }
    handleChangeInput(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render(){
        var details = null;
        var tableStyle ={width:'100%',        
        };
        var inputStyle ={width:'80px',        
        };
        if(!this.state.editMode){
            details = <tbody><tr><td>Trade Date:</td><td>{this.state.date} </td></tr>
                        <tr><td>Commodity:</td><td>{this.state.comm}</td></tr>
                        <tr><td>Side:</td><td>{this.state.side}</td></tr>
                        <tr><td>Counterpart:</td><td>{this.state.cparty}</td></tr>
                        <tr><td>Quantity:</td><td>{this.state.qty}</td></tr>
                        <tr><td>Price:</td><td>{this.state.price}</td></tr></tbody>; 
        }else{
            details = <tbody ><tr><td>Trade Date:</td><td><input name="date" type ="text" onChange={this.handleChangeInput} style={inputStyle} defaultValue={this.state.date}></input> </td></tr>
                        <tr><td>Commodity:</td><td><input name="comm" onChange={this.handleChangeInput} style={inputStyle} defaultValue={this.state.comm}></input></td></tr>
                        <tr><td>Side:</td><td><input name="side" style={inputStyle} onChange={this.handleChangeInput} defaultValue={this.state.side}></input></td></tr>
                        <tr><td>Counterpart:</td><td><input name="cparty" style={inputStyle}  onChange={this.handleChangeInput} defaultValue={this.state.cparty}></input></td></tr>
                        <tr><td>Quantity:</td><td><input  name="qty" type="number" style={inputStyle} onChange={this.handleChangeInput} defaultValue={this.state.qty}></input></td></tr>
                        <tr><td>Price:</td><td><input  name="price" type="number"  style={inputStyle} onChange={this.handleChangeInput} defaultValue={this.state.price}></input></td></tr></tbody>; 
            
        }
        return(<div className="tradedetails"><table style={tableStyle}>
                    <thead>
                    <tr ><th colSpan="2">TradeID:{this.props.trade.id}</th><th><button disabled={this.state.editMode} onClick={this.handleEdit} value="Edit">Edit</button></th>
                    <th><button disabled={!this.state.editMode} onClick={this.handleSave} value="Save">Save</button></th></tr>
                    </thead>
                    
                    {details}
                    
                    </table>
                </div>
        
        );
    }
}