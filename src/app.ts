import express from 'express';
import dotenv from 'dotenv';
import indexRoutes from './routes/indexRoutes';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', indexRoutes);

app.listen(PORT, () => {
    console.log('Server running at PORT:', PORT);
}).on('error', (error) => {
    console.log('Error: ', error.message);
    throw new Error(error.message);
});
