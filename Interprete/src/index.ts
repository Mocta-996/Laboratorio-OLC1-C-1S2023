import express from 'express';
import interpreterRoute from './routes/intepreter';
const app = express();
app.use(express.json()); // middleware parse request body to json

const PORT = 5000;

app.use('/interpreter', interpreterRoute);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}
);
