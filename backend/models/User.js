const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
name:{
 type:String,
 required: true,
},

email:
{
  type:String,
  required:true,
  validate(email) {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailRegex.test(email)) {
      throw new Error("Email is invalid");
    }
  }

},
password: 
{
    type: String,
    required: true,

}
}

)

const User = mongoose.model("users", UserSchema)

module.exports = User