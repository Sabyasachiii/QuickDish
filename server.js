import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRoutes from './routes/foodRoutes.js';



//app config
const app = express(); 
const port = 4000;

//middleware
app.use(express.json())
app.use(cors());

// db connection
connectDB();

//api endpoint
app.use('/api/food', foodRoutes)
app.use('/images', express.static('images'))


app.get("/", (req, res) => {res.send("API working")})

app.listen(port,()=>console.log(`Server running on http://localhost:${port}`))



//mongodb+srv://SabyasachiSarkar:Sabya_2003@cluster0.ugl2p.mongodb.net/?