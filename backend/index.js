require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel');
const { UserModel } = require('./model/UserModel');
const { userVerification } = require('./middlewares/authMiddleware');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: function(origin, callback) {
    callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
passport.use(UserModel.createStrategy());

app.post("/api/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new UserModel({ email });
    const registeredUser = await UserModel.register(user, password);
    
    const token = jwt.sign({ id: registeredUser._id }, process.env.TOKEN_KEY || "secret_key", {
      expiresIn: 3 * 24 * 60 * 60,
    });

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });
    res.status(201).json({ message: "User signed in successfully", success: true, user: registeredUser });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
});

app.post("/api/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      return res.status(400).json({ message: err.message || "An error occurred during authentication", success: false });
    }
    if (!user) {
      return res.status(400).json({ message: info ? info.message : "Login failed", success: false });
    }
    req.logIn(user, { session: false }, (err) => {
      if (err) {
        return res.status(400).json({ message: err.message || "Login failed", success: false });
      }
      const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY || "secret_key", {
        expiresIn: 3 * 24 * 60 * 60,
      });

      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
        maxAge: 3 * 24 * 60 * 60 * 1000,
      });
      res.status(200).json({ message: "User logged in successfully", success: true, user });
    });
  })(req, res, next);
});

app.get('/api/addHoldings', async (req, res) => {
  let tempHoldings = [
    {
      name: "BHARTIARTL",
      qty: 2,
      avg: 538.05,
      price: 541.15,
      net: "+0.58%",
      day: "+2.99%",
    },
    {
      name: "HDFCBANK",
      qty: 2,
      avg: 1383.4,
      price: 1522.35,
      net: "+10.04%",
      day: "+0.11%",
    },
    {
      name: "HINDUNILVR",
      qty: 1,
      avg: 2335.85,
      price: 2417.4,
      net: "+3.49%",
      day: "+0.21%",
    },
    {
      name: "INFY",
      qty: 1,
      avg: 1350.5,
      price: 1555.45,
      net: "+15.18%",
      day: "-1.60%",
      isLoss: true,
    },
    {
      name: "ITC",
      qty: 5,
      avg: 202.0,
      price: 207.9,
      net: "+2.92%",
      day: "+0.80%",
    },
    {
      name: "KPITTECH",
      qty: 5,
      avg: 250.3,
      price: 266.45,
      net: "+6.45%",
      day: "+3.54%",
    },
    {
      name: "M&M",
      qty: 2,
      avg: 809.9,
      price: 779.8,
      net: "-3.72%",
      day: "-0.01%",
      isLoss: true,
    },
    {
      name: "RELIANCE",
      qty: 1,
      avg: 2193.7,
      price: 2112.4,
      net: "-3.71%",
      day: "+1.44%",
    },
    {
      name: "SBIN",
      qty: 4,
      avg: 324.35,
      price: 430.2,
      net: "+32.63%",
      day: "-0.34%",
      isLoss: true,
    },
    {
      name: "SGBMAY29",
      qty: 2,
      avg: 4727.0,
      price: 4719.0,
      net: "-0.17%",
      day: "+0.15%",
    },
    {
      name: "TATAPOWER",
      qty: 5,
      avg: 104.2,
      price: 124.15,
      net: "+19.15%",
      day: "-0.24%",
      isLoss: true,
    },
    {
      name: "TCS",
      qty: 1,
      avg: 3041.7,
      price: 3194.8,
      net: "+5.03%",
      day: "-0.25%",
      isLoss: true,
    },
    {
      name: "WIPRO",
      qty: 4,
      avg: 489.3,
      price: 577.75,
      net: "+18.08%",
      day: "+0.32%",
    },
  ];

  tempHoldings.forEach((item) => {
    let newHolding = new HoldingsModel({
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
    });
    newHolding.save();
  });
  res.send("Done");
});

app.get('/api/allHoldings', userVerification, async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/api/allPositions', userVerification, async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get('/api/allOrders', userVerification, async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.post('/api/newOrder', userVerification, async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("Order saved!");
});



mongoose.connect(uri)
  .then(() => {
    console.log("Connected to MongoDB!");
    // Only listen locally, Vercel will handle the exported app
    if (process.env.NODE_ENV !== "production") {
      app.listen(PORT, () => {
        console.log(`App Started on port ${PORT}`);
      });
    }
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

module.exports = app;