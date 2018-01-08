import React, { Component } from 'react';
export default class TradeSearch extends Component{
    
    
    render(){
        //console.log('com list len'+this.props.commList.length);
        var commodityList = this.props.commList.map(function(name,i){
        return <option value={name}></option>
                              
                              
    },this);
        return (<div className="search"><table>
                    <thead>
                    <tr>
                        <th>Trade Date From</th>
                        <th>Trade Date To</th>
                        <th>Commodity</th>
                        <th>Side</th>
                        <th>Counterparty</th>
                        <th>Location</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input type="date"/></td>
                        <td><input type="date"/></td>
                        <td><input list="commodity"/>
                        <datalist id="commodity">
                        {commodityList}</datalist></td>
                        <td><input type="checkbox"/>Buy <input type="checkbox"/> Sell</td>
                        <td><input list="commodity"/>
                              <datalist id="commodity">
                              <option value="Internet Explorer"/>
                              <option value="Firefox"/>
                              <option value="Google Chrome"/>
                              <option value="Opera"/>
                              <option value="Safari"/>
                              </datalist></td>
                        <td><input list="commodity"/>
                              <datalist id="commodity">
                              <option value="Internet Explorer"/>
                              <option value="Firefox"/>
                              <option value="Google Chrome"/>
                              <option value="Opera"/>
                              <option value="Safari"/>
                              </datalist></td>      
                    </tr>
                    </tbody>
                </table>
                <button type="reset">CLEAR</button><button>SEARCH</button></div>);
    }
}