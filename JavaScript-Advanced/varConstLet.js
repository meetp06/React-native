// console.log(a); //*here getting error because a is tdz
// *before line num 3 all lines are temporary dead zone when ever memory allocated that time tdz are closed
// let a = 45;

// console.log(b);//*here output is undefined because  b is in global scope
// var b = 65;

//!reference error : when we are not initialize any value for particular variable or any variable are in tdz that time we getting this error

//****window 
// console.log(c);
// var c = 78;
//*in web console output is :  window.c  :  78 
//*but not in let and const case because is it used their own or separate storage

//!syntax error : same variable are not used otherwise we getting syntax error
// *var d = 89;
// var d =  636;

// *let e = 65;
// let e =21; //*we can't do that in let and const

// *const f = 78;
// const f =96;

// console.log(d);
// *let declaration
// let a = 56;
// let b;
// b = 89;

// *var declaration
// var x = 89;
// var x = 23;
// var y = 56;
// y = 87;

//*const declarationf
// const z = 54; //*only one formate for declaration

//!type error 
const z = 54;
z = 56;  