# RecipeSearch: A Recipe Search App Made Using React.js

A Simple Recipe App made using React.js.<br/>

## API Used

https://developer.edamam.com/edamam-docs-recipe-api

## Content Covered

API Integration<br/>
Custom Pagination<br/>
Responsive UI

## Must Read

The API response claims to have result count(No. of recipes) for each search value to be a very large number while actually the documents are not more than 100.<br/>
That is the reason why you might not see anything after page number 9.<br/>

Detailed Explaination:<br/>
ItemsPerPage = 12<br/>
Page = 9<br/>
Therefore 12 * 9  = 108 i.e. > 100<br/>
Thus the 9th page might only be showing values 96 - 100 and nothing after that.<br/>

Also,<br/>
You need to add your own:<br/>
1) FontAwesome CDN in index.html
2) APP_ID in App.js
3) APP_KEY in App.js

## To run this app..

### Run 'cd your-app-root-directory'

Navigate to the root folder where you copied the code.

### Run 'npm install'

Installs all the dependencies.

### Run 'npm start'

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



## A few Screen Shots...

### Initial Look

<div align="center">
    <img src="./screenshots/Initial.png" width="800px" />
</div>

### Searched Results

<div align="center">
    <img src="./screenshots/SearchResults.png" width="800px" />
</div>

### Pagination

<div align="center">
    <img src="./screenshots/Pagination.png" width="800px" />
</div>
