import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.resolve() + '/index.html');
});

app.get('/page2', (req, res) => {
    res.sendFile(path.resolve() + '/page2.html');
});

const HOSTNAME = '0.0.0.0';
const PORT = 3000;

app.listen(PORT, HOSTNAME, () => {
    console.log('Server running at http://${HOSTNAME}:${PORT}/');
});
