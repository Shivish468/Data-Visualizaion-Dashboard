import express from 'express';
import cors from 'cors';
import intensityRoutes from './routes/intensityRoutes.js';
import likelihoodRoutes from './routes/likelihoodRoutes.js';
import relevanceRoutes from './routes/relevanceRoutes.js';
import yearRoutes from './routes/yearRoutes.js';
import countryRoutes from './routes/countryRoutes.js';
import topicRoutes from './routes/topicRoutes.js';
import regionRoutes from './routes/regionRoutes.js';
import cityRoutes from './routes/cityRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/intensity', intensityRoutes);
app.use('/api/likelihood', likelihoodRoutes);
app.use('/api/relevance', relevanceRoutes);
app.use('/api/year', yearRoutes);
app.use('/api/country', countryRoutes);
app.use('/api/topics', topicRoutes);
app.use('/api/region', regionRoutes);
app.use('/api/city', cityRoutes);

app.all('*', (req, res) => {
    res.status(404).send('OOPS!! 404 page not found');
});

export default app;