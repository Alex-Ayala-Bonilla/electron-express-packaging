'use strict';

const config = require('../config.json'),
      debug = require('debug')('Api'),
      express = require('express');

const apiRoute = express.Router();
const prefix = '/api';


  apiRoute.get('/test', (req, res) =>{

  return res.status(200).json({msg: 'hello from api route'})

});

module.exports = {
  prefix: prefix,
  router: apiRoute
}
