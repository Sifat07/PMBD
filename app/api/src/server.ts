import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute";

const PORT = 8021;

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(PORT, () => {
  console.log("API Server is running on port:" + PORT);
});
