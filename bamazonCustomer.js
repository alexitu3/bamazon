var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('easy-table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected");
  startUp();
});


function startUp() {
  var query = connection.query("SELECT * from products", function(error, results) {
    if (error) {
      console.log(error);
    }
      console.log(Table.print(results));
      toBuy();
  }) 
}

function toBuy() {
  inquirer.prompt([
  {

    type: "input",
    name: "userInput",
    message: "What do you want to buy? (please input item ID)",
    
  },
  {
    type: "input",
    name: "userQuantity",
    message: "How many would you like to buy?"

  }

  ]).then(function(answer) {
    var query = "SELECT * FROM products WHERE ?";
    console.log(res[answer.userInput], res[answer.userQuantity])
    connection.query(query, {item_id: answer.userInput}, function(err, res) { 
        
        // console.log(res[answer.userInput - 1].stock_quantity);
        if(res[answer.userInput].stock_quantity > answer.userQuantity) {
          // howMany(res[answer.userInput -1], answer.userQuantity);
          // console.log(res[answer.userInput -1])
          // console.log(res)
          }
          else {
          console.log("******Insufficient Quantity******")
        }
    });
  });
  
}

function howMany(item_id, userQuantity) {
  console.log(res[answer.userInput -1].stock_quantity);
  console.log(answer.userQuantity)
  var query = connection.query(  
    "UPDATE products SET ? WHERE ?",

    [
      {
        stock_quantity: parseInt(stock_quantity) - parseInt(userQuantity)
      },

      {
        item_id: item_id
      }

    ],
      function(err, res) {
      console.log(res.affectedRows + " products updated!\n");
      }
    )
  console.log(query.sql);
}


