let myArr = [];

function* multiplication(x){
for (let i = 0; i < 3; i++){
x *= 2;
yield x;
myArr.push(x);
yield x;
}

} 
var num = multiplication(3);

for (number of num) {
console.log(num.next().value);

}

module.exports = multiplication;
