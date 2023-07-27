// Truthy and Falsy


// Falsy Example
Boolean(false);         // false
Boolean(undefined);     // false
Boolean(null);          // false
Boolean('');            // false
Boolean(NaN);           // false
Boolean(0);             // false
Boolean(-0);            // false
Boolean(0n);            // false 

let a = NaN && -0;
console.log(a); // Output : NaN

let b = NaN || -0;
console.log(b); // Output : -0


//Truthy Example
Boolean(true);          // true
Boolean('hi');          // true
Boolean(1);             // true
Boolean([]);            // true
Boolean([0]);           // true
Boolean([1]);           // true
Boolean({});            // true
Boolean({ a: 1 });      // true
 
let c = 1 && [0];
console.log(c); // Output : [0]

let d = 1 || [0];
console.log(d); // Output : 1

//  || mai first good value pe stop varna last to lega hi 
//  && mai last good pe stop varna first to lega hi