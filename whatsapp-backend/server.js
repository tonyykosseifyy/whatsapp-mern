const express = require('express') ;
const mongoose = require('mongoose') ;
const Messages = require('./dbMessages.js')
const Pusher = require("pusher");


const app = express() ;
const port = process.env.PORT || 9000 ;


const pusher = new Pusher({
  appId: "1205625",
  key: "78807f61266ecf786efd",
  secret: "1a5b2aceea476e6f88e2",
  cluster: "ap2",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});


app.use(express.json()) ;


const connection_uri = 'mongodb+srv://tonyykosseifyy:t03018765@cluster0.dw8hg.mongodb.net/whatsapp-mern?retryWrites=true&w=majority' ;
mongoose.connect(connection_uri , {
  useCreateIndex: true ,
  useNewUrlParser: true ,
  useUnifiedTopology: true
}) ;


const db = mongoose.connection ;
db.once('open' , () => {
  console.log('db is connected') ;

  const msgCollection = db.collection('messagecontents') ;
  const changeStream = msgCollection.watch() ;

  changeStream.on('change' , (change) => {
    console.log(change)
  })
})

app.get('/' , (req , res) => res.status(200).send("hello world")) ;

app.get('/messages/sync' , (req , res) => {
  Messages.find((err , data) => {
    if (err) {
      res.status(500).send(err) ;
    } else {
      res.status(200).send(data) ;
    }
  }) ;
}) ;

app.post('/messages/new' , (req , res) => {
  const dbMessage = req.body ;

  Messages.create(dbMessage , (err , data) => {
    if (err) {
      res.status(500).send(err) ;
    } else {
      res.status(201).send(`new message created : \n ${data}`) ;
    }
  }) ;
}) ;

app.listen(port , () => {
  console.log(`listening in localhost:${port}`) ;
}) ;
