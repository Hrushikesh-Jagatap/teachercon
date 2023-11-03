/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
const mongoose = require('mongoose');
const UserModel = require('@root/src/apis/models/user');
const TutorModel = require('@root/src/apis/models/tutor');
const blogModel = require('@root/src/apis/models/blog');
const storeModel = require('@root/src/apis/models/store');
// const EmployeeModel = require('@models/Employee');
const config = require('@config');

const { Logger: log } = require('intelli-utility');
// eslint-disable-next-line no-unused-vars
const { USERNAME, PASSWORD, CLUSTER, url } = config.mongodb;

class db {
  constructor() {
    if (!db.instance) {
      db.instance = this;
    }
    // eslint-disable-next-line no-constructor-return
    return db.instance;
  }

  static getInstance() {
    return this.instance;
  }

  connect() {
    mongoose.set('strictQuery', true);

    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const { connection } = mongoose;
    connection.on('error', console.error.bind(console, 'connection error: '));
    connection.once('open', () => {
      log.info('sts is connected to MonogoDB');
    });

    this.Student = this.StudentModel;
  }
}

module.exports = db;
