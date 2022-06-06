'use strict';

const Producer = require('../services/producer');

module.exports = {
  name: 'producer-connection-log',
  policy: (actionParams) => async (req, res, next) => {
    if (req.path != '/authentication/login') return next();

    const message = {
      lastConnection: new Date().toUTCString(),
      email: req.body.email,
    };

    await Producer.producer.connect().catch(err => {
      console.error(`could not connect to Kafka cluster: ${err}`);
    });
    await Producer.producer.send({
      topic: 'user-last-connection',
      messages: [
        { value: JSON.stringify(message) },
      ],
    }).catch(err => {
      console.error(
        `could not send message to kafka for user: ${req.headers['user-id']}`,
      );
      console.error(err);
    });
    await Producer.producer.disconnect().catch(err => {
      console.error(`could not disconnect from Kafka cluster: ${err}`);
    });
    
    return next();
  }
};
