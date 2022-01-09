let contents = ['Questions'];
const licenseData = {
  Apache: [
    "Apache 2.0",
    "https://opensource.org/licenses/Apache-2.0",
    "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  ],
  BSD: [
    "BSD 3-Clause License",
    "https://opensource.org/licenses/BSD-3-Clause",
    "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  ],
  CreativeCommons: [
    "Attribution 4.0 International",
    "https://creativecommons.org/licenses/by/4.0/",
    "[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)",
  ],
  Eclipse: [
    "Eclipse Public License 1.0",
    "https://opensource.org/licenses/EPL-1.0",
    "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  ],
  GNU: [
    "GNU GPL v3",
    "https://www.gnu.org/licenses/gpl-3.0",
    "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  ],
  IBM: [
    "IBM Public License Version 1.0",
    "https://opensource.org/licenses/IPL-1.0",
    "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
  ],
  MIT: [
    "MIT",
    "https://opensource.org/licenses/MIT",
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  ],
  Mozilla: [
    "Mozilla Public License 2.0",
    "https://opensource.org/licenses/MPL-2.0",
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  ],
  OpenDataCommons: [
    "Attribution License (BY)",
    "https://opendatacommons.org/licenses/by/",
    "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)",
  ],
  Perl: [
    "The Perl License",
    "https://opensource.org/licenses/Artistic-2.0",
    "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  ],
  Zlib: [
    "The zlib/libpng License",
    "https://opensource.org/licenses/Zlib",
    "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
  ],
};

const generateBadgeChoice = (licenseChoice) => licenseData[licenseChoice];

function renderLicenseSection(data) {
  const userLicense = generateBadgeChoice(data.license);

  if (userLicense) {
    contents.push('License');
    return `## License 
    
This project is using the following license: [${userLicense[0]}](${userLicense[1]})
    `;
  }
  return "";
}

function renderBadgeSection(data) {
  const userBadge = generateBadgeChoice(data.license);

  if (userBadge) {
    return `${userBadge[2]}`;
  }
  return "";
}

function renderQuestionSection(data) {
  const username = data.githubUsername;
  const email = data.email;

  if (username) {
    return `## Questions
    
Link to Github profile: [${username}](www.github.com/${username})

Should you have any questions about how to use this repo, feel free to contact me at ${email}`;
  }
  return "";
}

function renderInstallSection(data) {
  const install = data.install;

  if (install) {
    contents.push('Installation');
    return contents, `## Installation

${install}`;
  }
  return "";
}

function renderUsageSection(data) {
  const usage = data.usage;

  if (usage) {
    contents.push('Usage');
    return contents, `## Usage

${usage}`;
  }
  return "";
}

function renderContributorsSection(data) {
  const contributors = data.contributions;

  if (contributors) {
    contents.push('Contributors');
    return contents, `## Contributors

${contributors}`;
  }
  return "";
}

function generateTableOfContents() {
  console.log(contents);
  for (i = 0; i < contents.length; i++) {
    return `* [${contents[i]}](#${contents[i]})`
  }
}

function generateMarkdown(data) {
  return `${renderBadgeSection(data)}

# ${data.title}

## Description

${data.description}


## Table of Contents

${generateTableOfContents()}

${renderInstallSection(data)}

${renderUsageSection(data)}

${renderContributorsSection(data)}

${renderQuestionSection(data)}

${renderLicenseSection(data)}

`;
}

module.exports = { generateMarkdown };
