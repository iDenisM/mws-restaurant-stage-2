In the front-end folder you will find all the files for the the front end development
In the back-end folder you will find all the back end files and the back end server

To start the front end part go to the front-end folder. From your terminal navigate to the front-end folder location. When inside you can type next to start the front-end server:
# python -m SimpleHTTPServer 8000
If the response is "Serving HTTP..." then the front end server is on and you can load the http://localhost:8000 webpage.

To start the back end server go to the back-end folder from the project folder. First you have to install all the dependancies.
From your terminal navigate to the back-end folder and mws-restaurant-stage-2 folder. When inside the mws-restaurant-stage-2 folder do next:
First install project dependancies:
# npm i
Then install the Sails.js globaly (you may need to give it authorization 'sudo'). If you have sails installed globaly you can skip this step.
# npm i sails -g
From now on you can start the server
# node server
If you see a boat that sails on your terminal then you are good with your back end server. To check that you receive the json file from the back end you can test it by accessing the http://localhost:1337/restaurants address in you browser. You should get a list of restaurants objects in an array. In case you have an empty array or a page not found error check the steps before.

Now you can search your favorite restaurant.
