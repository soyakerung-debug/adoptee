// ===== ENV CONFIG =====
require("dotenv").config();

// ===== IMPORTS =====
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");

// ===== MODELS =====
const User = require("./models/user");
const Contact = require("./models/contact");
const Pet = require("./models/pet");

// ===== APP INIT =====
const app = express();

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json());

// ===== DATABASE CONNECTION =====
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("DB Error ❌", err));

// ===== ROUTES =====

// 🔹 Test route
app.get("/test", (req, res) => {
  res.json({ message: "API working ✅" });
});

// 🔹 Home route
app.get("/", (req, res) => {
  res.send("Backend working 🚀");
});


// ================= SIGNUP =================
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.json({ success: true });

  } catch (err) {
    console.log("Signup error ❌", err);
    res.status(500).json({ success: false });
  }
});


// ================= LOGIN =================
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.json({ success: true, name: user.name });
    } else {
      res.json({ success: false, message: "Invalid password" });
    }

  } catch (err) {
    console.log("Login error ❌", err);
    res.status(500).json({ success: false });
  }
});


// ================= CONTACT =================
app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const newMessage = new Contact({
      name,
      email,
      subject,
      message
    });

    await newMessage.save();

    res.json({ success: true });

  } catch (err) {
    console.log("Contact error ❌", err);
    res.status(500).json({ success: false });
  }
});


// ================= GET CONTACTS =================
app.get("/contacts", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    console.log("Fetch contacts error ❌", err);
    res.status(500).json([]);
  }
});


// ================= ADD PET =================
app.post("/add-pet", async (req, res) => {
  try {
    const pet = new Pet(req.body);
    await pet.save();
    res.json({ success: true });
  } catch (err) {
    console.log("Add pet error ❌", err);
    res.status(500).json({ success: false });
  }
});


// ================= GET PETS =================
app.get("/pets", async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    console.log("Fetch pets error ❌", err);
    res.status(500).json([]);
  }
});


// ===== START SERVER =====
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});