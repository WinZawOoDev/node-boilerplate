import express, { Request, Response } from 'express'

const app = express();

const PORT = 5000;

app.get('/', (req: Request, res: Response) => {
    console.log(req.headers)
    res.send('Hello minilist express server setup');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
