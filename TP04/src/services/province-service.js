import ProvinceRepository from '../repositories/province-repository.js';

export default class ProvinceService {

    repository = new ProvinceRepository();

    getAllAsync = async () => {
        return await this.repository.getAllAsync();
    }
}