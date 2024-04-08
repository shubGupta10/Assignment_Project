import  express  from "express";
import cors from "cors"
import profileRoutes from "./routes/profileRoutes.js"
import router from "./routes/userRoutes.js";
import dotenv from "dotenv"


const app = express();
dotenv.config();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["POST", "GET"],
    credentials: true,
}));

app.use(express.json());

app.use("/api/users", router);
app.use("/api/profile", profileRoutes );



export default app