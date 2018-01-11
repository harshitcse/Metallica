import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';
import TradeSearch from './trade/tradeSearch';
import TradeList from './trade/tradeLists';
import TradeDetails from './trade/tradeDetails';
var rows = [];
function handleResponse(res){
    
        console.log("handleResponse"+res.trades[0].side);
  for(var i=0;i<res.trades.length;i++){
      rows.push(res.trades[i]);
  }
  
  console.log("rows"+rows);
  return rows;
}

class App extends Component {
  constructor(props){
      super(props)
  this.state = {
    response: '',
    message:'',
    selectedRow:0
  }
  this.childCalled=this.childCalled.bind(this);
  this.callback=this.callback.bind(this);
  }

  componentWillMount() {
    
    this.callApi()
      .then(res => handleResponse(res) )
      .catch(err => console.log(err));
      this.callApi2()
      .then(res => this.setState({ message:res.msg }))
      .catch(err => console.log(err));
     
  }

  callApi2 = async () => {
    const response = await fetch('/api/hi');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  callApi = async () => {
    const response = await fetch('/api/tradeservice');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  childCalled(rowN){
      this.setState({selectedRow:rowN})
  }
  callback(obj){
      console.log('got '+obj.price);
      
  }
    

  render() {
      console.log(rows[this.state.selectedRow]);
      var comList = ['AL','CU','CO','ZN'];
      let detail = null;
    if (rows.length>0) {
      detail = <TradeDetails callback={this.callback}trade={rows[this.state.selectedRow]}/>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
          <div className="App-tabs"><a href="#">Trades</a>  | Transfers  |  Transports</div>
          <div className="App-Welcome">{this.state.message}</div></div>
        </header>
        <div className="App-intro"><TradeSearch commList={comList}/></div>
        <div ><TradeList trades={rows} callback={this.childCalled}/>
            {detail}
            </div>
      </div>
    );
  }
}

export default App;
