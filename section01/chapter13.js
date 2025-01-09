// 1. 콜백 함수
// -> 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미
function main(value) {
    value();
}

main(() => {
    console.log("i am sub");
});

// 2. 콜백 함수의 활용
function repeat(count, callback) {
    for (let i=1; i<=count; i++){
        callback(i);
    }
}

// function repeatDouble(count) {
//     for (let i=1; i<=count; i++){
//         console.log(i * 2);
//     }
// }

repeat(5, (i) => {
    console.log(i)
});

// repeatDouble(5);
repeat(5, (i) => {
    console.log(i * 2)
});