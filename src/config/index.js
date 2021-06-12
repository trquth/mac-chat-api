import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb+srv://trquth:25011993Tran@cluster0.hr1pi.mongodb.net/chatdemo?retryWrites=true&w=majority",
  "bodyLimit": "100kb"
}
