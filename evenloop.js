function printhello(){
    console.log('hello');
}
function printme(){
    console.log('me');
}
function waitfor1sec(){
    for(let i = 0; i<10000; i++)
    var j = i;
    setTimeout(printme,0);
    console.log('hi')
}
setTimeout(printhello,0);
waitfor1sec();
console.log('ovi');