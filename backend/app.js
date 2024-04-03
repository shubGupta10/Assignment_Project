import  express  from "express";
import cors from "cors"
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes );



export default app