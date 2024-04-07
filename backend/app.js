import  express  from "express";
import cors from "cors"
// import profileRoutes from "./routes/profileRoutes.js"
import profileRoutes from "./routes/profileRoutes.js"
import router from "./routes/userRoutes.js";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json());

app.use("/api/users", router);
// app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes );



export default app