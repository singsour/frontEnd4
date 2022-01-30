// express 서버는 
// node  의 서버에 비해서 간략,
// path, get, post 라우팅 방법이 간단 

const express = require('express');
const app = express();
// const PORT = process.env.PORT || 3000; 
app.set( 'PORT', process.env.PORT || 3000 );

app.listen( app.get('PORT'),  ()=>{
  console.log('express server start' +  app.get('PORT'));
})


const ary = ['html', 'css', 'javascript', 'react'];
const obAry = [{ name:'kim', age:20, email:'jemicom'}, 
                { name:'park', age:33, email:'park@'}, 
                { name:'hong', age:23, email:'hong@'}
                ];

app.get('/', (req, res)=>{
    res.send(users);
});

const users = [];
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// filter, body 데이터를 인코딩 
app.post('/', (req, res)=>{
  //console.log( req.body  ); // req.params
  const user = req.body; 
  users.push( user );
  res.status(200).send('Create User');
})

app.post('/posts', (req, res)=>{
    console.log( req.headers);
})

app.get('/*', (req, res)=>{
  res.status(404).send('<h1> 404 file not found </h1>')
})


