const handler = require("express-async-handler");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

exports.users = handler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

exports.signup = handler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) {
    res.status(400);
    throw new Error("Please enter your name");
  }

  if (!email) {
    res.status(400);
    throw new Error("Please enter your email");
  }

  if (!password) {
    res.status(400);
    throw new Error("Please enter your password");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Email is already signed to a different account");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: createToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

exports.login = handler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const correctPassword = await bcrypt.compare(password, user.password);

  if (user && correctPassword) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: createToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});
