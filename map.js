const numbers=[5,6,7,8,9];
const multiplication=numbers.map(mul);
function mul(num){
    return num*10;
}
console.log(multiplication);