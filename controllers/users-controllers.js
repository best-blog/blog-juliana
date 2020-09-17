const HttpError = require('../models/http-error')
const User = require('../models/user')

const testUsers = (req, res) => {
  res.json ({users: "user ok"})
}

module.exports = testUsers;