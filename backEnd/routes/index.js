var express = require('express');
var router = express.Router();
var mysql = require('mysql'); 

var connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'x',
	password: 'x', 
	database: 'students'
})

connection.connect();




router.post('/addStudent', (req, res, next)=>{
	var studentToAdd = req.body.name; 
	// res.json([studentToAdd]); 
	connection.query('INSERT INTO students (name) VALUES (?)', [studentToAdd], (error, results, fields)=>{
		if(error) throw error; 
		connection.query('SELECT * FROM students', (error, results, fields)=>{
			if(error) throw error; 
			res.json(results);
		})
	})
})


router.get('/getStudents', (req, res, next)=>{

	connection.query('SELECT * FROM students', (error, results, fields)=>{
		if(error) throw error; 
		res.json(results);
	})

	// var students = [
	// 'sean',
	// 'drew',
	// 'daniel',
	// 'kyle'
	// ];
	// res.json(students);
})

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
