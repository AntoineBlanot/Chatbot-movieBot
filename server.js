'user strict';

const express = require('express');
const config = require('./config'); // config module
const FBeamer = require('./fbeamer');   // fbeamer module

const fb = new FBeamer(config.FB);

const server = express();
const PORT = process.env.PORT || 3000;

// server.get('/',(req,res) => fb.registerHook(req, res));
server.get('/',(req,res) => res.send("hello !!"));
server.listen(PORT,()=> console.log(`The bot server is running on port ${PORT}`));
