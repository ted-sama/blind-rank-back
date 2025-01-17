import express from 'express';
import themesRouter from './routes/themes';

const app = express();
const port = 3000;

app.use('/api/themes', themesRouter);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});