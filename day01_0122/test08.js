'use strict'
//javascript 에 엄격한 문법을 지켜가며 사용하겠다.

// 자바스크립트 중 객체 

let num = 10;
let name = 'kim';
// 데이터 타입이 없음
// console.log(num2);
// undifined

let Person = {
    num:10,
    name:'kim',

    /// ES5 규정
    getNumber:function(){
        return this.num;
    },
    // ES6
    // getNumber(){
    //     return this.num;
    // },
};
Person.age = 20;
//객체데이터를 동적으로 할당
// 유지보수가 힘들고 프로젝트의 데이터 쓰임개등 확인이 어려움
console.log(Person.num);
console.log(Person.name);
console.log( typeof Person);
console.log(Person.age);
console.log(Person['name']);
console.log(Person.getNumber());
nameReturn1();
// 객체, 함수, 배열
// 함수 선언 
function nameReturn1(){
    return 'hong1';
}
nameReturn1();

// nameReturn2(); //오류
//함수를 표현한 것으로 호이스팅이 되지 않아서 error
// 표현식
let nameReturn2 = function(){
    return 'hone2'
}

nameReturn2();
