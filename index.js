
console.log("Before Prepare food");
function prepareFood(callback){
    setTimeout(()=>{
        console.log("Prepare Food");
        callback("Food is Ready");
    },5000);
}
function prepareFrenchToast(callback){
    setTimeout(()=>{
        console.log("Prepare Frensh Toast");
        callback("French Toast is Ready");
    },2000);
}
function prepareCoffee(callback){
    setTimeout(()=>{
        console.log("Prepare Coffee");
        callback("Coffee is Ready");
    },3000);
}
function mycallback(value){
    console.log("Food is Ready callback = ",value);
    prepareFrenchToast(frenchToastcallback);
}
function frenchToastcallback(value){
    console.log("French Toast is Ready callback = ",value);
    prepareCoffee(coffeecallback);
}
function coffeecallback(value){
    console.log("Coffee is Ready callback = ",value);
}

prepareFood(mycallback);

console.log("After Prepare food dinner is ready");