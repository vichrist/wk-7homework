//Homework: no front end, run node first and answer questions. Use inquire prompt to answer questions, take that data and pass data into function that will return something back to us in the form of a markdown file 

const inquirer= require('inquirer'); 
console.log("Inquirer", inquirer);

const fs= require('fs'); 
const { title } = require('process');
console.log("fs", fs);

inquirer.prompt ([
    {
        type: "input", 
        name: "title", 
        message: "What is the title of your project"
    }, 
    {
        type: "input", 
        name: "description", 
        message: "Description of project"
    },
    {
        type: "input", 
        name: "table of contents", 
        message: "table of contents"
    },
    {
        type: "input", 
        name: "installation", 
        message: "Installation Instructions"
    },
    {
        type: "input", 
        name: "Usage", 
        message: "Usage Information"
    },
    {
        type: "input", 
        name: "Contributing", 
        message: "Contributing Guidelines"
    },
    {
        type: "input", 
        name: "test", 
        message: "Test Instructions"
    },
    {
        type: "input", 
        name: "questions", 
        message: "Questions"
    }
])

// ]).then(function(data) {

//     var filename = data.name.toLowerCase().split(' ').join('') + ".json";
  
//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
  
//       if (err) {
//         return console.log(err);
//       }
  
//       console.log("Success!");
  
//     });
//   });


 // Turn the arrays into JSON strings so they can be written to files
//  const dogJSON = JSON.stringify(dogs, null, 2);
//  const catJSON = JSON.stringify(cats, null, 2);

//  writeFileAsync("dogs.json", dogJSON).then(function() {
//    console.log("Successfully wrote to dogs.json file");
//  });

//  writeFileAsync("cats.json", catJSON).then(function() {
//    console.log("Successfully wrote to cats.json file");
//  });
// });