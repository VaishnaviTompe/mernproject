// // server.js
// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// const UserModel = require("./models/user_model");
// const QuestionModel = require("./models/questions");
// const QuizResultModel = require("./models/quiz_model");
// const authMiddleware = require("./middleware/authmiddleware");
// const quizRoute = require("./routes/quiz_route");
// const userRoute = require("./routes/user_route");

// const app = express();
// const PORT = process.env.PORT || 3001;

// const MONGOBD_URL = process.env.MONGODB_URL;
// const JWT_SECRET = process.env.JWT_SECRET;

// mongoose
//   .connect(MONGOBD_URL, {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
//   })
//   .then(() => console.log("Database Connected"))
//   .catch((err) => console.log(err));

// mongoose.connection.on("connected", () => {
//   console.log("DB connected");
// });
// app.use(require("./middleware/authmiddleware"));
// app.use(cors());
// app.use(bodyParser.json());

// app.use(require("./routes/user_route"));
// app.use(require("./routes/quiz_route"));


// app.get("/getQuestion", async (req, res) => {
//   try {
//     console.log("fetching data")
//     const questions = await QuestionModel.find();
//     res.json(questions);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const { MONGOBD_URL } = require("./config");

const UserModel = require("./models/user_model");
const QuestionModel = require("./models/questions");
const QuizResultModel = require("./models/quiz_model");
const quizRoute = require("./routes/quiz_route");
const userRoute = require("./routes/user_route");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGOBD_URL = process.env.MONGODB_URL;
const JWT_SECRET = process.env.JWT_SECRET;

// mongoose.connect(MONGOBD_URL);
// mongoose.connection.on("connected", () => {
//   console.log("DB connected");
// });
// mongoose.connection.on("error", (error) => {
//   console.log("Some error while connecting to DB");
// });

mongoose
  .connect(MONGOBD_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

mongoose.connection.on("connected", () => {
  console.log("DB connected");
});

app.use(cors());
app.use(bodyParser.json());

app.use(require("./routes/user_route"));
app.use(require("./routes/quiz_route"));

app.get("/getQuestion", async (req, res) => {
  try {
    const questions = await QuestionModel.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/", async (req, res) => {
    res.send("Hello");

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
