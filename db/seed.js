let Descriptions = require('./model.js');
let Promise = require('bluebird');
let data = JSON.parse(require('./data/listings.json'));

const seedDb = function(data) {
  let conn;
  Descriptions.connection
    .then(c => {
      conn = c;
      Promise.map(data, (desc) => {
        return Descriptions.insertOne(desc.listing);
      })
        .then(() => {
          conn.disconnect();
        })
        .catch(err => {
          console.log('Error inserting data ', err);
          conn.disconnect();
        });
    })
    .catch(err => {
      console.log('Error opening the connection ', err);
    });
};

seedDb(data);
