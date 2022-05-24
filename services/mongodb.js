'use strict';

const { MongoClient } = require('mongodb');

class MongoDB {
  constructor() {
    this.client = new MongoClient(process.env.DB_URI);
  }
}

module.exports = new MongoDB();
