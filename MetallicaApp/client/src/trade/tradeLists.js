import React, { Component } from 'react';






export default class TradeList extends Component{
    constructor(props){
        super(props)
        this.state = {
            status:0,
            selectedOption:0
        }
        this.onChangeH = this.onChangeH.bind(this)
    }
  //side:res.trade.side,date:res.trade.tradeDate,price:res.trade.price,quantity:res.trade.quantity,status:res.trade.status
  
  
  
  onChangeH(e){
      
     this.setState({
         selectedOption:parseInt(e.target.value)
     });
     //<TradeDetails field={this.state.selectedOption}/>
     this.props.callback(parseInt(e.target.value));
          
  };
  
    render(){
        
  
        
        console.log('a'+this.props.trades.length);
        const list = this.props.trades.map(function(nameV,i){
            
            return <tr>
                <td><input type="radio" name="radio"  value={i} onChange={this.onChangeH} checked={this.state.selectedOption===i}></input></td>
                <td>{nameV.tradeDate}</td>
                <td>{nameV.price}</td>
                <td>{nameV.quantity}</td>
                <td>{nameV.side}</td>
                <td>{nameV.commodity}</td>
                <td>{nameV.counterpart}</td>
                <td>{nameV.loc}</td>
                <td><button>Delete</button></td>
            </tr>
        },this);
        var tableStyle ={width:'100%',        
        };
        return (<div className="tradelist">
                    <table style={tableStyle}>
                    <thead>
                    
                    <tr>
                        <th></th>
                        <th>Trade Date</th>
                        <th>Price (/MT)</th>
                        <th>Qty (MT)</th>
                        <th>Side</th>
                        <th>Commodity</th>
                        <th>Counterparty</th>
                        <th>Location</th>
                        <th></th>
                    </tr>
                    
                    </thead>
                    <tbody>
                    
                     {list}
                     
                    </tbody>
                    </table></div>
        );
    }
}

