const myobj = {
    name:'owais',
    1: 'ovi',
    roll_no: 18,
    score: 10,
    myfun: function(){myobj.score++}
}
console.log(myobj.name);
console.log(myobj.score);
myobj.myfun();
console.log(myobj.score);

//another way of creating objects
const myfrnd = Object.create(null);
console.log(myfrnd);
myfrnd.name="mateeeen";
myfrnd.rollno=85;
myfrnd.condition='very sad';
myfrnd.location='navi mumbie';
console.log(myfrnd);
console.log(myfrnd.location);

//function creating and returning objects
function createObject(name,score){
   const newuser = {}
   newuser.name=name;
   newuser.score=score;
   newuser.increment=function(){newuser.score++};
   return newuser;
}
user1=createObject('owais',10);
user2=createObject('mateen',9);
console.log(user2.score);
user2.increment();
console.log(user2.score);
console.log(user1.score);