'use strict';

module.exports = {
  name: 'role',
  policy: (actionParams) => (req, res, next) => {
    const rolesConcat = actionParams.roles.split(',');
    const roles = req.headers['user-roles'];

    for (const role of rolesConcat) {
      const finded = roles.find(innerRole => innerRole == role);

      if (finded) {
        return next();
      }
    }

    return res.status(403).send({ message: 'Invalid role' });
  }
};
