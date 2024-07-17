const mysql = require('mysql2');


//Criar a conexão com o banco de dados Mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'test'
});

connection.connect(function(err){
    console.log("conexão com o banco de dados realizado com sucesso!")

})

connection.query("SELECT * FROM test.cargo;", function (err, rows, fields){
    if(!err){
        console.log("Resultado:", rows);
    } else{
        console.log("Erro: Consulta não realizada com sucesso!");
    }
});