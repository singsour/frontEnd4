exports.add = function(a,b){
    return a + b;
}

exports.sub = (a,b)=>{
    return a > b ? a - b : b - a;
}

exports.mul = (a,b)=> a * b;

exports.div = (a,b)=> a / b;

// module.exports = {add, sub, mul, div}