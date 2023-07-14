// Módulo npm node-postgres
const { Pool } = require("pg");

// Datos para la conexión a la base de datos
const pool = new Pool({
  user: "node_user",
  host: "localhost",
  database: "practica_db",
  password: "1234",
  port: 5432,
});

// Consultas con objeto result()

// 1. Seleccione todos los estudiantes que sean mayores de 25 años.

const seleccionarEstudiantesUno = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query({
      rowMode: "array",
      text: "SELECT * from estudiantes where edad > 25",
    }); // listar los datos como filas
    for (let row of result.rows) {
      console.log(row);
    }
    return result;
  } catch {
    console.error(error.stack);
  } finally {
    console.log("Ha finalizado la consulta");
  }
};

//seleccionarEstudiantesUno();

// 2. Seleccione todos los estudiantes, y ordene el resultado reflejando el apellido en forma descendente.
const seleccionarEstudiantesDos = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query({
      rowMode: "array",
      text: "SELECT * FROM estudiantes ORDER BY apellidos desc",
    }); // listar los datos como filas
    for (let row of result.rows) {
      console.log(row);
    }
    return result;
  } catch {
    console.error(error.stack);
  } finally {
    console.log("Ha finalizado la consulta");
  }
};

// seleccionarEstudiantesDos();

// 3. Seleccione todos los cursos disponibles.
const seleccionarEstudiantesTres = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query({
      rowMode: "array",
      text: "SELECT * FROM cursos",
    }); // listar los datos como filas
    for (let row of result.rows) {
      console.log(row);
    }
    return result;
  } catch {
    console.error(error.stack);
  } finally {
    console.log("Ha finalizado la consulta");
  }
};

seleccionarEstudiantesTres();
