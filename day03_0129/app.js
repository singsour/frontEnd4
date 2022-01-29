const http = require('http');
const server = http.createServer();
const PORT =  process.env.PORT || 3000; 

server.listen(PORT, ()=>{
   console.log('server start : ' + PORT)
})

server.on('connection', (socket)=>{
  console.log( socket.address);
})

server.on('request', (req, res)=>{
   res.writeHead( 200, { 'Content-Type': 'text/html; charset=utf-8'});
   //  한글처리 직접 
   res.write('<h1>hello 노드서버</h1>');
   res.end();
   //  end 
})