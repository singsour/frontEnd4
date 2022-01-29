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


const output = path.join(__dirname, './output.txt');

server.on('request', (req,res)=>{
    // 비동기 : 데이처를 읽는 동안 뒤의 작업이 멈춰 있어야 함
    // 동기 : 데이터를 읽는 동안 기다리지 않고 뒤 작업을 무조건 실행
    // const data = fs.readFile('./packge.json', 'utf-8', (err, data)=>{
    //     console.log(data);// undifined
        
    // });
    fs.writeFile(output, 'my data', (err, data)=>{
        if(err){console.log('Error' + err);}
    })
    console.log('나 먼저 실행');
    
})

server.on('close', ()=>{
    console.log('서버 종료')
})

server.on('close', ()=>{
    console.log('서버 종료')
})