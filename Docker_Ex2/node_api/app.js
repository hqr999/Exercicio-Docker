const { Client } = require("pg");
require("dotenv").config({path: __dirname + "/../.env"});


const cliente = new Client({
  host: process.env.BD_HOST,
  user: process.env.BD_USER,
  password: process.env.BD_SENHA,
  database: process.env.BD_NOME,
  port: process.env.PORTA,
});

async function start() {
  try {
    await cliente.connect();
    console.log("Conexão bem sucedida");

    await cliente.query(`
        CREATE TABLE IF NOT EXISTS elefantes (
          id SERIAL PRIMARY KEY,
          nome TEXT NOT NULL,
          peso INTEGER NOT NULL);`);

    console.log("Tabela elefantes criada (se já existia ok)");

    await cliente.query(`
      INSERT INTO elefantes (nome,peso) values
        ('Dumbo',1200),
        ('Babar',1500);`);

    console.log("Dados inseridos com sucesso");

    const res = await cliente.query("SELECT * FROM elefantes;");
    console.log("Dados atuais no banco:", res.rows);
  } catch (error) {
    console.error("Erro ao se conectar com o banco:", error);
  }
}

start();

setInterval(() => {},1000);
