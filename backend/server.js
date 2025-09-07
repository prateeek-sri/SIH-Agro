import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import testRoutes from "./routes/test.js";
import userRoutes from "./routes/user.js";
import logger from "./middleware/logger.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/test", testRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
