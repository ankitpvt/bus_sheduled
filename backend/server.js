require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT ||  5000;
const path = require('path');


app.use(express.json());
app.use(cors());

const _dirname = path.resolve();


const corsOptions = {
    origin: 'https://bus-sheduled-1.onrender.com', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Allow cookies to be sent
  };
  
  // Use CORS middleware with the specified options
  app.use(cors(corsOptions));



mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

const busSchema = new mongoose.Schema({
    route: String,
    distance: Number,
    fullFare: Number,
    halfFare: Number,
    timings: [String],
    travelTime: String, // <-- Added Travel Time
  });

const Bus = mongoose.model('Bus', busSchema);

app.get('/buses', async (req, res) => {
  const buses = await Bus.find();
  res.json(buses);
});

app.get('/buses/:id', async (req, res) => {
  const bus = await Bus.findById(req.params.id);
  res.json(bus);
});


app.post('/buses', async (req, res) => {
    const { route, distance, fullFare, halfFare, timings, travelTime } = req.body;
  
    const newBus = new Bus({
      route,
      distance,
      fullFare,
      halfFare,
      timings,
      travelTime, // <-- Storing Travel Time
    });
  
    await newBus.save();
    res.json(newBus);
  });
  
  app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (_,res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));