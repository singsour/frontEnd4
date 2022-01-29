function foo(a,b){
    return a+b;
};

const foo1 = function(a,b){
    return a+b;
};

const foo2 = (a,b)=> a+b;

function bar(a){
    return a*10
};

const bar1 = function(a){
    return a*10
};

const bar2 = (a)=> a*10;
const bar3 = a=> a*10;
// 파라미터가 없으면 괄호 생략 불가능 
console.log(foo2(5,4));
console.log(bar2(5));
console.log(bar3(4));

const array = [1, 2, 3];

array.forEach(function(a,i){
    console.log(a,i)
})
console.log('=======================================')
array.forEach((a,i)=> console.log(a,i) )
// 표현식
console.log('=======================================')
array.forEach(a=> console.log(a))
// 표현식
console.log('=======================================')
array.forEach(console.log)
// 표현식
console.log('=======================================')