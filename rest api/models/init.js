const mongoose = require("mongoose");
const path = require("path");

const Whatsapp = require("./chat");

main()
  .then((res) => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chattinglist = [
  {
    from: "aman",
    to: "shradha",
    msg: "Hi Shradha!",
    date: new Date("2024-08-01T10:00:00"),
  },
  {
    from: "shradha",
    to: "aman",
    msg: "Hello Aman, how are you?",
    date: new Date("2024-08-01T10:01:00"),
  },
  {
    from: "rahul",
    to: "neha",
    msg: "Good morning!",
    date: new Date("2024-08-01T09:15:00"),
  },
  {
    from: "neha",
    to: "rahul",
    msg: "Morning! Did you finish the assignment?",
    date: new Date("2024-08-01T09:20:00"),
  },
  {
    from: "sneha",
    to: "priya",
    msg: "Let’s meet at 5 pm.",
    date: new Date("2024-08-01T11:30:00"),
  },
  {
    from: "priya",
    to: "sneha",
    msg: "Sure, café near the park?",
    date: new Date("2024-08-01T11:35:00"),
  },
  {
    from: "amit",
    to: "karan",
    msg: "Match tonight?",
    date: new Date("2024-08-01T18:00:00"),
  },
  {
    from: "karan",
    to: "amit",
    msg: "Yes bro, I’ll bring snacks!",
    date: new Date("2024-08-01T18:05:00"),
  },
  {
    from: "pooja",
    to: "sahil",
    msg: "Happy Birthday Sahil! 🎉",
    date: new Date("2024-08-01T00:00:00"),
  },
  {
    from: "sahil",
    to: "pooja",
    msg: "Thank you so much Pooja 😊",
    date: new Date("2024-08-01T00:05:00"),
  },
];

Whatsapp.insertMany(chattinglist)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
