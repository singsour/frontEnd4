// 현재 폴더 아래에 index.html, login.html 제작
const express = require('express');
const app = express();
const path = require('path');


app.set( 'PORT', process.env.PORT ||  3000 );

app.listen( app.get('PORT'), ()=>{
    console.log('server start');
})

// http://localhost:3000/  요청
app.use('/', async (req, res)=>{
    res.sendFile(path.join(__dirname +'/views') + req.url);
    
})

app.use('/login', async (req, res)=>{
    console.log(req.url); // 요청 쿼리  /login 출력 
    res.sendFile(path.join(__dirname +'/views') + req.url);
    // http://localhost:3000/login.html
})