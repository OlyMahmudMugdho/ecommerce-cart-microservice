import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import prisma from "./prisma/prisma.js";
import cartRoutes from "./routes/cart.route.js";
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(morgan("combined"));
app.use(morgan("tiny"));
const PORT = 4000;

app.get("/", (req, res) => {
    res.json({
        ok: true,
        success: true,
        message: "hello world"
    });
});

app.use("/api/cart", cartRoutes);


app.listen(PORT, async () => {
    try {
        await prisma.$connect();
        console.info("Connected to database");
        console.info(`Server running on port ${PORT}`);
        await prisma.$disconnect();
    } catch (error) {
        console.error(error);
    }
});