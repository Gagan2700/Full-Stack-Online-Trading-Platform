require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const app = express();
const getRouter = require("./Routes/getRoutes");
const AuthRoutes = require("./Routes/AuthRoutes");


const uri = process.env.MONGO_URI;
const port = process.env.PORT || 8080;

const allowedOrigins = [
  "http://localhost:5174",
  "http://localhost:5173",
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true // Allow cookies/auth headers
}));
app.use(express.json());
app.use(cookieParser());

// app.get("/addHoldings", async (req, res) => {
//   try {
//     await holdingModel.insertMany([
//       { name: "Reliance Industries", qty: 40, avg: 2525.5, net_chg: "+72.9", price: 2598.4, day: "+1.12%" },
//       { name: "HDFC Bank", qty: 60, avg: 1580.3, net_chg: "-8.1", price: 1572.2, day: "-0.51%" },
//       { name: "Tata Consultancy Services", qty: 25, avg: 3720.0, net_chg: "+45.5", price: 3765.5, day: "+0.76%" },
//       { name: "Infosys Ltd", qty: 45, avg: 1455.8, net_chg: "-26.9", price: 1428.9, day: "-1.85%" },
//       { name: "State Bank of India", qty: 80, avg: 738.5, net_chg: "+10.5", price: 749.0, day: "+0.64%" },
//       { name: "ICICI Bank", qty: 70, avg: 960.2, net_chg: "+25.3", price: 985.5, day: "+0.89%" },
//       { name: "Bharti Airtel", qty: 55, avg: 1220.3, net_chg: "+8.45", price: 1228.75, day: "+0.32%" },
//       { name: "Larsen & Toubro", qty: 35, avg: 3580.8, net_chg: "-26.6", price: 3554.2, day: "-0.74%" },
//       { name: "Kotak Mahindra Bank", qty: 40, avg: 1660.9, net_chg: "+20.9", price: 1681.8, day: "+0.47%" },
//       { name: "Axis Bank", qty: 50, avg: 995.4, net_chg: "+15.6", price: 1011.0, day: "+0.78%" },
//       { name: "ITC Ltd", qty: 120, avg: 445.8, net_chg: "+1.6", price: 447.4, day: "+0.15%" },
//       { name: "Hindustan Unilever", qty: 30, avg: 2380.2, net_chg: "+14.8", price: 2395.0, day: "+0.62%" },
//       { name: "Tata Motors", qty: 65, avg: 925.4, net_chg: "-27.2", price: 898.2, day: "-0.88%" }
//     ]);
//     console.log("✅ Saved to Database!");
//     res.send("Holdings inserted successfully!");
//   } catch (err) {
//     console.error("❌ Error inserting data:", err.message);
//     res.status(500).send("Failed to insert holdings.");
//   }
// });



// app.get("/allPositions",async (req,res)=>{
//     await positionModel.insertMany([
//   { Product: "CNC", name: "Reliance Industries", qty: 25, avg: 2485.30, price: 2510.80, day: "+1.03%" },
//   { Product: "MIS", name: "Tata Consultancy Services", qty: 12, avg: 3820.50, price: 3795.75, day: "-0.65%" },
//   { Product: "CNC", name: "HDFC Bank", qty: 30, avg: 1605.20, price: 1620.10, day: "+0.93%" },
//   { Product: "CNC", name: "Infosys", qty: 15, avg: 1480.40, price: 1459.85, day: "-1.39%" },
//   { Product: "CNC", name: "ICICI Bank", qty: 40, avg: 972.70, price: 988.40, day: "+1.61%" },
//   { Product: "MIS", name: "Bharti Airtel", qty: 18, avg: 1342.95, price: 1350.60, day: "+0.57%" },
//   { Product: "CNC", name: "Larsen & Toubro", qty: 10, avg: 3675.00, price: 3640.25, day: "-0.94%" },
//   { Product: "CNC", name: "State Bank of India", qty: 28, avg: 774.80, price: 789.10, day: "+1.85%" }
// ])
// .then(()=>console.log("Positins have been added"));
// res.send("Done");
// })

app.use("/",AuthRoutes);
app.use("/",getRouter);

async function main() {
    await mongoose.connect(uri)
        .then(()=>{
            console.log("database connected succesfully");
        })
}

main();

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})
