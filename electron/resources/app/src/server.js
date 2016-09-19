'use strict';

const express = require('express'),
      bodyParse = require('body-parser'),
      morgan = require('morgan'),
      debug = require('debug')('Server');


const config = require('./config');

const appExp = express();

const http = require('http').Server(appExp),
      io = require('socket.io')(http);

appExp.use(bodyParse.urlencoded({extended:true}));
appExp.use(bodyParse.json());
appExp.use(morgan('dev'));


let api = require('./routes/api');
appExp.use(api.prefix, api.router);

appExp.get('*', (req, res) =>{
  res.status(200).send('hello');
});


http.listen(config.port, (err) =>{
  if (err){
    console.log(err);
    debug(err);
  }
  else{
    debug('listening on port ' + config.port);
    console.log('running from server');
  }
})
