const { MongoClient, ObjectID } = require('mongodb')

var obj = new ObjectID()
console.log(obj)

// Connection URL
var url = 'mongodb://localhost:27017/TodoApp'
// Connect to MongoDB Server
MongoClient.connect(url, (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server.')
    }

    console.log('Connected to MongoDB server.')

    /*db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err)
        }

        console.log(JSON.stringify(result.ops, undefined, 2))
    })*/

    /*db.collection('Users').insertOne({
        _id: 123,
        name: 'Indra',
        age: 24,
        location: 'Jakarta'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err)
        }

        console.log(JSON.stringify(result.ops))
    })*/

    db.close()
})