const http = require('http');
const server = http.createServer();
const PORT = precess.env.PORT || 3000; //80 생략하고 사용할 수 있음
const fs = require('fs')


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
    if(req.url = '/'){ 
        res.write('this is root');
        //http://localhost:3000/ 접속 경로
        res.end();
    }else if(req.url = '/login.html'){
        res.write('This is login');
        res.end();
    }
    
})

server.on('close', ()=>{
    console.log('서버 종료')
})