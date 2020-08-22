//import everything that we need for npm 

const inquirer= require('inquirer'); 
console.log("Inquirer", inquirer);
const fs= require('fs'); 
const util = require('util'); 
// const { title } = require('process');
console.log("fs", fs);
console.log("util", util); 

//create a promise instead of a callback function to handle asynchronous behavior 
//promisify is built into the util 
const writeFileAsync = util.promisify(fs.writeFile); 

const promptUser = () => {
    return inquirer.prompt([ 
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
            name: "table", 
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
            type: "list", 
            name: "License", 
            message: "What kind of license should your project have?",
            choices: [
                "APACHE 2.8",
                "GPL 3.0",
                "BSD 3",
                "NONE"
            ]
        },
        {
            type: "input", 
            name: "contributing", 
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
    ]); 
}

//string template literals for generating a string version 
const generateREADME = ({title, description, table, installation, usage, license, contributing, test, questions}) => {
    // return '
    // README'; 
}

//trigger the request for the prompt and store as a variable and run in an async way 
const init = async () => {
    console.log('starting prompts');
    try {
        //store answers to prompts 
        const answers = await promptUser(); 
        //stored readme in variable 
        const readme = generateREADME(answers); 
        //write file (call function becauase we alredy wrote the file) once readme is generated 
        
        writeFileAsync('readme', readme);
        console.log('successfully wrote to readme.md');
    } catch (error) {
        console.log(error); 
    }
}; 
    init(); 



