const express = require("express");
const mongoose = require("mongoose");
const exp = require("./server");
const port = 3000;
exp.use(express.json());
mongoose.set("strictQuery", false);

const BASE_URL =
  "mongodb+srv://renthub12:renthub12@cluster0.h6jw0ma.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(BASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(
    async () => {
      console.log("Rent-Hub DB Connected");
    },
    (err) => {
      console.log(err, "Error");
    }
  );

exp.listen(port, () => {
  console.log(`Rent-Hub Server Started..`);
});

