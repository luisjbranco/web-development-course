const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

// const fruitSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   review: String,
// });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "An apple a day keeps the doctor away.",
});

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 37,
//   review: "An apple a day keeps the doctor away.",
// });

// fruit.save();

// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Good fruit",
});

// pineapple.save();

const strawberry = new Fruit({
  name: "Strawberry",
  rating: 10,
  review: "Goat",
});

strawberry.save();

const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "John",
//   age: 37,
// });

const person = new Person({
  name: "Amy",
  age: 12,
  favouriteFruit: pineapple,
});

// person.save();

Person.updateOne(
  { name: "John" },
  { favouriteFruit: strawberry },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Updated the record");
    }
  }
);
// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 7,
//   review: "Another fruit",
// });

// const orange = new Fruit({
//   name: "Orange",
//   rating: 9,
//   review: "Great fruit",
// });

// const banana = new Fruit({
//   name: "Banana",
//   rating: 8,
//   review: "Good fruit",
// });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne(
//   { _id: "62be0b54557aedb87fe83fd8" },
//   { name: "Peach" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully updated the document");
//     }
//   }
// );

// Fruit.deleteOne({ _id: "62be0b54557aedb87fe83fd8" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Deleted a record");
//   }
// });

// Person.deleteMany({ name: "John" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Deleted records with name John");
//   }
// });
