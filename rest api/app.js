const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Whatsapp = require("./models/chat");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
  .then((res) => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/chattings", (req, res) => {
  Whatsapp.find()
    .then((chats) => {
      res.render("show.ejs", { chats });
    })
    .catch((err) => console.log(err));
});

app.get("/add", (req, res) => {
  res.render("add.ejs");
});

app.post("/add", (req, res) => {
  let from = req.body.from;
  let to = req.body.to;
  let msg = req.body.msg;
  let chat1 = new Whatsapp({ from: from, to: to, msg: msg, date: new Date() });
  chat1
    .save()
    .then(() => {
      res.redirect("/chattings");
    })
    .catch((err) => {
      console.log("Error:", err);
    });
});

app.get("/edit/:id", (req, res) => {
  let id = req.params.id;
  Whatsapp.findById(id)
    .then((data) => {
      res.render("edit.ejs", { data });
    })
    .catch((err) => {
      console.log("Error:", err);
    });
});

app.put("/edit/:id", (req, res) => {
  let id = req.params.id;
  let from = req.body.from;
  let to = req.body.to;
  let msg = req.body.msg;
  Whatsapp.findByIdAndUpdate(id, {
    $set: { from: from, to: to, msg: msg, date: new Date() },
  })
    .then((data) => {
      res.redirect("/chattings");
    })
    .catch((err) => {
      console.log("Error:", err);
    });
});

app.get("/delete/:id", (req, res) => {
  let id = req.params.id;
  Whatsapp.findById(id)
    .then((data) => {
      res.render("delete.ejs", { data });
    })
    .catch((err) => {
      console.log("Error:", err);
    });
});

app.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  Whatsapp.findByIdAndDelete(id)
    .then((data) => {
      res.redirect("/chattings");
    })
    .catch((err) => {
      console.log("Error:", err);
    });
});

app.listen(3000, () => {
  console.log("app is running");
});
