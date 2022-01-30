// 현재 폴더 아래에 index.html, login.html 제작
const express = require('express');
const app = express();

app.set( 'PORT', process.env.PORT ||  3000 );

app.listen( app.get('PORT'), ()=>{
    console.log('server start');
})

// http://localhost:3000/  요청
app.get('/', async (req, res)=>{
    res.sendFile(__dirname +'/views' + req.url);
    // 서버와 같은 폴더에 index.html 생성 
    // **index.html은 자동 인식 **
})

// http://localhost:3000/login 요청
app.get('/login', async (req, res)=>{
    console.log(req.url); // 요청 쿼리  /login 출력 
    res.sendFile(__dirname +'/views'+ req.url + '.html');
    // 그외의 다른 파일들은 정확한 path 만들기
})