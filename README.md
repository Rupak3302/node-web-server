# node-web-server
Simple web server in Node.js

## How to Run 
1. Node.js is installed
2. Open termina;
3. Run the command:
   node server.js

4. open browser and go to http://localhost:3000

## Modules used 
- http- to create the server
- fs- to read the files
- path- to build the file path

## How to server works
1. The server used to http module to listen for request on port no 3000
2. when the request come , req.url tells us what page browser want
3. we use if/else to check the URL and call the serveFile() with the right HTML file
4. serveFile() amd fs.readFile() to read the file asynchronously and send it back
5. if the URL dosen't match any route then show the 404 page 

##Routes 
URL -------- Page -------- Status
- /home ---- Home page ---- 200 OK
- /about ---- About page ---- 200 OK
- /services ---- Services page ---- 200 OK
- /contact ---- Contact page ---- 200 OK
- anything else ---- 404 page ---- 404 Not Found

- if file mismatch or deleted ---- 500 - Internal server error
