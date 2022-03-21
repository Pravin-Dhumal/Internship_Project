const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique:true,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    logoLink: {
      url:"https://functionup.s3.ap-south-1.amazonaws.com/colleges/iith.png",
    },

    isDeleted:{
      type: Boolean,
      default: false,
    },
    
  },

    

  { timestamps: true }
);

module.exports = mongoose.model("College", collegeSchema);
