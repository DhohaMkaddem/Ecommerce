const express = require("express")
const cors = require('cors')
const connectDB = require("./bd/mongoose")
const users = require("./routes/users");
const app = express()
connectDB();
//???
app.use(express.json());
app.use(cors())
app.use("/users", users);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));