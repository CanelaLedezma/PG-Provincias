import ProvinceRepository from '../repositories/province-repository.js';

export default class ProvinceService {

    repository = new ProvinceRepository();

    getAllAsync = async () => {
        return await this.repository.getAllAsync();
    }
    getByIdAsync = async (id) => {
        return await this.repository.getByIdAsync(id); //controller pide una provincia por id: se la pido al Repository
    }
    createAsync = async (province) =>{
        return await this.repository.createAsync(province);
    }

    updateAsync = async (province) => {
    return await this.repository.updateAsync(province);
}

deleteAsync = async (id) => {
    return await this.repository.deleteAsync(id);
}
}