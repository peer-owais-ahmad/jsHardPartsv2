class obj2Creator{
    constructor(name,score)
    {
        this.name = name;
        this.score = score;
    }
    increment(){
        this.score++;
    }
}
obj2Creator.prototype.print = function(){console.log('oviv')};
const user1 = new obj2Creator('ov',3);
user1.increment();
console.log(obj2Creator.prototype);
user1.print();