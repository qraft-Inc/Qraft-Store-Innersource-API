import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import connectdb from './config/database'



const corsOptions = { origin: '*', optionsSucessStatus: 200} 
const app = express()
app.use(cors());
dotenv.config();
app.use(express.json());

// connect database
connectdb()


// cors

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });

// Route

app.use('/api', routes);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`server running on port:${port}`)
}) 