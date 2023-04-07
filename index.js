// Modules //
import express from "express";
import userRoutes from "./routes/Routes.js";
import { runServer, database } from "./config/Config.js";

// App //
const app = express();
const PORT = 8080 || process.env.PORT;

// Middelweres //
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Routes //
app.use("/", userRoutes)

// Server running //
runServer(app, PORT);
database();
