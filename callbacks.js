//passing "one function definition" to "another function" as a "parameter" called as "callback" function


/*
    function fun_one(param1){
        console.log( param1() );
    };
    fun_one( function fun_two(){
        return "Hello";
    } );
    //Hello
*/


/*
    function fun_one(param1,param2,param3){
        console.log( param1(), param2(), param3() );
    };
    fun_one( function fun_two(){
        return "Hello_1";
    }, function fun_three(){
        return "Hello_2";
    }, function fun_four(){
        return "Hello_3";
    } );
    //Hello_1 Hello_2 Hello_3
*/

/*
    let fun_one = (param1,param2,param3)=>{
        console.log( param1(), param2(), param3() );
    };

    fun_one(()=>{
        return "hello_1";
    },()=>{
        return "hello_2";
    },()=>{
        return "hello_3";
    });
    //hello_1 hello_2 hello_3
*/


/*
    function fun_one( param1 ){
        return param1("Hello_1","Hello_2","Hello_3");
    }

    fun_one( (arg1,arg2,arg3)=>{
        console.log( arg1, arg2, arg3 );
    } );

    //Hello_1 Hello_2 Hello_3
*/


/*
    function fun_one(param1,param2,param3){
        return param1("Hello_1")+"...."+param2("Hello_2")+"...."+param3("Hello_3");
    }

    fun_one( (arg1)=>{
        console.log( arg1 );                //Hello_1
    }, (arg1)=>{
        console.log( arg1 );                //Hello_2
    }, (arg1)=>{
        console.log( arg1 );                //Hello_3
    } );
*/

function add(num,callback){
    return callback(num+5,false);
}

function sub(num,callback){
    return callback(num-3,false);
}

function mul(num,callback){
    return callback(num*2,false);
}

function div(num,callback){
    return callback((num/2)-2,false);
}


add(5,(addRes,error)=>{
    if(!error){
        sub(addRes,(subRes,error)=>{
            if(!error){
                mul(subRes,(mulRes,error)=>{
                    if(!error){
                        div(mulRes,(divRes,error)=>{
                            if(!error){
                                console.log(divRes);
                            }
                        });
                    }
                });
            }
        });
    }
});
//5
//callback hell
//promises
















































































































