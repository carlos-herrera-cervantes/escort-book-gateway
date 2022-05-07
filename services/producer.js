'use strict';

const { Kafka } = require('kafkajs');

class Producer {
  constructor() {
    const kafka = new Kafka({
      clientId: 'escort-book-gateway',
      brokers: ['localhost:9092'],
    });

    this.producer = kafka.producer();
  }
}

module.exports = new Producer();
