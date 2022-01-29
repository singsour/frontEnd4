const http = require('http');
const server = http.createServer();
const PORT = process.env.PORT || 3000; //80 생략하고 사용할 수 있음
const fs = require('fs')
const path = require('path')

server.listen(PORT, ()=>{
    // 서버 대기 중
    console.log('server start');
})

server.on('connection', (socket)=>{
    // 클라이언트가 연결되면 동작
    console.log(`clinet 연결 ${socket}`)
})




server.on('request', (req,res)=>{
    //res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
    //한글이 꺠지지 않게 동작하도록 하는 코드
    fs.readFile('./images/shop.jpg', (error, data)=>{
        // ./images/shop.jpg == data
        res.writeHead(200, {'Content-Type':'image/jpeg;'})
        res.write(data);
        res.end();
    })
    
})

server.on('close', ()=>{
    console.log('서버 종료')
})

server.on('close', ()=>{
    console.log('서버 종료')
})