'use strict';

const MongoDB = require('../services/mongodb');

module.exports = {
  name: 'jwt-validator',
  policy: (actionParams) => async (req, res, next) => {
    const jwt = req.headers['authorization'].split(' ').pop();

    await MongoDB.client.connect();
    const validJwt = await MongoDB
      .client
      .db(process.env.DB)
      .collection(process.env.COLLECTION)
      .count({ token: jwt })
      .catch(() => res.status(500).send())
      .finally(async () => await MongoDB.client.close());

    return validJwt ? next() : res.status(403).send();
  }
};
