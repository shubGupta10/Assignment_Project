import app from "./app.js";
import connect from "./db/db.js";
import 'dotenv/config';

connect()
  .then(() => {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Server is running at ${process.env.PORT}`);
    })
})
  .catch((err) => {
    console.log("MongoDB connection failed.", err);
    process.exit(1);
});