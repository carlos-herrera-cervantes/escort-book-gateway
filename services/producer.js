'use strict';

const { Kafka } = require('kafkajs');

class Producer {
  constructor() {
    const kafka = new Kafka({
      clientId: process.env.KAFKA_CLIENT_ID,
      brokers: [process.env.KAFKA_BROKERS],
      retry: {
        retries: 0,
      },
    });

    this.producer = kafka.producer();
  }
}

module.exports = new Producer();
