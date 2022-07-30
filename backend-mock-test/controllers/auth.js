const { Users } = require('../models')

function format(user) {
  const { id, email } = user;
  return {
    id,
    email,
    accessToken: user.generateToken(),
  };
}

module.exports = {
  signUp: (req, res) => {
    Users.signUp(req.body)
      .then(data => res.status(201).json(data))
  },

  login: (req, res) => {
    Users.authenticate(req.body)
      .then(data => res.status(200).json(format(data)))
  }
}