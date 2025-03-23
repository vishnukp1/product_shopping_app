import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/utils/db.js";
import productRoutes from "./src/routes/product.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
