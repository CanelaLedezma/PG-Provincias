import express from "express";
import ProvinceService from "../services/province-service.js";

const router = express.Router();// guardo las rutas de provincias
const service = new ProvinceService();

router.get("/", async (req, res) => { //antes de get(req) espero q service me de provinces (res)
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
})

router.post("/", async (req, res) => { //endpoint post para crear nueva provincia
    const province = req.body;

    const result = await service.createAsync(province);

    if (result) {
        res.status(201).send("Provincia creada");
    } else {
        res.status(400).send("No se pudo crear la provincia");
    }
});

router.put("/", async (req, res) => {
    const province = req.body;

    const result = await service.updateAsync(province);

    if (result == null) {
        res.status(404).send("Provincia no encontrada");
    } else if (result === false) {
        res.status(400).send("No se pudo actualizar la provincia");
    } else {
        res.status(201).send("Provincia actualizada");
    }
});
router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    const result = await service.deleteAsync(id);

    if (result) {
        res.status(200).send("Provincia eliminada");
    } else {
        res.status(404).send("Provincia no encontrada");
    }
});

export default router;
