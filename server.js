const path = require('path');
const gateway = require('express-gateway');
const env = require('dotenv');

env.config();

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
