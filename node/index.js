const express = require("express")
const app = express()
const port = 3000
const mysql = require("mysql")
const connection = mysql.createConnection({
	host: "db",
	user: "root",
	password: "root",
	database: "nodedb"
})

connection.connect(function(err) {
	if (err) throw err;
	console.log("Node conectado no MySQL com sucesso!");
});

sqlCreateTable = `CREATE TABLE IF NOT EXISTS people(`
				+ ` id int NOT NULL AUTO_INCREMENT,`
				+ ` name varchar(255) NOT NULL,`
				+ ` PRIMARY KEY (id));`

connection.query(sqlCreateTable, function(err) {
	if (err) throw err;
		console.log("Tabela people criada com sucesso!");
});

function insertPeople() {
	sql = `INSERT INTO people(name) values ('Willian');`
	connection.query(sql, function (err) {
		if (err) throw err;
		console.log("Registro adicionado na tabela people");
	});
}

function findAllPeople(res) {
	connection.query("SELECT * FROM people", function (err, result) {
		if (err) throw err;
		nomes = result.map(result => result.name).join("</br>");
		res.send("<h1>Full Cycle Rocks!</h1><br>- Lista de nomes cadastrada no banco de dados:<br>".concat(nomes));
	});
}

app.get('/', (req, res) => {
	insertPeople()
	findAllPeople(res)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})