import express from "express";
import ProvinceService from "../services/province-service.js";

const router = express.Router();// guardo las rutas de provincias
const service = new ProvinceService();

router.get("/", async (req, res) => {
    const provinces = await service.getAllAsync();
    res.status(200).json(provinces);
});

export default router;