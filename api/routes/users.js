// import {exams} from '../database/mongoCollections.js';
// import { Router } from 'express';

const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user-controller');

router.get('/', UserController.getUser);
module.exports = router;

// router.route('/getAllExams').get(async (req,res) => {
//     const collection = await exams();
//     const findAll = await exams.findAll({}).toArray();
//     return findAll;

// });

