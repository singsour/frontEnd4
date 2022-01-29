var url = require('url');
// var 변수 중복이 발생해도 오류가 나지 않아서
// 유지 보수가 힘듬

// 주소 문자열을 URL 객체로 만들기
var curURL = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_sug.mbk&fbm=1&acr=1&acq=%EC%9E%90%EB%B0%94%EC%8A%A4%E3%85%A1&qdt=0&ie=utf8&query=%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8');

// URL 객체를 주소 문자열로 만들기
var curStr = url.format(curURL);

console.log(`주소 문자열 : ${curStr}` );
console.dir(curURL);

// 요청 파라미터 구분하기
// 내장 객체 Query string 사용
var querystring = require('querystring');
var param = querystring.parse(curURL.query);
// 요청 파라미터를 파싱하여 요청 파라미터 객체로 만듬

console.log('요청 파라미터 중 query의 값 : ', param.query);
// 검색어 찾아서 출력, 요청 파라미터는 &로 구분되어 쉽게 분리
console.log('원본 요청 파라미터 : ', querystring.stringify(param));
// 원본 URL 출력


// let param = querystring.parse( curStr.query );
