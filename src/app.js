import express from "express";
import cors from "cors";

const app = express();

//basic configurations
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
//cors configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost5173",
    Credential: true,
    method: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowHeaders: ["Authorization", "Content-Type"],
  }),
);


//import the routes 
import { healthCheckRouter } from "./routes/healthcheck.routes.js";
app.use("/api/v1/healtcheck",healthCheckRouter);


app.get("/", (req, res) => {
  res.send("Welcome to the Basecamp");
});
export default app;