//Execution of tasks with "dependencies" between them called as "Promises"
//Promises are used to create the "Asynchromous" Calls
//1) Promise Creation
//2) Promise Consumption
//Producer will create the Promises
//Producer will create the Promises with the help of "Promise" class
//Consumer will consume the Promises in two ways
//1) then()
//2) async & await keywords

/*
    let promise1 = new Promise((resolve,reject)=>{
        resolve("welcome to promises");
    }); 
    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
    //welcome to promises
*/

/*
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("welcome to promises with timer");
        },5000);
    });

    async function my_fun(){
        let res = await promise1;
        console.log(res);
    }

    my_fun();
    //welcome to promises with timer
*/

function add(num){
    return new Promise((resolve,reject)=>{
        resolve(num+5);
    })
};
function sub(num){
    return new Promise((resolve,reject)=>{
        resolve(num-3);
    })
};
function mul(num){
    return new Promise((resolve,reject)=>{
        resolve(num*2);
    })
};
function div(num){
    return new Promise((resolve,reject)=>{
        resolve( (num/2)-2 );
    })
};
async function consume(){
    let addRes = await add(5);
    let subRes = await sub(addRes);
    let mulRes = await mul(subRes);
    let divRes = await div(mulRes);
    console.log( "AddRes...",addRes );
    console.log( "SubRes...",subRes );
    console.log( "MulRes...",mulRes );
    console.log( "DivRes...",divRes );
}
consume();

















































