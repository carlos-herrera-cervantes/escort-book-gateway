'use strict';

const { Kafka } = require('kafkajs');

class Producer {
  constructor() {
    const kafka = new Kafka({
      clientId: process.env.KAFKA_CLIENT_ID,
      brokers: [process.env.KAFKA_BROKERS],
    });

    this.producer = kafka.producer();
  }
}

module.exports = new Producer();
