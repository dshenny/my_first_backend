# my_first_backend

my_first_backend is a project designed to teach the basics of Expresss while setting up a Frank Sinatra Wiki. 



## Usage

You can start the server by running "node app.js" which allows you to access the site via the browser or by using curl on you localhost. 

GET "/" will give randomly (in a pool of at least 20) a name of a song from Frank Sinatra.

GET on "/birth_date" will give Frank Sinatra birth date.

GET on "/birth_city" will give Frank Sinatra birth city.

GET on "/wives" will give all of  the names of Frank Sinatra wives.

GET on "/picture" will give Frank Sinatra's picture.

GET on "/public" will print "Everybody can see this page".

GET on "/protected" will be protected by a HTTP Basic access authentication and print "Welcome, authenticated client" if you are authorized with the login admin and password admin otherwise it will provide a 401 Not authorized.
