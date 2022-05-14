'use strict';

const Producer = require('../services/producer');

module.exports = {
  name: 'producer-request-log',
  policy: (actionParams) => async (req, res, next) => {
    const message = {
      userId: req.headers['user-id'],
      component: req.path.split('/')[1],
      path: req.path,
      method: req.method,
      payload: req.body,
    };

    await Producer.producer.connect();
    await Producer.producer.send({
      topic: 'user-request',
      messages: [
        { value: JSON.stringify(message) },
      ],
    }).catch(err => {
      console.error(
        `could not send message to kafka for user: ${message.userId}`,
      );
      console.error(err);
    });
    await Producer.producer.disconnect();
    
    return next();
  }
};
