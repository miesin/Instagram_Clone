var faker = require('faker');
var mysql = require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});




var data = [];
for(var i = 0; i < 500; i++) {data.push([faker.internet.email(), faker.date.past()]);}

var q = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});

connection.end();





// console.log(faker.internet.email());
// console.log(faker.address.streetAddress());
// console.log(faker.address.city());
// console.log(faker.address.state());
 // Root User: root
 //   Database Name: mysql
// function GenerateAddress(){
// console.log(faker.address.streetAddress());
// console.log(faker.address.city());
// console.log(faker.address.state());
// } 

// GenerateAddress();


// var q = 'Select curtime() as time, curdate() as date, now() as now';

// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log('The time is: ', results[0].time);
//   console.log('The date is: ', results[0].date);
//   console.log('The current date and time is: ', results[0].now);
// });


// var q = 'Select count(*) as total from users';

// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].total); 
// }); 

// var q = 'insert into users(email) values("panda@yahoo.com")';

// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results); 
// }); 







// console.log(person);

// var end_result = connection.query('insert into users set ?', person, function(error, results, fields)
// 	{if (error) throw error;
// 	console.log(results);
// 	});


// MULTIPLE ENTRIES
// var data = []
// data.push([faker.internet.email(),
// 		   faker.date.past()])

// var q = 'INSERT INTO users (email, created_at) VALUES ?';

// connection.query(q, [data], function(err, result) {
//   console.log(err);
//   console.log(result);
// });


// console.log(data);

// var person = {email: faker.internet.email(),
// 			 created_at: faker.date.past()};

 //  var person = {email: 'Jenny467@gmail.com'};
 //  connection.query('INSERT INTO users SET ?', person, function(err, result) {
 //   if (error) throw error;
 //   console.log(result);
 // });


// if you add [0] to the results, it will show you the first result and [1] is the 2nd and so on
// also, if you want only email is [0].email


// console.log(faker.date.past());
// console.log(faker.date.past().toString());

// var q = 'select curdate()'
// connection.query(q, function (error, result, fields){ if (error) throw error; console.log('The solution is ', results[0].solution);
// });



 
