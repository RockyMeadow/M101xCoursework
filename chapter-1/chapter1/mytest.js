var find = require('./interface');
var mongodb = require('mongodb');
var uri = 'mongodb://localhost:27017/movies';

var byDirector = function(db, director, callback) {
  // TODO: implement
  var results = [];
  db.collection('movies').find({director: director}).sort({'title': 1}).toArray(function(error, docs) {
    if(error){
      console.log(error);
      process.exit(1);
    }
    console.log('reuslts:',results);
    results = docs;
    console.log('reuslts:',results);
  });
  console.log('reuslts:',results);
  callback(null, results);
};

mongodb.MongoClient.connect(uri, function(error, db) {
  if (error) {
    console.log(error);
    process.exit(1);
  }

  byDirector(db, 'Irvin Kershner', function(error, docs){
    if (error) {
      console.log(error);
      process.exit(1);
    }
    //
    // console.log('Found docs:');
    // docs.forEach(function(doc) {
    //   console.log(JSON.stringify(doc));
    // });
    // process.exit(0);
  });
  // db.collection('movies').find().sort({'title': 1}).toArray(function(error, docs) {
  //   if (error) {
  //     console.log(error);
  //     process.exit(1);
  //   }
  //
  //   console.log('Found docs:');
  //   docs.forEach(function(doc) {
  //     console.log(JSON.stringify(doc));
  //   });
  //   process.exit(0);
  // });
});
