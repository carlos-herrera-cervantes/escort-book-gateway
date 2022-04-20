'use strict';

module.exports = {
  name: 'auth',
  policy: (actionParams) => {
    return (req, res, next) => {
      const userType = actionParams.valueKey == 'header' ?
        req.headers['user-type'] : req.body.user.type;
      console.log('ROLES: ', actionParams.roles);
      console.log('USER TYPE: ', userType);
      if (actionParams.roles.includes(userType)) {
        return next();
      }

      return res.status(403).send({ message: 'Invalid role' });
    }
  },
};