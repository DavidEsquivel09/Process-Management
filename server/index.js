import app from './app.js';
import { connectDB } from "./db.js";

connectDB();

app.listen(7000, () => {
    console.log('Server on port 7000')
})