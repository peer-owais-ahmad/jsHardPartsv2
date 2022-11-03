function objcreator(name,score){
    const newuser = Object.create(funstore); //__proto__ hidden property will link newuser to the funstore object.
    newuser.name = name;
    newuser.score = score;
    return newuser;

}
const funstore = {
  increment: function(){
     this.score++;
  }  
}
user1 = objcreator("owais",9);
console.log(user1.score);
user1.increment();
console.log(user1.score);