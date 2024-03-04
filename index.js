import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("tiny"));
const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        ok: true,
        success: true,
        message: "hello world"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});