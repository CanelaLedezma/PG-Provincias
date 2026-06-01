import express from 'express';
import cors from 'cors';
import ProvinceService from './src/services/province-service.js';

const app = express();

app.use(cors());
app.use(express.json());

const service = new ProvinceService();

app.get('/api/province', async (req, res) => {
    const provinces = await service.getAllAsync();
    res.json(provinces);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});