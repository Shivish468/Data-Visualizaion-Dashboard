import express from 'express';
import cors from 'cors';
import dashboardRoutes from './routes/dashboardRoutes.js';

const app = express();
// <------------ middlewares ------------> 

//we'll be sending data in json format, that's why it is required to use this middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//to allow cross origin requests (for the front end) we need a middleware for that too
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

// Routes
app.use('/api/data', dashboardRoutes);

app.all('*', (req, res) => {
    res.status(404).send('OOPS!! 404 page not found');
});

export default app;