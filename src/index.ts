import express, { Request, Response } from 'express'

const app = express();

const PORT = 6000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello minilist');
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
