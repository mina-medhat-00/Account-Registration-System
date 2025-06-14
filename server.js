import express from "express";
import session from "express-session";
import expressLayouts from "express-ejs-layouts";
import flash from "connect-flash";
import mongoose from "mongoose";
import passport from "passport";
import passportConfig from "./config/passport.js";
import dashboardRouter from "./routes/dashboardRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();
const port = 3000;

// Passport Config
passportConfig(passport);

//MongoDB
mongoose
  .connect("mongodb://localhost:27017/registration-system", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err));

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

// BodyParser
app.use(express.urlencoded({ extended: false }));

// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// Routes
app.use("/", dashboardRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost/${port}`);
});
