let mongoose = require("mongoose");

const WhatsappSchema = mongoose.Schema(
  {
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    msg: {
      type: String,
      maxlength: 50,
    },
    date: {
      required: true,
      type: Date,
    },
  },
  { collection: "Whatsapp" }
);

Whatsapp = mongoose.model("Whatsapp", WhatsappSchema);

module.exports = Whatsapp;
