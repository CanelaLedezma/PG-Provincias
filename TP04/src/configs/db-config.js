import 'dotenv/config'; //para que node lea .env

const DBConfig = {
    host: process.env.DB_HOST ?? '', //Si DB_HOST en env no existe, usa string vacío.
    database: process.env.DB_DATABASE ?? '',
    user: process.env.DB_USER ?? '',
    password: process.env.DB_PASSWORD ?? '',
    port: process.env.DB_PORT ?? 5432
};

export default DBConfig;
