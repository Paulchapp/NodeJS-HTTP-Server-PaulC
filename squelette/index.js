const http = require('http');

const server = http.createServer((req, res) => {

  let start = performance.now();
  try {
    console.log(req.httpVersion, req.url, req.method);
    
    if (req.url === "/") {
      res.writeHead(200, {'content-type':'text/html'});
      res.write('<h1>HELLO WORLD PaulC</h1>');
    } else {
      res.writeHead(404, {'content-type':'text/html'});
      res.write('<h1>404 Page Introuvable </h1>');
    }
  } catch (err) {
    res.writeHead(500, {'content-type':'text/html'});
    res.write('<h1>500 Erreur Interne au Serveur</h1>');
  }
 
  res.end()

  let end = performance.now();
  console.log("requête a pris", end - start);
})

server.listen(5000);
console.log('Mon serveur écoute sur le port 5000');