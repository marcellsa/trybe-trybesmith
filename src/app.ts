import express from 'express';

const app = express();

app.use(express.json()); // apagar esse comentário

export default app;
