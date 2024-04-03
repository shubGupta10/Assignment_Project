import  express  from "express";
const router = express.Router();

router.get("/profile", (req,res)=> {
    res.send("Hello, This is profile")
});

router.get("/profile/update", (req,res)=> {
    res.send("Hello, This is from Profile update");
});


export default router;