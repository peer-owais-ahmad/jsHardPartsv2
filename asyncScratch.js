function doWhenDataRecieved(data){
    returnNextElement.next(data);
}
function * createFlow(){ 
    const data = yield new Promise((res, rej) => {
        const ovi = 7;
        if(ovi == 7)
        res('i am the data recieved from the promise');
        else
        rej('promise gets rejected');
    });;
    console.log(data);
}
const returnNextElement = createFlow();
const myprom = returnNextElement.next().value;
myprom.then(doWhenDataRecieved);
