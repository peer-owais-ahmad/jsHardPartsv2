function *createFlow(){
    yield 4;
    yield 5;
}
const obj1 = createFlow();
const element1 = obj1.next();
console.log(typeof element1);
console.log(obj1.next())
console.log(obj1.next());