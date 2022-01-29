const http = require('http');
const server = http.createServer();
const PORT = 3000; //80 생략하고 사용할 수 있음


server.listen(PORT, ()=>{
    // 서버 대기 중
    console.log('server start');
})

server.on('connection', (socket)=>{
    // 클라이언트가 연결되면 동작
    console.log(`clinet 연결 ${socket}`)
})


server.on('request', (req,res)=>{
    console.log(req.url);
    // req : 클라이언트가 요창하면서 가져오는 정보
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
    res.write('<h1>노드 안녕</h1>')
    // res : 서버가 클라이언트 응답하는 정보
})

server.on('exit', ()=>{
    console.log('서버 종료')
})