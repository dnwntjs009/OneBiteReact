// 1. 함수 표현식 (호이스팅 x)

function funcA() {
    console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
    console.log("funcB");
}
varB();

// 2. 화살표 함수
let varC = (value) => {
    return value + 1;
}

console.log(varC(10));