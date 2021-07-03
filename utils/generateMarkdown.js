// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }else {
    return "no license provided"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let licenseString = renderLicenseSection(data.license)
  return `# ${data.title}

And this is another thing that I am writing as if it was a word document

next line

a bunch of bullshit

${data.description}

${licenseString}
`;
}

module.exports = generateMarkdown;
