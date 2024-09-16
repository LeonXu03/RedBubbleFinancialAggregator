# RedBubble Dashboard

A working, breathing dashboard designed to supercharge your RedBubble data analytics. Featuring an all-encompassing dashboard, micro and macro performance metrics, and product revenue breakdown. 

A beautiful blend of line charts, pie charts, and sheets to simplify and visualize your data to evaluate your business' performance. 

Get the most out of your business with this RedBubble dashboard.

Inspired by my [dropshipping venture on RedBubble](https://www.redbubble.com/people/L-and-X/shop?asc=u)

## Interactive Demo! Try me out!
Hosted on Render [here](https://redbubble-admin-dashboard-backend.onrender.com/)

Note: Render's free hosting can take up to a minute to deploy the app. Please wait for the dashboard to load, or check out the recorded demo :) 

## Demo
TODO

## Tech Stack / Library
- MERN stack
   - MongoDB
   - Express JS
   - React
   - Node
- Redux Toolkit Query
- Styling via '@mui/material', '@mui/icons-material', '@mui/x-data-grid'
- Data Visualization via '@nivo/pie', '@nivo/line', '@nivo/geo' 

## Skills
- End-to-end full-stack development
- Client side pagination
- Server side pagination
- Data Visualization
- MongooseDB CRUD operations

## Setup Part 1: Install Dependencies (if you run into other errors, please Google the imports that are missing according to your error message)
- Setup MongoDB account and connect credentials via .env file
- Install [node.js
](https://nodejs.org/en/download/package-manager)
- Install [npx](https://www.npmjs.com/package/npx)
- ```$npm i react-redux @reduxjs/toolkit react-datepicker react-router-dom@6 @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid @nivo/core @nivo/bar @nivo/geo @nivo/pie```
- ```$npm i express body-parser cors dotenv helmet morgan mongoose nodemon```
- ```$npm i country-iso-2-to-3```
- ```$npm i @nivo/line```
- ```$npm install react-datepicker --save```

## Setup Part 2: Running the app
1. Launch Server:
    - ```$cd server```
    - ```$npm run dev```
    - If successful, console will log ```Server Port: 5001```

2. Launch Frontend Client:
    - ```$cd client```
    - ```$npm run start```
    - If successful, console will log ```Compiled successfully! You can now view client in the browser```
    - View client at ```http://localhost:3000```

