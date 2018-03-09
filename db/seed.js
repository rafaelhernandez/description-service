let mongoose = require('mongoose');
let Descriptions = require('./model.js');
let Promise = require('bluebird');
let data = JSON.parse(require('./data/listings.json'));
mongoose.Promise = Promise;

let mongoServer = process.env.MONGO_SERVER || 'localhost';
let mongoPort = process.env.MONGO_PORT || '27017';

const seedDb = function(data) {
  debugger;
  let conn;
  let connection = mongoose.connect(`mongodb://${mongoServer}:${mongoPort}/airbnb_descriptions`)
    .then(c => {
      conn = c;
      Promise.map(data, (desc) => {
        return Descriptions.insertOne(desc.listing);
      })
      .then(() => {
        conn.disconnect();
      })
      .catch(err => console.log('Error inserting data ', err));
    })
    .catch(err => {
      console.log('Error opening the connection ', err);
    });
};

seedDb(data);
