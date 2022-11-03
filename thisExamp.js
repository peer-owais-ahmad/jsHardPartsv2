function obj1creator(name,score){
    const newuser = Object.create(fun1storee);
    newuser.name = name;
    newuser.score = score;
    return newuser;
}
/*here we are declaring function inside function, and for that function this will be referred to the default value
of this. and the default value of this refers to the global window object.*/
const  fun1storee = {
    /*increment: function(){
        function add(){this.score++;}
        add.call(this);*/
        increment: () => {this.score++;}
        //now if we want "this" to refer to the current object we dont have to call add directly
        //we have to call it like "add.call(this)"

        /*a more clear way of writing code here is declare this function using => style, cox if we declare
        a function using arrow notation then this refers to the current object, not to the default object*/

    }

const ovi = obj1creator('oviii',4);
console.log(ovi.score);
ovi.increment();
console.log(ovi.score);

