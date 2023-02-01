// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
 const badge = {
  'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
  'APACHE 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
  'GPL 3.0': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
 }
 return badge[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const link = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'APACHE 2.0': 'https://opensourc.org/Apache-2.0',
    'GPL 3.0': 'https://www.gnu.org/licenses/-3.0',
  }
  return link[license]
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data)  {
  ` return # ${data.title}
  
  
  ${renderLicenseBadge(data['license'])}
  
  
  
  ## Description
  ${data.description}
  
  
  
  ## Tablet of content 
  ${data.content}
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#credits)
  
  
  
  
  ## Intalletion 
  ${data.installation}
  
  
  
  ## Usage
  ${data.usege}
  
  
  
  ## Credits 
  ${data.credits}
  
  
  
  
  ## License 
  ${data.license}
  
  `;
  
}

module.exports = {

  generateMarkdown,
}
