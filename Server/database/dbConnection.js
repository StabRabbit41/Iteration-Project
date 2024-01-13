const mongoose = require("mongoose");
const dotenv = require("dotenv");
const uri = process.env.MONGO_URI;
dotenv.config();

async function startServer() {
  mongoose.set("strictQuery", false);
  const connection = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB is connected to: ${connection.connection.host}`);
}
module.exports = startServer;
