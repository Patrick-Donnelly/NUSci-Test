import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import route from './pages.route.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/', route);
app.use('/page2', route);

const HOSTNAME = '0.0.0.0';
const PORT = 3000;

app.listen(PORT, HOSTNAME, () => {
    console.log('Server running at http://${HOSTNAME}:${PORT}/');
});
