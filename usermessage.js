const mongoose=require("mongoose");
const validator=require("validator");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required: true,
        minlenngth:3
    },
    email:{
        type:String,
        required: true,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error("invalid emailid");
            }
        }
    },
    phone:{
        type: Number,
        required: true,
        min:10
    },
    message:{
        type:String,
        required: true
    }
})

const User=mongoose.model("User",userSchema);
module.exports=User;