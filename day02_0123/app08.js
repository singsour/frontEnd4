const http = require('http');
const server = http.createServer();
const PORT = process.env.PORT || 3000; //80 생략하고 사용할 수 있음
const fs = require('fs')

server.listen(PORT, ()=>{
    // 서버 대기 중
    console.log('server start');
})

server.on('connection', (socket)=>{
    // 클라이언트가 연결되면 동작
    console.log(`clinet 연결 ${socket}`)
})


const main = './test07.html'
const login = './login.html'

server.on('request', (req,res)=>{
    console.log(req.url);
    
    if(req.url === '/'){ 
        fs.readFile(main, (error, data)=>{
            res.write(data)
            res.end();
        })
    }else if(req.url === '/login.html'){
        fs.readFile(login, (error, data)=>{
            res.write(data)
            res.end();
        })
    }
    
})

server.on('close', ()=>{
    console.log('서버 종료')
})

server.on('close', ()=>{
    console.log('서버 종료')
})