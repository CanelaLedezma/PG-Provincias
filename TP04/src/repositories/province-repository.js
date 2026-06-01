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

            await client.end();

            return result.rows;
        } catch (error) {
            console.log(error);
            await client.end();
            return []; //si no puede traer provincas, devuelve una lista vacia
        }
    }

    getByIdAsync = async (id) => {
        const client = new Client(DBConfig);

        try {
            await client.connect();

            const sql = 'SELECT * FROM provinces WHERE id = $1';
            const values = [id];

            const result = await client.query(sql, values);

            await client.end();

            if (result.rows.length > 0) {
                return result.rows[0];
            }

            return null;
        } catch (error) {
            console.log(error);
            await client.end();
            return null;
        }
    }
}