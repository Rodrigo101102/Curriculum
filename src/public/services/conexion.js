import pg from 'pg';
const { Client }= pg;

const config={
    user: 'curriculum_db_user',
    host: 'dpg-csg2g708fa8c7381mg4g-a.oregon-postgres.render.com',
    database: 'curriculum_db',
    password: 'AQB6QE302YgXX7bgzg6C8WHBrAvkYRO2',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
}

export async function Conectar(params) {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        console.log("Conectado a la base de Datos")
    }catch(error){
        console.log(error)
    }
}