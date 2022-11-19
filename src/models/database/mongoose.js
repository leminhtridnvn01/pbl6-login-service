const mongoose = require('mongoose');

const CONNECTION_URL = 'mongodb://tcp-mo4.mogenius.io:33303';
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  user: 'root',
  pass: '123456',
  authMechanism: 'SCRAM-SHA-256',
  dbName: 'user-service'
});