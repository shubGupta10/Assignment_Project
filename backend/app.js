import  express  from "express";
import cors from "cors"
import profileRoutes from "./routes/profileRoutes.js"
import router from "./routes/userRoutes.js";
import dotenv from "dotenv"
dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json());

app.use("/api/users", router);
app.use("/api/profile", profileRoutes );



export default app