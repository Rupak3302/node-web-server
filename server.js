const http = require('http'); 
const fs = require('fs');  
const path = require('path'); 

//Create the server
const server = http.createServer((req, res) => {


    console.log('Someone visited:', req.url);


    if(req.url === '/' || req.url === '/home') {
        serveFile('pages/home.html', 200, res);

    } else if(req.url === '/about') {
        serveFile('pages/about.html', 200, res);

    } else if(req.url === '/services') {
        serveFile('pages/services.html', 200, res);

    } else if(req.url === '/contact') {
        serveFile('pages/contact.html', 200, res);

    } else if(req.url === '/styles.css') {
        serveCSS(res);

    } else {
        serveFile('pages/404.html', 404, res);

    }

});

// This function serves the CSS file
function serveCSS(res) {

    const cssPath = path.join(__dirname, 'public', 'styles.css');

    fs.readFile(cssPath, (err, data) => {

        if(err) {
            res.writeHead(500);
            res.end('CSS Not Found');
            return;
        }
        res.writeHead(200, {'Content-type': 'text/css'});
        res.end(data);
    });   
}


// This function reads a html file and sends it to the browser
function serveFile(filename, statusCode, res) {

    const filePath = path.join(__dirname, filename);

    fs.readFile(filePath,(err, data) => {
        
        if(err) {
            res.writeHead(500, {'Content-Type': 'text/html'});
            res.end('<h1>500 -Internal Server Error</h1>');
            return;
        }
        res.writeHead(statusCode, {'Content-Type': 'text/html'});
        res.end(data);

    });

}

//PORT No
const PORT = 3000;

//Server listening on port 3000
server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});


