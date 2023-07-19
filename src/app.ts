import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
//
require("dotenv").config();

const app = express();

// Middlewares Configuration
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Server is Working🌏",
  });
});

export default app;
