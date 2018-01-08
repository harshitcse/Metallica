function Trade(){
    this.side = Side.BUY;
    this.quantity = 1;
    this.price = 1;
    this.tradeDate = '26/09/1994';
    this.status = TradeStatus.OPEN;
    
    
}
var TradeStatus = {
    OPEN:1;
    NOMINATED:2;
}

var Side = {
    BUY:1;
    SELL:2;
}