const mongoose = require("mongoose");
const connectDB = async () => {
    console.log(process.env.MONGO_URI)
    try {
        await mongoose.connect("mongodb+srv://eshop:eshop@eshop.aazsi.mongodb.net/eshop?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
          });
          console.log("Database connected");
      

    } catch (error) {
        console.log(error.message)
    }
}



module.exports = connectDB