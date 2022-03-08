//string
//collection of "chatacters" called as "string"
//we will declare the string by using ""(double quotes), ''(single quotes) and ``(backtick)
//``(backtick) operator introduced in ES6
//``(backtick) operator also called as "template literal"
//``(backtick) operator used to define the paragraphs (multiline strings)
var sub_one = "ReactJS";
var sub_two = "NodeJS";
var sub_three = "MongoDB";
var mern_stack = `${sub_one}.....${sub_two}....${sub_three}`;
console.log( mern_stack );
//ReactJS.....NodeJS....MongoDB




//numbers
//decimal
//double / float
//hexadecimal
//octal
//binary
//hexadecimal number will prefix with "0x"
//octal number will prefix with "0o"
//binary number will prefix with "0b"
var decimal_num = 100;
var double_num = 100.12345;
var hexadecimal_num = 0x123ABC;
var octal_num = 0o123;
var binary_num = 0b1010;
console.log( decimal_num, double_num, hexadecimal_num, octal_num, binary_num );



//boolean
//true / false
//true - 1
//false - 0
var flag = true;
var flag1 = false;
console.log( flag );
console.log( flag1 );
console.log( true + true );             //2
console.log( true + false );            //1
console.log( 1 + true );                //2
console.log( 1 / true );                //1
console.log( true / true );             //1
console.log( true / false );            //Infinity
console.log( true / "A" );              //NaN


//undefined
var phone;
console.log( phone );               //undefined

phone = null;
console.log( phone );               //null



//bigint
//bigint is the "datatype"
//used to represent the "large" numbers
//bigint numbers suffix with "n"
// >2^53 - 1
var large_number = 28169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946n;
console.log( large_number );



var x = Symbol("hello");
console.log(x);



//string
//number
//boolean
//undefined
//null
//bigint
//Symbol
console.log( typeof "Hello" );                  //string
console.log( typeof 100 );                      //number
console.log( typeof true );                     //boolean
console.log( typeof undefined );                //undefined
console.log( typeof null );                     //object
console.log( typeof [] );                       //object
console.log( typeof function(){});              //function
console.log( typeof {} );                       //object
console.log( typeof 100n );                     //bigint
console.log( typeof Symbol("Hello") );          //symbol































































































































