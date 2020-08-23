//generated markdown function 

function generateMarkdown(response) {
  return `
  #  Project Title: ${response.title}

  ## Description: ${response.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Badges](#badges)

  * [Contributors](#contributors)

  * [Tests](#tests)

   ## Installation:
  Run the following command to install the necessary dependencies 
  ${response.installation}
 
  ## Usage:
  ${response.usage}
  
  ## License 
  ![GitHub License] {https://img.shields.io/badge/license-${response.license}-blue.svg}

  ## Badges 
  ![NPM LIcense](https://img.shields.io/badge/License%20-NPM-red)


  ## Contribution:
  ${response.contribution}  

  ## Test:
  ${response.test}

  ## Email:
  ${response.email}

  ## Github:
  ${response.github}

  ## Questions 
  Feel free to email me with any questions at ${response.email} or connect via GitHub at https://github.com/${response.github}
  `;
  }
  module.exports = generateMarkdown;
