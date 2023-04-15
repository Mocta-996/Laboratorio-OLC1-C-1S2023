import express from 'express';
import cors from 'cors';
// importar rutas
import interpreterRoute from './routes/intepreter';
const app = express();
//app.use(cors);
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
}
app.use(cors(options));
app.use(express.json()); // middleware parse request body to json

const PORT = 5000;

app.use('/interpreter', interpreterRoute);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}
);
