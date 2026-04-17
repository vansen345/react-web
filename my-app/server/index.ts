import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import homeRoute from "./routes/home_route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    const time = new Date().toLocaleTimeString();
    const logData = req.method === "GET" ? req.query : req.body;
    console.log(`${time} > >>>${req.method} ${req.path}`, JSON.stringify(logData));
    next();
});
// 👉 mount route
homeRoute(app);
const PORT = process.env.PORT || 3007;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});