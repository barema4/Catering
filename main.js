const layouts = require("express-ejs-layouts");
const homeController = require("./controllers/homeController");
const express = require("express"),
  app = express();
app.set("port", process.env.PORT || 3000);
app.get("/", (req, res) => {
  res.send("Welcome to Confetti Cuisine!");
});

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.set("view engine", "ejs");
app.use(layouts);
app.use(express.static("public"));
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);
app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
