'user strict';

const express = require('express');
const config = require('./config'); // config module
const FBeamer = require('./fbeamer');   // fbeamer module

const fb = new FBeamer(config.FB);

const server = express();
const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> console.log(`The bot server is running on port ${PORT}`));

// server.get('/', (req, res) => fb.registerHook(req, res));
console.log("test");
server.post('/', (req, res) => fb.incoming(req, res));
console.log("test 2");

// server.get('/', (req,res) => res.send("hello !!"));
