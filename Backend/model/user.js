const mongoose = require("mongoose");

const user = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    
    address:{
        type:String,
        required:true,
        unique:true,
    },
    avatar:{
        type:String,
        default:"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"],
    },
    favourites:[{type:mongoose.type.objectId,
            ref:"books",
        },
    ],
    cart:[{type:mongoose.type.objectId,
            ref:"books",
        },
    ],
    orders:[{type:mongoose.type.objectId,
            ref:"order",
        },
    ],
},
{timestamps:true}
);
module.exports = mongoose.model("user")