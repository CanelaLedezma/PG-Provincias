import ProvinceRepository from '../repositories/province-repository.js';

export default class ProvinceService {

    repository = new ProvinceRepository();

    getAllAsync = async () => {
        const provinces = await this.repository.getAllAsync();
        return provinces;
    }
}