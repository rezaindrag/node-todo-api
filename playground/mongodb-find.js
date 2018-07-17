const { MongoClient, ObjectID } = require('mongodb')

// Connection URL
var url = 'mongodb://localhost:27017/TodoApp'
// Connect to MongoDB Server
MongoClient.connect(url, (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server.')
    }
    console.log('Connected to MongoDB server.')

    // Find Collection
    db.collection('Users').find().toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch data', err)
    })

    db.close()
})