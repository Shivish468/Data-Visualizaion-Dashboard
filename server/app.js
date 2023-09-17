import express from 'express';
import cors from 'cors';
import dashboardRoutes from './routes/dashboardRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/dvd/', dashboardRoutes);

app.all('*', (req, res) => {
    res.status(404).send('OOPS!! 404 page not found');
});

export default app;