const express = require('express');
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});

// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );
// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name: 'awesome' });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
});


const app = express();
const port = process.env.PORT || 5000;
function Trade(){
    this.id=23451;
    this.side = Side.BUY;
    this.quantity = 1;
    this.price = 1;
    this.tradeDate = '26/09/1994';
    this.status = TradeStatus.OPEN;
    this.counterpart='LO';
    this.commodity='AL';
    this.loc='LONDON';
    
    
}
var TradeStatus = {
    OPEN:'OPEN',
    NOMINATED:'NOMINATED'
}

var Side = {
    BUY:'BUY',
    SELL:'SELL'
}
function Res(){
    this.trades;
    this.message="SUCCESS";
}


app.get('/api/tradeservice', (req, res) => {
    var tradeList = [new Trade(),new Trade(),new Trade(),new Trade()];
    tradeList[1].tradeDate = '16/09/1994';
    tradeList[2].side=Side.SELL;
    tradeList[3].commodity='CO';
    var resp = new Res();
    resp.trades = tradeList;
  //res.send({ express: 'Hello From Express' });
  res.json(resp);
});
app.get('/api/hi', (req, res) => {
  res.send({ msg:'Welcome Username'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
