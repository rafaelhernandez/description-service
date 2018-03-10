const express = require('express');
const db = require('../db/model.js');
const router = express.Router();

import React from 'react';
import { renderToString } from 'react-dom/server';
import AppDescription from '../client/src/js/AppDescription.jsx';

router
  .route('/:roomid/description')
  .get((req, res, next) => {
    db
      .findOne(+req.params.roomid)
      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(err => {
        console.log(
          'Error retrieving description for room ',
          req.params.roomid,
          ' from database'
        );
        res.sendStatus(404);
      });
  })
  .options((req, res) => {
    res.sendStatus(200);
  });

router
  .route('/:roomid/description/ssr')
  .get((req, res, next) => {
    db
      .findOne(+req.params.roomid)
      .then(desc => {
        res.send(
          renderToString(
            <AppDescription roomId={req.params.roomid} description={desc} />
          )
        );
      })
      .catch(err => {
        console.log(
          'Error retrieving description for room ',
          req.params.roomid,
          ' from database'
        );
        res.sendStatus(404);
      });
  })
  .options((req, res) => {
    res.sendStatus(200);
  });

module.exports = router;
