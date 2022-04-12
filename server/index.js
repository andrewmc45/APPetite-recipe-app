// Node server creation 
// Install express
// Install mongoose 


// Set up server 
const express = require("express");
const mongoose = require("mongoose")
// Initiatilize server 
const app = express();

const FoodModel = require("./models/Food");

// Receieve info from the front-end in json format 
app.use(express.json());


// Connection to Mongo database 
mongoose.connect(
  "mongodb+srv://user1:password1234@recipeapp.tqml9.mongodb.net/Favourites?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);


// Creating element in the database 
app.get("/", async (req, res) => {
  const food = new FoodModel({ foodName: "Apple" });
  try {
    await food.save();
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001...");
});
