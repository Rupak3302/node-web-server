# node-web-server
Simple web server in Node.js

## How to Run 
1. Node.js is installed
2. Open termina;
3. Run the command:
   node server.js

4. open browser and go to
   - http://localhost:3000
   - http://localhost:3000/home
   - http://localhost:3000/about
   - http://localhost:3000/services
   - http://localhost:3000/contact
   - http://localhost:3000/xyz ( show 404 )
   

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


## Terminal page And Screenshot
- Terminal
   <img width="1919" height="1033" alt="Screenshot 2026-03-25 141317" src="https://github.com/user-attachments/assets/15c16099-ad7d-42f7-a3dc-d98ac6a78dec" />

- Screenshots
1. Home page
   <img width="1919" height="1029" alt="Screenshot 2026-03-25 141351" src="https://github.com/user-attachments/assets/45f963af-7dbe-49ec-817f-a1041f6d5dcf" />
   <img width="1918" height="1030" alt="Screenshot 2026-03-25 141455" src="https://github.com/user-attachments/assets/e5ec35f1-483d-4a55-a6d6-9452a312a59f" />
2. About page
   <img width="1915" height="1032" alt="Screenshot 2026-03-25 141510" src="https://github.com/user-attachments/assets/28a11cf0-9fb0-4a68-889d-e723f4f0c090" />
3. Services page
   <img width="1919" height="1030" alt="Screenshot 2026-03-25 141520" src="https://github.com/user-attachments/assets/309a89e9-a42b-4ec4-bcd7-7ac9942b44ad" />
4. Contact page
   <img width="1919" height="1029" alt="Screenshot 2026-03-25 141531" src="https://github.com/user-attachments/assets/7ad5a729-6022-4825-9411-cc0620d1586c" />
5. 404 page
   <img width="1914" height="1032" alt="Screenshot 2026-03-25 141553" src="https://github.com/user-attachments/assets/06cfe2fc-5a38-49f1-97d4-b9ce898a1262" />


