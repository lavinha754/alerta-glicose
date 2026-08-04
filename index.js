const http = require("http");

const glicose = "120";

const server = http.createServer((req, res) => {
  if (req.url === "/glicose") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
      nome: "João",
      glicose: glicose,
      unidade: "mg/dL"
    }));

  } else {
    res.writeHead(404);
    res.end("Página não encontrada");
  }
});

server.listen(3000, () => {
  console.log("Servidor de glicose funcionando");
});
