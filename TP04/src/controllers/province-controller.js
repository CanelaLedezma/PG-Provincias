import express from "express";
import ProvinceService from "../services/province-service.js";

const router = express.Router();// guardo las rutas de provincias
const service = new ProvinceService();

router.get("/", async (req, res) => {
    const provinces = await service.getAllAsync();
    res.status(200).json(provinces);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;

    const province = await service.getByIdAsync(id);

    if (province == null) {
        res.status(404).send("Provincia no encontrada");
    } else {
        res.status(200).json(province);
    }
});

export default router;