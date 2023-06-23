const mongoose = require("mongoose");

const examSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },    
    correctOption: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
    exam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "exams",
    },
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model("questions", examSchema);
module.exports = Question;