const dotenv = require("dotenv");
dotenv.config();
const MongoClient = require("mongodb").MongoClient;

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log("Portfolio projects initialized!");
    return callback(null, _db);
  }

  MongoClient.connect(process.env.MONGO_URI)
    .then((client) => {
      _db = client.db('portfolio'); // specify the name of your database here
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error("Db not initialized");
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};
