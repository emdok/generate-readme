// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseData = {
  Apache: ['Apache 2.0', 'https://opensource.org/licenses/Apache-2.0', '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'],
  BSD: ['BSD 3-Clause License', 'https://opensource.org/licenses/BSD-3-Clause', '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'],
  CreativeCommons: ['Attribution 4.0 International', 'https://creativecommons.org/licenses/by/4.0/', '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)'],
  Eclipse: ['Eclipse Public License 1.0', 'https://opensource.org/licenses/EPL-1.0', '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'],
  GNU: ['GNU GPL v3', 'https://www.gnu.org/licenses/gpl-3.0', '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'],
  IBM:['IBM Public License Version 1.0', 'https://opensource.org/licenses/IPL-1.0', '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'], 
  MIT:['MIT', 'https://opensource.org/licenses/MIT', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'], 
  Mozilla:['Mozilla Public License 2.0', 'https://opensource.org/licenses/MPL-2.0', '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'],
  OpenDataCommons: ['Attribution License (BY)', 'https://opendatacommons.org/licenses/by/', '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'], 
  Perl: ['The Perl License', 'https://opensource.org/licenses/Artistic-2.0', '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'],
  Zlib: ['The zlib/libpng License', 'https://opensource.org/licenses/Zlib', '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)']
};

const generateBadgeChoice = (licenseChoice) => licenseData[licenseChoice]


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const userLicense = generateBadgeChoice(data.license)

  if (userLicense) {
    return `
## License 
    
This project is using the following license: [${userLicense[0]}](${userLicense[1]})
    `
  }
  return '';

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}


## Table of Contents

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${data.install}


## Usage 

${data.usage}

${renderLicenseSection(data)}


## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Contributing

If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them.



`;
}


module.exports = { generateMarkdown, generateBadgeChoice };
