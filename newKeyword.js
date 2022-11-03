/*the new keyword here in the function call time does three things for us automatically in the userCreator fun:
1.it created an object automatically and give it the label this.
2.it linked the __proto__ property of this object to the prototype property (which is itself an object) of the 
function userCreator.
3.it returns the object created automatically.
*/
function userCreator(name,score){
    this.name = name;
    this.score = score;
}

userCreator.prototype.increment = function(){const add = () =>{this.score++;}; add()};
user1 = new userCreator('mateen',4);
user1.increment();
console.log(user1.score);
console.log(userCreator);