
import express from 'express'
import { PrismaClient } from './generated/prisma/index.js';

const prisma = new PrismaClient()


const app = express();


app.use(express.json());


app.post('/usuarios', async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });

  res.status(201).json(req.body);
});

app.get('/usuarios', async (req, res) => {
 
  const users = await prisma.user.findMany()

  res.status(200).json(users);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});