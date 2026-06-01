import ProvinceRepository from '../repositories/province-repository.js';

export default class ProvinceService {

    repository = new ProvinceRepository();

    getAllAsync = async () => {
        return await this.repository.getAllAsync();
    }
    getByIdAsync = async (id) => {
        return await this.repository.getByIdAsync(id); //controller pide una provincia por id: se la pido al Repository
    }
}