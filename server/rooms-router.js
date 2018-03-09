const express = require('express');
const path = require('path');
const router = express.Router();

import React from 'react';
import { renderToString } from 'react-dom/server';
import AppDescription from '../client/src/js/AppDescription.jsx';
import Html from './Html';

const db = require('../db/model.js');


router.route('/:roomid/description/ssr')
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

router.route('/:roomid/description')
  .get((req, res, next) => res.sendFile('index.html', { root: path.resolve('public') }))
  .options((req, res) => {
    res.sendStatus(200);
  });

module.exports = router;