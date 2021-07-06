function renderLicenseSection(license) {
  if(license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license == "Apache 2.0") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license == "CC0") {
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
      } else if (license == "Attribution 4.0 International") {
        return "[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)"
        } else if (license == ""){
    return ""
  }
}

function generateMarkdown(data) {

  let licenseString = renderLicenseSection(data.license)
  return `${licenseString}
# ${data.title} 

# Table of contents:
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Testing](#testing)

# Description
${data.description}

# Installation: 
${data.installation}

# Usage:
${data.usage}

# Contributing:
${data.contributing}

# Testing:
${data.test}

For more information contact the author at github.com/${data.username}.
`;
}

module.exports = generateMarkdown;
