const mongoose = require('mongoose');
const MONGO_URI =
  'mongodb+srv://ayakabando22:YA3UJIaijaPswnwy@cluster0.cznxjxs.mongodb.net/auth_db?retryWrites=true&w=majority';

const connectDB = async () => {
  const conn = await mongoose.connect(MONGO_URI);

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};
// const connectDB = () => {
//   mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   mongoose.connection.on('connected', () => {
//     console.log('Connected to mongo instance');
//   });

//   mongoose.connection.on('error', (error) => {
//     console.error('Error connecting to mongo', error);
//   });
// };

module.exports = connectDB;
