const http = require('http')

const servidor = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type': "text/html"})
    res.write("<h1>Hello from Docker</h1>")
})  

servidor.listen(3000, () => {
  console.log("Servidor na porta 3000...")
})
