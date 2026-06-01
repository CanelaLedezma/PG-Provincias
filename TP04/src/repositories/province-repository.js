import pg from 'pg';
import DBConfig from '../configs/db-config.js';

const { Client } = pg;

export default class ProvinceRepository {

    getAllAsync = async () => {
        const client = new Client(DBConfig);

        try {
            await client.connect();

            const sql = 'SELECT * FROM provinces';
            const result = await client.query(sql);

            return result.rows;
        }
        finally {
            await client.end();
        }
    }
}