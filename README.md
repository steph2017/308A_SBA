# Your Own Art Gallery
This project is a webpage powered by Javascript that consumes the [Met API](https://metmuseum.github.io/) in order to display art in a carousel. The webpage styling and coding outline was modified from [this CodeBase](https://codesandbox.io/p/sandbox/ajax-fetch-and-axios-lab-template-8yn8xq?from-embed=).

## Table of Contents
- [Installation](#installation)
- [Live Site](#livesite)
- [Usage](#usage)
- [Features](#features)
- [Acknowledgements](#acknowledgements)
  
## Live Site
[https://main--tubular-ganache-6c2c23.netlify.app/](https://main--tubular-ganache-6c2c23.netlify.app/)

## Installation

##### Clone the repository

git clone https://github.com/steph2017/SBA316.git

##### Navigate to the project directory
cd your-repo-name

##### Deploy via Parcel
npm run build


## Features

- A Dropdown populated by a class of data within the API (DepartmentID)
<img width="657" alt="image" src="https://github.com/steph2017/308A_SBA/assets/34190698/2c68dbe1-8247-4a10-b08a-8cceae9fee26">

- Uses a picArrange.js module to load matching image IDs to an array then a Carousel.js module to populate the Carousel with values from the resulting Array.
<img width="891" alt="image" src="https://github.com/steph2017/308A_SBA/assets/34190698/72f861b2-d4de-48ab-8958-40b8c22a734a">
  
- Extracts various values from the image object in the API to display information about each image:
  <img width="1574" alt="image" src="https://github.com/steph2017/308A_SBA/assets/34190698/6a90d1b8-53c8-4ac3-88f5-ace86e19d06a">

 
## Usage
- Simply use the dropdown and green submit button to get results.

## Acknowledgements
This was made possible by:
- Instruction from [Tishana](https://github.com/tishana) and [Manara](https://github.com/Manara-Ali) under the [Per Scholas Software Engineering Immersive]https://perscholas.org/courses/software-engineer/
- The Per Scholas Product Development Team for the [borrowed code](https://codesandbox.io/p/sandbox/ajax-fetch-and-axios-lab-template-8yn8xq?from-embed=).
- [Nadir Kerem](https://github.com/nadirkerem) for his advice on installing the shell code via "npm run build" and for showing me how to deploy through Netlify to avoid config issues.
- Helpful troubleshooting resources such as [MDN Web Docs](https://developer.mozilla.org/en-US/) and [Stack Overflow](https://stackoverflow.com/).
