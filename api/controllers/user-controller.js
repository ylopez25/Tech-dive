const Admin = require('../models/adminModel')
const mongoose = require('mongoose')

//todo add basic login features etc.
//todo because currently 'getUser' does nothing but confirm an api
const getUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'API is working.'
  });
}

module.exports = {
  getUser,
};
