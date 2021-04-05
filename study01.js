//수학연산자
Math.pow(3,2); //3의 2승
Math.round(10.7); //반올림
Math.ceil(10.2); //올림
Math.floor(10.5); //내림
Math.sqrt(9); //제곱근
Math.random(); //랜덤
Math.round(100 * Math.random());

console.log('egoing\'s coding evenrbody')
console.log('안녕하세요\n coding evenrbody')


//array, object
const nicoInfo = {
    name: "Nico",
    age: 33,
    gender: "Male",
    isHandosme: true,
    favMovies: ["Along th gods", "Oldboy", "minari"],
    favFood: [
        {
            name: "rice noodles",
            fatty: false
        },
        {
            name: "kimchi",
            fatty: false
        }
    ]
}

console.log(nicoInfo);
console.log(nicoInfo.name);
console.log(nicoInfo.favMovies[0]);
console.log(nicoInfo.favFood[0].fatty);

//function
function sayHello(){
    console.log("hello!!");
}
sayHello();

//function - argument(인자). 외부에 있는 데이터를 읽는 함수를 만드는 방법
function sayHi01(name, age){
    console.log("case1 : hello!!", name, "you have", age);
    console.log("case2 : hello!!" + name + "you have" + age);
    console.log(`case3 : hello!! ${name} you have ${age}`);
}
sayHi01('eunjung',13);

//return
/*
const calculator = {
    plus : function(a, b) {
        return a + b;
    }
}
const plus = calculator.plus(5,5);
console.log(plus);
*/

const calculator = {
    plus : function(a, b){
        return a * b;
    }
}
const plus = calculator.plus(15, 6);
console.log(plus)



