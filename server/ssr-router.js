import React from 'react';
import { renderToString } from 'react-dom/server';
import AppDescription from '../client/src/js/AppDescription.jsx';
import Html from './Html';
const express = require('express');
const db = require('../db/model.js');
const router = express.Router();

router.route('/:roomid/description')
  .get((req, res, next) => {
    db.findOne(+req.params.roomid)
      .then((desc) => {
        const body = renderToString(<AppDescription roomId={req.params.roomid} description={desc} />);
        res.send(
          Html({
            body
          })
        );
      })
      .catch(err => {
        console.log('Error retrieving description for room ', req.params.roomid, ' from database');
        res.sendStatus(404);
      });
  })
  .options((req, res) => {
    res.sendStatus(200);
  });

module.exports = router;
