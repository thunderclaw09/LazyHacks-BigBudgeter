var weeklySalary = 0.0;
var weeklyExpenses = 0.0;
var currentMoney = 0.0;
//var week = 0;

// const date = new Date();
// let currentDay = date.getDate();
// let currentMonth = date.getMonth();
// let currentYear = date.getFullYear()
const fs = require("fs");
const { start } = require("repl");

//  DONE ON STARTUP???
function initialization(money, salary, expenses) // because this overrides the file, this should only be done once. 
{
    const initValues = {
        currentMoney: money, 
        weeklySalary: salary,
        weeklyExpenses: expenses
    }

    
    // converting the JSON object to a string (i copied this from openReplay)
    const data = JSON.stringify(initValues);
    // writing the JSON string content to a file
    fs.writeFile("data.json", data, (error) => {
    // throwing the error
    // in case of a writing problem
    if (error) {
        // logging the error
        console.error(error);

        throw error;
    }

    console.log("data.json written correctly");
    });
}

function startup() // read data from the file
{
    fs.readFile("data.json", (error, data) => {
        // if the reading process failed,
        // throwing the error
        if (error) {
          // logging the error
          console.error(error);
      
          throw err;
        }
      
        // parsing the JSON object
        // to convert it to a JavaScript object
        const theData = JSON.parse(data);
      
        // printing the JavaScript object
        // retrieved from the JSON file
        console.log(theData);

        currentMoney = theData.currentMoney;
        weeklySalary = theData.weeklySalary;
        weeklyExpenses = theData.weeklyExpenses;

        //put a callback here if you want to do anything further
      });    
}



function gainedMoney(amount)
{
    currentMoney = currentMoney + amount;
}

function lostMoney(amount)
{
    currentMoney = currentMoney - amount;
}

// weekly update of money. Triggered by a button press each saturday?
function updateMoney()
{
    currentMoney = currentMoney + weeklySalary - weeklyExpenses;
    initialization(currentMoney, weeklySalary, weeklyExpenses);
    startup();
    
}


startup();





////////////////////////////////// ALGORITHMS ///////////////////////////////





