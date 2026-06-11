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
    createAsync = async (province) => { //post
        const client = new Client (DBConfig);
        try{
            await client.connect();
            const sql =  `
            INSERT INTO provinces
            (name, full_name, latitude, longitude, display_order)
            VALUES ($1, $2, $3, $4, $5)
        `;
        
        const values = [
            province.name,
            province.full_name,
            province.latitude,
            province.longitude,
            province.display_order
        ];
        
        await client.query(sql, values);
        await client.end();
        return true;
    }
    catch (error){
        console.log(error);
        await client.end();
        return false;
    }
}

updateAsync = async (province) => { //put
    const client = new Client(DBConfig);

    try {
        await client.connect();

        const sql = `
            UPDATE provinces
            SET name = $1,
                full_name = $2,
                latitude = $3,
                longitude = $4,
                display_order = $5
            WHERE id = $6
        `;

        const values = [
            province.name,
            province.full_name,
            province.latitude,
            province.longitude,
            province.display_order,
            province.id
        ];

        const result = await client.query(sql, values);

        await client.end();

        return result.rowCount > 0;
    } catch (error) {
        console.log(error);
        await client.end();
        return false;
    }
}
deleteAsync = async (id) => {
    const client = new Client(DBConfig);

    try {
        await client.connect();

        const sql = 'DELETE FROM provinces WHERE id = $1';
        const values = [id];

        const result = await client.query(sql, values);

        await client.end();

        return result.rowCount > 0;
    } catch (error) {
        console.log(error);
        await client.end();
        return false;
    }
}

}
